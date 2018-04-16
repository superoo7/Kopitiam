// lib
import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'

// internal file
import message from './message'

// Initializer
dotenv.config()
const client = new Discord.Client()

// On Discord bot ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// When Discord bot receive message
client.on('message', msg => {
  message(msg, client)
})

// Discord Bot Sign in
client.login(process.env.DISCORD_TOKEN)
