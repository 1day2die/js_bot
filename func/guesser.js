const fetch = require('node-fetch')


class GuesserWrapper {
    /**
     * @param {string} ageapi_url Web address of the api
     * @param {string} landapi_url Web address of the api
     * @param {string} genderapi_url Web address of the api
     */
    constructor(ageapi_url, landapi_url, genderapi_url) {
        this.ageapi_url = ageapi_url || "https://api.agify.io/";
        this.landapi_url = landapi_url || "https://api.nationalize.io/";
        this.genderapi_url = genderapi_url || "https://api.genderize.io/";
    }

    /**
     * Get guessed age of the name
     * @param {String} name 
     * @returns 
     */
    #getAge(name) {
        return fetch(`${this.ageapi_url}?name=${name}`)
            .then(res => res.json())
            .then(json => json.age)
            .catch(err => {
                console.log(err);
                return new Error("Error", err);
            });
    }

    /**
     * Get guessed country of the name
     * @param {String} name 
     * @returns 
     */
    #getCountry(name) {
        return fetch(`${this.landapi_url}?name=${name}`)
            .then(res => res.json())
            .then(json => json.country[0].country_id)
            .catch(err => {
                console.log(err);
                return new Error("Error", err);
            });
    }

    /**
     * Get guessed gender of the name
     * @param {String} name 
     * @returns 
     */
    #getGender(name) {
        return fetch(`${this.genderapi_url}?name=${name}`)
            .then(res => res.json())
            .then(json => json.gender)
            .catch(err => {
                console.log(err);
                return new Error("Error", err);
            });
    }


    /**
     * Will return a object with all data
     * @param {string} name | Name of the person. Letters Only!
     * @returns {Promise}
     */
    getGuess(name) {
        const that = this //Not needed, but to make it more clear that this is a class method
        return new Promise((resolve, reject) => {
            if (!/^[a-zA-Z]+$/.test(name)) { reject(new Error("Error: Name must be a string with only letters")) } else {
                Promise.all([that.#getAge(name), that.#getCountry(name), that.#getGender(name)])
                    .then(data => {
                        const [age, country, gender] = data
                        resolve({ age, country, gender })
                    })
                    .catch(e => reject(e));
            }
        });
    }
}

module.exports = { GuesserWrapper };