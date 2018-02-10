import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import HomeScreen from './screens/home/HomeScreen';
import SearchScreen from './screens/search/SearchScreen';
import LoginScreen from './screens/login/LoginScreen';
import LoginMailScreen from './screens/login-mail/LoginMailScreen';
import configureStore from './setup/configureStore';
import * as Expo from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      arial: require("../fonts/Arial.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={this.state.store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
