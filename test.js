const guesserFile = require('./func/guesser.js');

const Guesser = new guesserFile.GuesserWrapper();

(async function (){
    const Person = "Marc"
    try {
        const Guess = await Guesser.getGuess(Person);
        console.log(`I think ${Person} is ${Guess.age} years old and from ${Guess.country} and his gender is ${Guess.gender}`);
    } catch (e) {
        console.log(e)
    }
})(); 