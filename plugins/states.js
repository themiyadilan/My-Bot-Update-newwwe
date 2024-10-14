const fs = require('fs');
const path = require('path');
const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions'); // Assuming you have this function

// Function to determine the content type of a message
function getContentType(message) {
    if (!message) return null;
    if (message.conversation) return 'text';
    if (message.imageMessage) return 'image';
    if (message.videoMessage) return 'video';
    if (message.audioMessage) return 'audio';
    if (message.documentMessage) return 'document';
    // Add other message types as needed
    return null;
}

// Flag to track whether the status listener is initialized
let isStatusListenerInitialized = false;

// Ensure the connection is passed properly
async function initializeStatusListener(conn) {
    if (isStatusListenerInitialized) return; // Prevent reinitialization

    // Load configuration
    const config = await readEnv();

    // Listen for new messages, including status updates and replies
    conn.ev.on('messages.upsert', async (mek) => {
        try {
            // Ensure mek and messages are defined and contain valid data
            if (!mek || !mek.messages || mek.messages.length === 0) return;

            mek = mek.messages[0]; // Get the first message from the array

            if (!mek.key || !mek.key.remoteJid || !mek.message) {
                console.error("Invalid message structure:", JSON.stringify(mek, null, 2));
                return; // Exit if the structure is invalid
            }

            // Handle ephemeral messages
            mek.message = (getContentType(mek.message) === 'ephemeralMessage')
                ? mek.message.ephemeralMessage.message
                : mek.message;

            // Check if the message is a status update
            if (mek.key.remoteJid === 'status@broadcast') {
                const sender = mek.key.participant || mek.key.remoteJid; // Fallback to remoteJid if participant is missing
                console.log(`📢 New status update detected!`);
                console.log(`📝 Status posted by: ${sender}`);
                console.log(`💬 Full message details: ${JSON.stringify(mek, null, 2)}`);

                // Check the config to decide whether to send the status seen message
                if (config.STATES_SEEN_MESSAGE_SEND_SEND === 'true') {
                    const message = `${config.STATES_SEEN_MESSAGE}`;
                    await conn.sendMessage(sender, { text: message });
                    console.log(`👀 Seen message sent to ${sender}: "${message}"`);
                }
            }

            // Check if someone replied to a status Themiya posted
            if (mek.message.extendedTextMessage && config.STATES_DOWNLOAD === 'true') {
                const isReplyToStatus = mek.message.extendedTextMessage.contextInfo && mek.message.extendedTextMessage.contextInfo.participant === mek.key.participant;
                const sender = mek.key.participant || mek.key.remoteJid;

                if (isReplyToStatus && mek.message.extendedTextMessage.contextInfo.quotedMessage) {
                    // If someone replies to a status Themiya posted
                    const originalStatus = mek.message.extendedTextMessage.contextInfo.quotedMessage; // Get the original status
                    console.log(`🔄 Someone replied to Themiya's status!`);
                    console.log(`🙋‍♂️ Reply received from: ${sender}`);
                    console.log(`📜 Original status details: ${JSON.stringify(originalStatus, null, 2)}`);

                    // Send the original status as a reply
                    await conn.sendMessage(sender, originalStatus);
                    console.log(`📩 Sent the original status back to ${sender}`);
                }
            }

            // Check if Themiya replies to another person's status
            if (mek.key.fromMe && mek.message.extendedTextMessage && config.STATES_DOWNLOAD === 'true') {
                const isReplyToStatus = mek.message.extendedTextMessage.contextInfo && mek.message.extendedTextMessage.contextInfo.participant !== mek.key.participant;
                const recipient = mek.message.extendedTextMessage.contextInfo.participant || mek.key.remoteJid;

                if (isReplyToStatus && mek.message.extendedTextMessage.contextInfo.quotedMessage) {
                    // Themiya replied to someone else's status
                    const originalStatus = mek.message.extendedTextMessage.contextInfo.quotedMessage; // Get the original status
                    console.log(`📨 Themiya replied to someone's status!`);
                    console.log(`💡 Sending status to the original poster: ${recipient}`);
                    console.log(`📝 Original status details: ${JSON.stringify(originalStatus, null, 2)}`);

                    // Send the original status to the person who posted it
                    await conn.sendMessage(recipient, originalStatus);
                    console.log(`✅ Successfully sent the status to ${recipient}`);
                }
            }
        } catch (error) {
            console.error(`❌ Error processing message: ${error.message}`, error);
        }
    });

    isStatusListenerInitialized = true; // Mark the listener as initialized
}

// Command handler (if needed)
cmd({ on: "body" }, async (conn, mek, m, { from, body, isOwner }) => {
    // Initialize the status listener if it's not already done
    await initializeStatusListener(conn);

    // Additional command handling code can go here
    // You can implement your other functionalities as required
});