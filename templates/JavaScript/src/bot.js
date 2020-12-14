const discord = require('discord.js')
const client = new discord.Client()
const config = require('../config.json')

client.on("ready", () => {
    console.log('bot is ready')
    client.user.setActivity('your discord bot activity goes here')
})

client.on("message", message => {
    if(message.content === `${config.prefix}ping`)
    return message.channel.send('Pong')
})

client.on("message", message => {
    if(message.content === `${config.prefix}embed`) {
        let embed = new discord.MessageEmbed()
        .setTitle('embed title')
        .setColor('white')
        .setDescription('embed description')
        message.channel.send(embed)
    }
})

client.login(config.token)