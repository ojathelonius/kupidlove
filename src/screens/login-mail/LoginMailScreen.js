import React from 'react';
import { Dimensions, Image, StatusBar, Platform, Keyboard } from "react-native";
import { View, Container, Header, Content, Form, Item, Input, Label, H2, Button, Text, Icon, Title } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import style from "./LoginMailScreenStyle.js";
import commonColor from "../../theme/variables/commonColor";
import BackButton from '../../components/BackButton/BackButton';
import FormInput from '../../components/FormInput/FormInput';
import { loginEmail } from '../../actions/authActions';

var deviceHeight = Dimensions.get("window").height;

/* Component */
class LoginMailScreen extends React.Component {

  submit(input, dispatch, props) {
    dispatch(loginEmail(input.email, input.password));
    Keyboard.dismiss();
  }

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
            <Field name="email" component={FormInput} label='Adresse e-mail' itemProps={{ floatingLabel: true }} inputProps={{ keyboardType: 'email-address', uppercase: false, autoCapitalize: 'none' }} />
            <Field name="password" component={FormInput} label='Mot de passe' itemProps={{ floatingLabel: true }} inputProps={{ secureTextEntry: true }} />
            <Button onPress={this.props.handleSubmit(this.submit)} block rounded style={style.emailLoginBtn} >
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
  form: 'LoginMail'
})(LoginMailScreen);

