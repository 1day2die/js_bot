// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready to listen!');
});

/*
client.on('message', message =>{
    if(message.author.id == '293413357992542208') {
        message.react('🥥');
        return;
    }
});
*/
 

client.on('message', message =>{
    //GECKO
    if(message.author.id == '698819244766396416') {
        message.react('943771864801611836');
        message.react('943772659253145720');
    }
    //coconut
    if(message.author.id == '583695765042495488') {
        message.react('🥥');
    }
});



// Login to Discord with your client's token
client.login(token);