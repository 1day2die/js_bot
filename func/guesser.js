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
     *
     * @param {string} name
     * @returns
     */
    getData(name) {
        var retvar = "";
        return new Promise((resolve, reject) => {
            fetch(`${this.ageapi_url}?name=${name}`)
                .then(res => res.json())
                .then(json => {
                   return retvar += json.name + "\n guessed age: " + json.age + "";
                })
                .then(fetch(`${this.genderapi_url}?name=${name}`))
                .then(res => res.json())
                .then(json => {
                    return retvar += "\n guessed gender: " + json.gender;
                })
                .then(resolve(retvar))
                .catch(e => reject(e));
        });
    }
}

module.exports = {GuesserWrapper};