import React from 'react';
import { ImageBackground, Image, View } from 'react-native';
import { Content, Text, Button, Icon } from "native-base";
import style from "./HomeStyle.js";

class HomeScreen extends React.Component {
  render() {
    return (
      <Content contentContainerStyle={style.container} scrollEnabled={false}>
        <ImageBackground
          source={require("../../../assets/boot.jpg")}
          style={style.backgroundImage}>
          <View style={{flex: 3, justifyContent: 'space-around', flexDirection: 'column'}}>
            <View>
              <Image source={require("../../../assets/logo_full_white.png")} style={style.logoStyle} />
            </View>
            <View style={style.iconContainer}>
              <Icon name='logo-facebook' style={style.fbIcon} />
            </View>
          </View>
          <View style={style.buttonGroup}>
            <Button block rounded style={style.connexionBtn} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={style.btnText}>Connexion</Text>
            </Button>
            <Button block rounded style={style.inscriptionBtn}>
              <Text style={style.btnText}>Inscription</Text>
            </Button>
          </View>
        </ImageBackground>
      </Content>
    );
  }
}

export default HomeScreen;