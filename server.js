const http = require('http');
const express = require('express');
const app = express();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Conectado..")

client.user.setActivity(`el texto de la actividad`, {
type: "STREAMING",
url: "https://www.twitch.tv/user"})//any Online Twitch Live 
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('token');

//Made By LyredCOde2