let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : . butterfly PixelBot'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/butterfly?text=${response[0]}`
  conn.sendFile(m.chat, res, 'pixelbot.jpg', `© PixelBot`, m, false)
}
handler.help = ['butterfly'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(butterfly)$/i

module.exports = handler
