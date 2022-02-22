
const fetch = require('node-fetch')

class JokeWrapper {
    /**
     * @param {string} jokeapi_url Web address of the joke api
     */
    constructor(jokeapi_url) {
        this.jokeapi_url = jokeapi_url || "https://v2.jokeapi.dev/joke/";
    }

    /**
     * Get a joke from the joke api
     * @param {Array} type List of topicable categories
     * @returns 
     */
    getJoke(type = ["Dark", "Pun"]) {
        return new Promise((resolve, reject) => {
            fetch(`${this.jokeapi_url}${type.join(',')}`)
                .then(res => res.json())
                .then(json => {
                    resolve(json.setup + "\n ||" + json.delivery+"||");
                })
                .catch(e => reject(e));
        });
    }
}

module.exports = { JokeWrapper };