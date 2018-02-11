import api from '../middleware/api';
import storage from '../middleware/storage';
import fetch from 'whatwg-fetch';
import * as actions from '../const/actions';
import { showAlert } from './uiActions';

export const loginEmail = (email, password) => ((dispatch) => {
    const body = {
        email: email,
        password: password
    }

    api.post('/auth/login', body)
        .then(response => {
            if (response.status == 200 && response.data.jwtAccessToken) {
                storage.store('jwt', response.data.jwtAccessToken)
                    .then((result) => result)
                    .catch((error) => error);
            } else if (response.status == 401) {
                dispatch(showAlert('Erreur', 'Identifiants incorrects.'))
            } else {
                dispatch(showAlert('Erreur', 'Erreur serveur.'))
            }
        }
        );
})
