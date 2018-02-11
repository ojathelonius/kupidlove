/**
 * API class
 */
export default class Api {

    constructor() {

    }

    // TODO : Handle errors
    static post(route, body) {
        return fetch('https://dev.johanet.fr/api' + route, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));


    }

}