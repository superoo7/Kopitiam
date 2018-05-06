import * as Discord from 'discord.js'
import { TRIGGER, ADMIN_ID } from './config'
import { deleteMessage } from './admin'
import gif from './gif'
import Global from './global'

let adminMessage: string = `
**ADMIN FEATURE**
\`${TRIGGER}delete <number>\` to <number> of messages (MAX: 100)
`

let userMessage: string = `
**User FEATURE**
\`${TRIGGER}delete\` to delete all message
`

const router = async (msg: Discord.Message, client: Discord.Client, gb: Global) => {
  let currentContent = msg.content
  if (currentContent.substring(0, 1) == TRIGGER) {
    // Make arguments from test 123 into [test, 123]
    let args = msg.content.substring(1).split(' ')
    // Get test
    let cmd = args[0].toLowerCase()
    // check admin
    const isAdmin = ADMIN_ID.includes(msg.author.id)
    switch (cmd) {
      case 'delete':
        if (isAdmin) {
          deleteMessage(msg, client, args).catch(() => {
            msg.reply('err')
          })
        } else {
          //@ts-ignore
          msg.reply('only admin can do that.').then((m: Discord.Message) => {
            m.delete(2500)
          })
        }
        break
      case 'help':
        isAdmin ? msg.reply(adminMessage) : msg.reply(userMessage)
        break
      case 'gif':
        gif(msg, args)
        break
      case 'q':
      case 'question':
        if (args.length === 1) {
          msg.delete()
          const fields: { name: string; value: string }[] = gb
            .getQuestions()
            .map((d: string, i: number) => {
              return { name: `${i + 1}`, value: d }
            })
          msg.channel.send({
            embed: {
              title: 'Question:',
              fields: fields
            }
          })
        } else if (args[1].toLowerCase() === 'clear') {
          if (isAdmin) {
            gb.clearQuestions()
            msg.delete()
            // @ts-ignore
            msg.reply(`question cleared`).then((m: Discord.Message) => {
              m.delete(2500)
            })
          } else {
            // @ts-ignore
            msg.reply(`not authorized`).then((m: Discord.Message) => {
              m.delete(2500)
            })
            msg.delete()
          }
        } else {
          const question = args.slice(1, args.length).join(' ')
          gb.addQuestions(`${question} from ${msg.author}`)
          // @ts-ignore
          msg.reply(`added question: ${question}`).then((m: Discord.Message) => {
            m.delete(4000)
          })
          msg.delete()
        }
        break
      default:
        msg.reply(`Type \`${TRIGGER}help\` to get started`)
        break
    }
  }
}

export default router
