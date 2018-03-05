import React from 'react';
import { Dimensions, Image, StatusBar, Platform, KeyboardAvoidingView } from "react-native";
import { Container, Button, H3, Form, Item, Input, Label, Text, View } from "native-base";
import { Field, reduxForm } from 'redux-form';
import FormInput from '../../components/FormInput/FormInput';
import FormRadioButton from '../../components/FormRadioButton/FormRadioButton';
import Swiper from "react-native-swiper";
import style from "./SignUpStyle.js";
import commonColor from "../../theme/variables/commonColor";
import NestedNavBar from '../../components/NestedNavBar/NestedNavBar';

var deviceHeight = Dimensions.get("window").height;

class SignUpScreen extends React.Component {

  submit(input, dispatch, props) {
    dispatch(loginEmail(input.email, input.password));
    Keyboard.dismiss();
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <NestedNavBar {...this.props} title='Inscription' paddingTop={true} bigTitle={true} />
        <KeyboardAvoidingView style={style.viewStyle} behavior="padding">
          <H3 style={style.textHeader}>Informations générales</H3>
          <Form>
            <Field name="email" component={FormInput} label='Adresse e-mail' itemProps={{ floatingLabel: true }} inputProps={{ keyboardType: 'email-address', uppercase: false, autoCapitalize: 'none' }} />
            <Field name="password" component={FormInput} label='Mot de passe' itemProps={{ floatingLabel: true }} inputProps={{ secureTextEntry: true }} />
            <Field name="prenom" component={FormInput} label='Prénom' itemProps={{ floatingLabel: true }} />
            <Field name="nom" component={FormInput} label='Nom' itemProps={{ floatingLabel: true }} />
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 15 }}>
              <Field name="sexe" component={FormRadioButton} label='Homme' />
              <Field name="sexe" component={FormRadioButton} label='Femme' />
            </View>
            <Button onPress={this.props.handleSubmit(this.submit)} block rounded style={style.signUpBtn} >
              <Text style={style.loginBtnText}>Inscription</Text>
            </Button>
          </Form>
        </KeyboardAvoidingView >
      </Container>
    );
  }
}

export default reduxForm({
  form: 'SignUp'
})(SignUpScreen);