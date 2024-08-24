const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "settings",
    desc: "Check bot settings ",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Send image with caption
        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: config.ALIVE_MSG }, { quoted: mek });

        // Send audio as a voice message
        await conn.sendMessage(from, { audio: { url: 'https://drive.google.com/uc?export=download&id=1UtbyKhdUoVWTJlwSGRUFo6tl3dAq42mF' }, mimetype: 'audio/mp4' }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});