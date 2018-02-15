import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import LoginScreen from '../screens/login/LoginScreen';
import LoginMailScreen from '../screens/login-mail/LoginMailScreen';
import HubNavigator from './HubNavigator';
import navService from '../middleware/navService';

const Navigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Search: {
            screen: SearchScreen
        },
        Login: {
            screen: LoginScreen
        },
        LoginMail: {
            screen: LoginMailScreen
        },
        HubNavigator: {
            screen: HubNavigator
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

class HomeNavigator extends React.Component {
    render() {
        return (
            <Navigator ref={navigatorRef => {
                navService.setContainer(navigatorRef);
            }} />
        );
    }
}

export default HomeNavigator;