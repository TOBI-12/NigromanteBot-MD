import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [
[ '5213331199141', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁 ✨', true ],
  ['573004826011', '𝙾𝚆𝙽𝙴𝚁 𝙳𝙸𝙴𝙶𝙾 🌱', true ]
  ['5213339577315', '𝙾𝚆𝙽𝙴𝚁 𝙲𝚁𝙴𝙰𝙳𝙾𝚁', true]
  ['5213316932903', '𝙾𝚆𝙽𝙴𝚁', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['5213331199141']
global.suittag = ['5213331199141']
global.mods = ['5213339577315']
global.prems = ['5213316932903']

global.packname = '𝐍𝐢𝐠𝐫𝐨𝐦𝐚𝐧𝐭𝐞𝐁𝐨𝐭-𝐌𝐃✨'
global.author = '𝙾𝚆𝙽𝙴𝚁 - 𝙲𝚁𝙴𝙰𝙳𝙾𝚁'
global.wm = '𝙽𝙸𝙶𝚁𝙾𝙼𝙰𝙽𝚃𝙴𝙱𝙾𝚃-𝙼𝙳 🌱'
global.wm2 = 'ℕ𝕚𝕘𝕣𝕠𝕞𝕒𝕟𝕥𝕖 - 𝔹𝕠𝕥 🍁'
global.azami = '𝙱𝚈: 𝚂𝚃𝙰𝙵𝙵'
global.cb = 'NɪɢʀᴏᴍᴀɴᴛᴇBᴏᴛ-MD 🐺'

global.vs = 'V2 • 0.2.1'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© sinombre913'
global.devnum = '+52 1 33 3119 9141'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
