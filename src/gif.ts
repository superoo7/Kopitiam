import * as Discord from 'discord.js'
import axios from 'axios'
import * as qs from 'querystring'

const gif = async (msg: Discord.Message, args: string[]) => {
  const searchQuery = args.slice(1, args.length).join(' ')
  const query = {
    api_key: process.env.GIPHY_TOKEN,
    tag: searchQuery
  }

  const link = 'https://api.giphy.com/v1/gifs/random?' + qs.stringify(query)
  const res = await axios.get(link)
  //   await msg.delete()
  //   await msg.reply(`GIF for '${searchQuery}'\n${res.data.data.url}`)
  const gifLink = res.data.data.images.preview_gif.url
  await msg.delete()
  await msg.channel.send({
    embed: {
      title: `GIF for '${searchQuery}'`,
      image: {
        url: gifLink
      }
    }
  })
  return
}

export default gif
