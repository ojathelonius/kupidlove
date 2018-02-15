import api from '../middleware/api';
import storage from '../middleware/storage';
import fetch from 'whatwg-fetch';
import * as actions from '../const/actions';
import { showAlert } from './uiActions';
import navService from '../middleware/navService';

export const loginEmail = (email, password) => ((dispatch) => {
    const body = {
        email: email,
        password: password
    }

    api.post('/auth/login', body)
        .then(response => {
            if (response.status == 200 && response.json.data.jwtAccessToken) {
                storage.store('jwt', response.json.data.jwtAccessToken)
                    .then(() => navService.navigate('HubNavigator'))
                    .catch((error) => console.log(error));
            } else if (response.status == 401) {
                dispatch(showAlert('Erreur', 'Identifiants incorrects.'))
            } else {
                dispatch(showAlert('Erreur', 'Erreur serveur.'))
            }
        })
        .catch((error) => dispatch(showAlert('Erreur', `Erreur lors de l'envoi de la requête.`)));
})
