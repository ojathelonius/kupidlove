/**
 * API class
 */
export default class Api {

    constructor() {

    }

    /**
     * Includes headers and status
     * TODO : handle error
     */
    static post(route, body) {
        return fetch('https://dev.johanet.fr/api' + route, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json().then(json => ({
                headers: res.headers,
                status: res.status,
                json
            })))
            .catch((error) => console.log(error));
    }

}