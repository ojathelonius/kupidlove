import React from 'react';
import { Dimensions, Image, StatusBar, Platform } from "react-native";
import { Container, Content, Text, Button, View } from "native-base";
import Swiper from "react-native-swiper";
import style from "./LoginStyle.js";
import commonColor from "../../theme/variables/commonColor";

var deviceHeight = Dimensions.get("window").height;

class LoginScreen extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <StatusBar
          backgroundColor={
            Platform.OS === "android"
              ? commonColor.statusBarColor
              : "transparent"
          }
          barStyle="dark-content"
        />
        <View scrollEnabled={false} style={style.contentStyle}>
          <Swiper
            style={style.swiperStyle}
            loop={false}
            dot={<View style={style.swiperDot} />}
            activeDot={<View style={style.swiperActiveDot} />}
          >
            <View style={style.swiperView}>
              <Text style={style.loginText}>
                Découvrez des personnes intéressantes autour de vous !
              </Text>
              <Image
                source={require("../../../assets/login_demo1.jpg")}
                style={style.profilImage}
              />
            </View>

            <View style={style.swiperView}>
              <Text style={style.loginText}>
                Vous pouvez anonymement liker ou passer des personnes.
              </Text>
              <Image
                source={require("../../../assets/login_demo2.jpg")}
                style={style.profilImage}
              />
            </View>

            <View style={style.swiperView}>
              <Text style={style.loginText}>
                Quand quelqu'un vous like, c'est...
              </Text>
              <Image
                source={require("../../../assets/login_demo3.jpg")}
                style={style.profilImage}
              />
            </View>

            <View style={style.swiperView}>
              <Text style={style.loginText}>
                Discutez et apprenez à connaître vos matchs !
              </Text>
              <Image
                source={require("../../../assets/login_demo4.jpg")}
                style={style.profilImage}
              />
            </View>

          </Swiper>

          <Button block rounded style={style.fbLoginBtn}>
            <Text style={style.loginBtnText}>Se connecter par Facebook</Text>
          </Button>
          <Button block rounded style={style.instaLoginBtn}>
            <Text style={style.loginBtnText}>Se connecter par Instagram</Text>
          </Button>
          <Button block transparent rounded style={style.emailLoginBtn} onPress={() => this.props.navigation.navigate('LoginMail')}>
            <Text style={style.emailLoginBtnText}>Se connecter par e-mail</Text>
          </Button>
        </View>

        <View style={style.noteView}>
          <Text style={style.noteText}>
            En vous inscrivant, vous acceptez nos termes et politiques de confidentialité.
          </Text>
        </View>
      </Container>
    );
  }
}

export default LoginScreen;