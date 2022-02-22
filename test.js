const JokeWraper = require('./func/joke.js');

const Joke = new JokeWraper.JokeWrapper();

(async function (){
    try {
        const newjoke = await Joke.getJoke();
        console.log(newjoke);
    } catch (e) {
        console.log(e)
    }
})();