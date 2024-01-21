import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['5213331199136', '573013114854',  'NigromanteBot-MD 🍧', true], [''], [''], [''], [''], ['']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['5213331199136']
global.suittag = ['5213331199136']
global.mods = []
global.prems = []

global.packname = '© NigromanteBot'
global.author = 'Created By nigromante'
global.wm = '© NigromanteBot-MD'
global.wm2 = 'Nigromante : B𝗈𝗍'
global.azami = 'sinombre913'
global.cb = 'NigromanteBot-MD'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© sinombre913'
global.devnum = '+52 1 33 3119 9136'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
