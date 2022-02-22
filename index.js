const { Client, Intents } = require("discord.js")
const { token } = require("./config.json")
const jokeFile = require('./func/joke.js');
const guesserFile = require('./func/guesser.js');

const Joke = new jokeFile.JokeWrapper();
const Guesser = new guesserFile.GuesserWrapper();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

// When the client is ready, run this code (only once)
client.once("ready", async () => {
  console.log("Ready to listen!")
})

/*
client.on('message', message =>{
    if(message.author.id == '293413357992542208') {
        message.react('🥥');
        return;
    }
});
*/

client.on("messageCreate", ( async(message) => {
  if (message.author.bot) return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === '=data') {
    let name = args[0];
    const newGuess = await Guesser.getData(name);
    message.reply(newGuess);
  }

  if (command === '=joke') {
    const newjoke = await Joke.getJoke();
    message.reply(newjoke);
  }

  //GECKO
  if (message.author.id == "698819244766396416") {
    message.react("943771864801611836")
    message.react("943772659253145720")
  }
  //coconut
  if (message.author.id == "583695765042495488") {
    message.react("🥥")
  }
}));

// Login to Discord with your client's token
client.login(token)
