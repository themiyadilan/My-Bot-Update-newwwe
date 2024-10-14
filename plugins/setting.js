const { updateEnv, readEnv } = require('../lib/database'); const EnvVar = require('../lib/mongodbenv'); const { cmd } = require('../command'); const sensitiveData = require('../dila_md_licence/a/b/c/d/dddamsbs'); async function handleUpdate(reply, key, newValue, validation, errorMsg) { if (validation && !validation(newValue)) { return reply(errorMsg); } try { await updateEnv(key, newValue); reply(`*This is success...✅*\n${newValue}`); } catch (err) { console.error(`Error updating ${key}: ` + err.message); reply(`🙇‍♂️ *Failed to update ${key}. Please try again.*\n` + err); } } cmd({ pattern: "settings", alias: ["setting"], react: "🗝️", desc: "Check bot online or not.", category: "main", filename: __filename }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => { try { return await conn.sendMessage(from, { image: { url: 'https://telegra.ph/file/959a00b8f92106a8856de.jpg' }, caption: `*${sensitiveData.ahahabsbsbdb}*\n\n𝗬𝗢𝗨𝗥 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦\ntype - .mysetting\n\n𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘\nex - .ownername ${sensitiveData.ajababaaaaaa}\n\n𝗢𝗪𝗡𝗘𝗥 𝗡𝗨𝗠𝗕𝗘𝗥\nex - .ownernumber 94777xxxxxx\n\n𝗢𝗪𝗡𝗘𝗥 𝗙𝗥𝗢𝗠\nex - .ownerfrom matara\n\n𝗢𝗪𝗡𝗘𝗥 𝗔𝗚𝗘\nex - .ownerage 20\n\n𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗\nex - .ownercommand dilo\n\n𝗔𝗟𝗜𝗩𝗘𝗜𝗠𝗚\nex - .aliveimg (img url)\n\n𝗔𝗟𝗜𝗩𝗘𝗠𝗦𝗚\nex - .alivemsg (your alive msg)\n\n𝗣𝗥𝗘𝗙𝗜𝗫\nex - .prefix,*&%$#\n\n𝗔𝗨𝗧𝗢𝗦𝗧𝗔𝗧𝗘𝗦\n*true or false*\nex - .autostates true\n\n𝗠𝗢𝗗𝗘\n*private, public, groups, inbox*\nex - .mode public\n\n𝗔𝗨𝗧𝗢𝗩𝗢𝗜𝗖𝗘\n*true or false*\nex - .autovoice true\n\n𝗔𝗨𝗧𝗢𝗜𝗠𝗚\n*true or false*\nex - .autoimg true\n\n𝗔𝗨𝗧𝗢𝗩𝗜𝗗𝗘𝗢\n*true or false*\nex - .autovideo true\n\n𝗔𝗨𝗧𝗢𝗦𝗧𝗜𝗖𝗞𝗘𝗥\n*true or false*\nex - .autosticker true\n\n𝗔𝗨𝗧𝗢𝗥𝗘𝗣𝗟𝗬\n*true or false*\nex - .autoreply true\n\n𝗔𝗜𝗖𝗛𝗔𝗧\n*true or false*\nex - .aichat true\n\n𝗪𝗔𝗥𝗡𝗖𝗢𝗨𝗡𝗧\nex - .warncount 10\n\n𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞\n*delete, warn, kick, off*\nex - .antilink delete\n\n𝗔𝗡𝗧𝗜𝗕𝗔𝗗\n*delete, warn, kick, off*\nex - .antibad delete\n\n𝗔𝗡𝗧𝗜𝗩𝗢𝗜𝗖𝗘\n*delete, warn, kick, off*\nex - .antivoice delete\n\n𝗔𝗡𝗧𝗜𝗦𝗧𝗜𝗖𝗞𝗘𝗥\n*delete, warn, kick, off*\nex - .antisticker delete\n\n𝗔𝗡𝗧𝗜𝗜𝗠𝗚\n*delete, warn, kick, off*\nex - .antiimg delete\n\n𝗔𝗡𝗧𝗜𝗩𝗜𝗗𝗘𝗢\n*delete, warn, kick, off*\nex - .antivideo delete` }, { quoted: mek }); } catch (e) { console.log(e); reply(`${e}`); } }); cmd({ pattern: "mysettings", alias: ["mysetting","botsettings","botsetting","welcomestates"], desc: "List all current bot settings", category: "owner", react: "📜", thumbnail: "https://telegra.ph/file/959a00b8f92106a8856de.jpg", filename: __filename }, async (conn, mek, m, { reply, isOwner }) => { if (!isOwner) return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); try { const allEnvVars = await EnvVar.find({}); const envList = allEnvVars.map(env => `${env.key}: ${env.value}`).join('\n'); return reply(`𝗬𝗢𝗨𝗥 𝗦𝗘𝗧𝗧𝗜𝗡𝗚\n\n${envList}`); } catch (err) { console.error('Error fetching environment variables: ' + err.message); return reply("🙇‍♂️ *Failed to fetch settings. Please try again.*"); } }); cmd({ pattern: "ownernumber", desc: "Update the owner's WhatsApp number", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your number using the correct format:\n\nExample: `.ownernumber 94777xxxxxx`"); } const formattedNumber = q.endsWith('@s.whatsapp.net') ? q : `${q}@s.whatsapp.net`; const key = 'OWNER_NUMBER'; handleUpdate(reply, key, formattedNumber, val => val.endsWith('@s.whatsapp.net'), "😓 *Invalid WhatsApp number format.* Please use: `94777xxxxxx`"); }); cmd({ pattern: "aliveimg", desc: "Update the alive image URL", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your image URL using the correct format:\n\nExample: `.aliveimg https://example.com/image.jpg`"); } const key = 'ALIVE_IMG'; handleUpdate(reply, key, q, val => val.startsWith('https://'), "😓 *Invalid URL format. Please provide a valid image URL.*"); }); cmd({ pattern: "alivemsg", desc: "Update the alive message", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your alive message using the correct format:\n\nExample: `.alivemsg Your alive message here`"); } const key = 'ALIVE_MSG'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "prefix", desc: "Update the command prefix", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q || q.length > 3) { return reply("Please set a valid prefix (1-3 characters) using the correct format:\n\nExample: `.prefix !`"); } const key = 'PREFIX'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "autostates", desc: "Enable or disable auto-read status", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_READ_STATUS'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "mode", desc: "Update bot mode", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'MODE'; const validModes = ['private', 'public', 'groups', 'inbox']; handleUpdate(reply, key, q, val => validModes.includes(val), `😒 *Invalid mode. Valid modes are: ${validModes.join(', ')}*`); }); cmd({ pattern: "autovoice", desc: "Enable or disable auto voice", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_VOICE'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "autoimg", desc: "Enable or disable auto image", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_IMAGE'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "autovideo", desc: "Enable or disable auto video", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_VIDEO'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `on` or `off`.*"); }); cmd({ pattern: "autosticker", desc: "Enable or disable auto sticker", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_STICKER'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "autoreply", desc: "Enable or disable auto reply", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_REPLY'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "aichat", desc: "Enable or disable AI chat", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_AI'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "warncount", desc: "Set the warn count limit", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q || isNaN(q) || q <= 0) { return reply("😓 *Invalid number. Please provide a valid number greater than 0 for warn count.*\n\nExample: `.warncount 3`"); } const key = 'WARN_COUNT'; handleUpdate(reply, key, q, val => !isNaN(val), "😓 *Invalid number. Please provide a valid number for warn count.*"); }); cmd({ pattern: "antilink", desc: "Set anti-link action", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ANTI_LINK'; const validActions = ['delete', 'warn', 'kick', 'off']; handleUpdate(reply, key, q, val => validActions.includes(val), `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`); }); cmd({ pattern: "antibad", desc: "Set anti-bad-words action", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ANTI_BAD'; const validActions = ['delete', 'warn', 'kick', 'off']; handleUpdate(reply, key, q, val => validActions.includes(val), `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`); }); cmd({ pattern: "antivoice", desc: "Set anti-voice action", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ANTI_VOICE'; const validActions = ['delete', 'warn', 'kick', 'off']; handleUpdate(reply, key, q, val => validActions.includes(val), `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`); }); cmd({ pattern: "antisticker", desc: "Set anti-sticker action", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ANTI_STICKER'; const validActions = ['delete', 'warn', 'kick', 'off']; handleUpdate(reply, key, q, val => validActions.includes(val), `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`); }); cmd({ pattern: "antiimg", desc: "Set anti-photo action", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ANTI_PHOTO'; const validActions = ['delete', 'warn', 'kick', 'off']; handleUpdate(reply, key, q, val => validActions.includes(val), `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`); }); cmd({ pattern: "antivideo", desc: "Set anti-video action", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ANTI_VIDEO'; const validActions = ['delete', 'warn', 'kick', 'off']; handleUpdate(reply, key, q, val => validActions.includes(val), `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`); }); cmd({ pattern: "ownername", desc: "Update the owner name", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("😓 *Please set your name.*\nExample: `.ownername Dila`"); } const key = 'WCPROFILENAME'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "ownerfrom", desc: "Update the owner from", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("😓 *Please set your location.*\nExample: `.ownerfrom Matara`"); } const key = 'WCPROFILEFROM'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "ownerage", desc: "Update the owner age", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("😓 *Please set your age.*\nExample: `.ownerage 20`"); } const key = 'WCPROFILEAGE'; handleUpdate(reply, key, q, val => !isNaN(val), "😓 *Invalid age. Please provide a valid number.*"); }); cmd({ pattern: "ownercommand", desc: "Update the owner command", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("😓 *Please set the command.*\nExample: `.ownercommand dilo`"); } const key = 'WCPROFILEMSG'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "xxxxxxxxxjs", desc: "Update the alive message", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your msg using the correct format:\n\nExample: `.grouptime group id/open time/close time`"); } const key = 'GROUP_TIME'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "welcome", desc: "Enable or disable welcome msg", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'WELCOME'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); });cmd({ pattern: "welcomealert", desc: "Enable or disable welcomealert", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'WELCOME_ALERT'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "welcomeset", desc: "Update the alive welcome message", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your welcome message using the correct format:\n\nExample: `.welcomeset Your welcome message here`"); } const key = 'WELCOME_SET'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "groupstimes", desc: "Update the groups open close times", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your welcome message using the correct format:\n\nExample: `.groupstimes (A Group ID)(Open Times)(Close Times)/(B Group ID)(Open Time)(Close Time)`\n\n_උදාහරණයක් ලෙස_\n\n.groupstimes (120363339144214528@g.us)(08:00,12:00,18:00)(09:00,14:00,22:00)/(120354639144214528@g.us)(08:30,09:45)(09:00,23:30)/(715563339144214528@g.us)(06:00)(23:00)"); } const key = 'GROUPS_TIMES'; handleUpdate(reply, key, q, null, null); });cmd({ pattern: "statesmsg", desc: "Enable or disable states mag", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'STATES_MSG_SEND'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); });cmd({ pattern: "statesrep", desc: "Update the states  message", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } if (!q) { return reply("Please set your alive message using the correct format:\n\nExample: `.statesrep Your message here`"); } const key = 'STATES_MSG'; handleUpdate(reply, key, q, null, null); }); cmd({ pattern: "autoreact", desc: "Enable or disable autoreact", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'AUTO_REACT'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); }); cmd({ pattern: "allowsonline", desc: "Enable or disable allows online", category: "owner", react: "✅", filename: __filename }, async (conn, mek, m, { q, reply, isOwner }) => { if (!isOwner) { return reply("_ඔබ බොට් හිමිකරු නොවේ...🚫_"); } const key = 'ALLOWS_ONLINE'; const validModes = ['true','false']; handleUpdate(reply, key, q, val => ['true', 'false'].includes(val), "😓 *Invalid value. Please use `true` or `false`.*"); });
