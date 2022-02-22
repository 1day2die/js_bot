
async function getJoke() {
    return new Promise((resolve) => {
        var url = 'https://v2.jokeapi.dev/joke/Dark,Pun';
        const https = require('https')
        let retval;

        https.get(url, (res) => {
            let body = "";

            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", () => {
                try {
                        let json = JSON.parse(body);
                        retval = (json.setup + " || " + json.delivery + "||");
                } catch (error) {
                    console.error(error.message);
                }
                ;
            });

        }).on("error", (error) => {
            console.error(error.message);
        });
        resolve(retval);
    });
}


module.exports = { getJoke };