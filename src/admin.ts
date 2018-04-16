import * as Discord from 'discord.js'
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
        deleteMessage(msg, client, args)
        break
      case 'help':
        msg.reply(defaultMessage)
        break
      default:
        msg.reply(defaultMessage)
        break
    }
  }
  return
}

async function deleteMessage(msg: Discord.Message, client: any, args: string[]) {
  let messageSize: number = 1

  if (!!parseInt(args[1])) {
    await client.channels
      .get(msg.channel.id)
      .fetchMessages({ limit: parseInt(args[0]) })
      .then((msgs: any) => {
        console.log(msgs.count)
        msgs.map((m: any, c: number) => {
          m.delete(100)
        })
      })
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
