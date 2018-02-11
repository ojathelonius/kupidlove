import api from '../middleware/api';
import storage from '../middleware/storage';
import fetch from 'whatwg-fetch';

export const loginEmail = (email, password) => ((dispatch) => {
    const body = {
        email: email,
        password: password
    }

    api.post('/auth/login', body)
        .then(response => storage.store('jwt', response.data.jwtAccessToken)
    );
})
