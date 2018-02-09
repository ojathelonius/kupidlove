import React from 'react';
import { Dimensions, Image, StatusBar, Platform } from "react-native";
import { View, Container, Header, Content, Form, Item, Input, Label, H2, Button, Text, Icon, Title } from 'native-base';
import style from "./LoginMailStyle.js";
import commonColor from "../../theme/variables/commonColor";
import BackButton from '../../components/BackButton/BackButton';

var deviceHeight = Dimensions.get("window").height;

class LoginMailScreen extends React.Component {
  render() {
    return (
      <Container>
        <View style={style.contentStyle}>
          <H2 style={style.textHeader}>Pas fan des réseaux sociaux ? Connectez-vous par e-mail !</H2>
          <Form>
            <Item floatingLabel>
              <Label>Adresse e-mail</Label>
              <Input keyboardType='email-address' uppercase={false} autoCapitalize='none' />
            </Item>
            <Item floatingLabel last>
              <Label>Mot de passe</Label>
              <Input secureTextEntry />
            </Item>
            <Button block rounded style={style.emailLoginBtn}>
              <Text style={style.loginBtnText}>Connexion</Text>
            </Button>
            <BackButton navigation={this.props.navigation}/>
          </Form>
        </View>
      </Container>
    );
  }
}

export default LoginMailScreen;