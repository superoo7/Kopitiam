import * as Discord from 'discord.js'

import admin from './admin'
import { ADMIN_ID, BOT_ID, CHANNEL_ID, TRIGGER } from './config'

export default function message(msg: Discord.Message, client: Discord.Client): void {
  // Check Channel
  // @ts-ignore
  if (CHANNEL_ID.includes(msg.channel.id)) {
    if (BOT_ID === msg.author.id) {
      // Check if is the bot
      return
      // @ts-ignore
    } else if (ADMIN_ID.includes(msg.author.id)) {
      // Check if is the admin(s)
      console.log('admin')
      admin(msg, client)
    }
  }
}
