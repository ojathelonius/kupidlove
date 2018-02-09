import React from 'react';
import { Button, Text } from 'native-base';
import style from "./BackButtonStyle.js";
import { NavigationActions } from 'react-navigation';

class BackButton extends React.Component {
    /* If key is null, navigation goes back anywhere */
    render() {
        const backAction = NavigationActions.back({
            key: null,
        });

        return (
            <Button block transparent rounded style={style.button} onPress={() => this.props.navigation.dispatch(backAction)}>
                <Text style={style.buttonText}>Retour</Text>
            </Button>
        );
    }
}

export default BackButton;