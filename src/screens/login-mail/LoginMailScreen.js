import React from 'react';
import { Dimensions, Image, StatusBar, Platform } from "react-native";
import { View, Container, Header, Content, Form, Item, Input, Label, H2, Button, Text, Icon, Title } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import style from "./LoginMailStyle.js";
import commonColor from "../../theme/variables/commonColor";
import BackButton from '../../components/BackButton/BackButton';
import FormInput from '../../components/FormInput/FormInput';

var deviceHeight = Dimensions.get("window").height;

class LoginMailScreen extends React.Component {
  render() {

    return (
      <Container>
        <StatusBar
          backgroundColor={
            Platform.OS === "android"
              ? commonColor.statusBarColor
              : "transparent"
          }
          barStyle="dark-content"
        />
        <View style={style.viewStyle}>
          <H2 style={style.textHeader}>Pas fan des réseaux sociaux ? Connectez-vous par e-mail !</H2>
          <Form>
            <Item floatingLabel>
              <Label>Adresse e-mail</Label>
              <Input keyboardType='email-address' uppercase={false} autoCapitalize='none' />
            </Item>
            <Field name="password" component={FormInput} label='Mot de passe' itemProps={{ last: true, floatingLabel: true }} inputProps={{ secureTextEntry: true }} />
            <Button block rounded style={style.emailLoginBtn}>
              <Text style={style.loginBtnText}>Connexion</Text>
            </Button>
            <BackButton navigation={this.props.navigation} />
          </Form>
        </View>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'LoginMail',
})(LoginMailScreen)