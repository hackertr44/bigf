const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, params, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Davet takip Kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let davettakip_ = message.mentions.channels.first().id
     if (!davettakip_) return message.channel.send(':no_entry: Davet takip Kanalı Ayarlamak İçin Bir Kanal Etiketlemelisin. `*davet-takip #kanal`')
    let gkanal =  db.set(`davettakip_${message.guild.id}`, davettakip_)
        message.channel.send(`<#${gkanal}> Kanal ayarlandı.`)        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'davet-takip',
 description: 'Davet takip kanalı ayarlar',
 usage: 'davet-takip'
};