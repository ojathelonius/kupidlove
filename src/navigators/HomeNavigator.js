import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import LoginScreen from '../screens/login/LoginScreen';
import LoginMailScreen from '../screens/login-mail/LoginMailScreen';
import HubNavigator from './HubNavigator';
import navService from '../middleware/navService';
import { checkAuthAndRedirect } from '../actions/authActions';

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

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => dispatch(checkAuthAndRedirect('HubNavigator'))
  });
  
  const mapStateToProps = (state) => {
    return state;
  }
  

class HomeNavigator extends React.Component {

    componentWillMount() {
        this.props.checkAuth();
    }
    render() {
        return (
            <Navigator ref={navigatorRef => {
                navService.setContainer(navigatorRef);
            }} />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeNavigator);