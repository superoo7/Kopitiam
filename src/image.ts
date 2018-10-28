import * as Discord from 'discord.js'
import { getImgUrl } from './img/img'

const image = async (msg: Discord.Message, args: string[]) => {
  const searchQuery = args.slice(1, args.length).join(' ')

  if (getImgUrl(searchQuery)) {
    const imgUrl = getImgUrl(searchQuery)
    await msg.channel.send({
      embed: {
        title: `img for ${searchQuery}`,
        image: {
          url: imgUrl
        }
      }
    })
    return
  } else {
    msg.delete()
    // @ts-ignore
    msg.reply(`Invalid user`).then((m: Discord.Message) => {
      m.delete(3000)
    })
  }
}

export default image
