import * as Discord from 'discord.js'

import { ADMIN_ID, BOT_ID, CHANNEL_ID, TRIGGER } from './config'
import router from './router'
import Global from './global'

export default function message(msg: Discord.Message, client: Discord.Client, gb: Global): void {
  // Check Channel
  // @ts-ignore
  if (CHANNEL_ID.includes(msg.channel.id)) {
    if (BOT_ID === msg.author.id) {
      // Check if is the bot
      console.log('[Bot] ', msg.content)
      return
    } else {
      router(msg, client, gb)
    }
  }
}
