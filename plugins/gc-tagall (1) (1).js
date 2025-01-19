let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨 ${pesan}`
  let teks = `💖Bot baby te invoca💖

*@ventas.candy_*\n\n ${oi}\n\n ➜ *ETIQUETA*:\n`
  for (let mem of participants) {
  teks += `📣  @${mem.id.split('@')[0]}\n`}
  teks += `BabyBot`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler