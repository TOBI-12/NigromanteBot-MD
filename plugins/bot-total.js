var handler = async (m, { conn }) => {

let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length

conn.reply(m.chat, `*🎌 Total De Funciones De NigromanteBot-MD:* ${totalf}`, m, fake, )

}
handler.help = ['totalf']
handler.tags = ['bot']
handler.command = ['totalf']

handler.register = true

export default handler 
