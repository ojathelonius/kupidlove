import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
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
    }
  },
  {
    initialRouteName: 'Login',
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
      <Navigator />
    );
  }
}

export default App;
