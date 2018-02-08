import React from 'react';
import { Dimensions, Image, StatusBar, Platform } from "react-native";
import { Container, Content, Text, Button, View } from "native-base";
import Swiper from "react-native-swiper";
import styles from "./styles";
import commonColor from "../theme/variables/commonColor";

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
        <Content scrollEnabled={false}>
          <Swiper
            height={deviceHeight / 1.3}
            loop={false}
            dot={<View style={styles.swiperDot} />}
            activeDot={<View style={styles.swiperActiveDot} />}
          >
            <View style={styles.swiperSlidesView}>
              <Text style={styles.loginText}>
                Découvrez des personnes intéressantes autour de vous !
              </Text>
              <View style={styles.swiperImageView}>
                <Image
                  source={require("../../assets/login_demo1.jpg")}
                  style={styles.profilImage}
                />
              </View>
            </View>

            <View style={styles.swiperSlidesView}>
              <Text style={styles.loginText}>
                Vous pouvez anonymement liker ou passer des personnes.
              </Text>
              <View style={styles.swiperImageView}>
                <Image
                  source={require("../../assets/login_demo2.jpg")}
                  style={styles.profilImage}
                />
              </View>
            </View>

            <View style={styles.swiperSlidesView}>
              <Text style={styles.loginText}>
                Quand quelqu'un vous like, c'est...
              </Text>
              <View style={styles.swiperImageView}>
                <Image
                  source={require("../../assets/login_demo3.jpg")}
                  style={styles.profilImage}
                />
              </View>
            </View>

            <View style={styles.swiperSlidesView}>
              <Text style={styles.loginText}>
                Discutez et apprenez à connaître vos matchs !
              </Text>
              <View style={styles.swiperImageView}>
                <Image
                  source={require("../../assets/login_demo4.jpg")}
                  style={styles.profilImage}
                />
              </View>
            </View>
            
          </Swiper>
        </Content>

        <View style={styles.noteView}>
          <Text style={styles.noteText}>
            En vous inscrivant, vous acceptez nos termes et politiques de confidentialité.
          </Text>
        </View>
      </Container>
    );
  }
}

export default LoginScreen;