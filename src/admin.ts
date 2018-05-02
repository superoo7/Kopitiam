import * as Discord from 'discord.js'
import gif from './gif'
import { TRIGGER } from './config'

let defaultMessage: string = `
**ADMIN FEATURE**
\`${TRIGGER}delete\` to delete all message
`

export default function admin(msg: Discord.Message, client: Discord.Client): void {
  let currentContent = msg.content
  // Check Trigger ($ of $test 123)
  if (currentContent.substring(0, 1) == TRIGGER) {
    // Make arguments from test 123 into [test, 123]
    let args = msg.content.substring(1).split(' ')
    // Get test
    let cmd = args[0].toLowerCase()

    switch (cmd) {
      case 'delete':
        deleteMessage(msg, client, args).catch(() => {
          msg.reply('err')
        })
        break
      case 'help':
        msg.reply(defaultMessage)
        break
      case 'gif':
        gif(msg, args)
        break
      default:
        msg.reply(defaultMessage)
        break
    }
  }
  return
}

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

async function dM(client: any, id: string) {
  const LIMIT = 30
  let count: number = 1

  return count
}

// async function d(client: anu)
