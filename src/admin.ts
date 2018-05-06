import * as Discord from 'discord.js'
import gif from './gif'
import { TRIGGER } from './config'

async function deleteMessage(msg: Discord.Message, client: Discord.Client, args: string[]) {
  if (!!parseInt(args[1])) {
    await msg.channel.fetchMessages({ limit: parseInt(args[1]) }).then(async (msgs: any) => {
      console.log(msgs.count)
      await msgs.map(async (m: Discord.Message, c: number) => {
        await m.delete(10)
      })
    })
    msg.reply('done')
  } else {
    msg.reply('invalid number')
  }
  return
}

export { deleteMessage }
