let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    await conn.sendButtonImg(m.chat, url, '*Meme*', wm, 'Gambar Selanjutnya', '.meme',m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler
