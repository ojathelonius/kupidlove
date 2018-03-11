import React from 'react';
import { View, ImageBackground, Animated } from 'react-native';
import {
  Container,
  Text,
  Card,
  CardItem,
  DeckSwiper,
  Grid,
  Row,
  Icon,
  Button,
  Right,
  Body
} from "native-base";
import style from "./SearchScreenStyle";
import data from "../../data/profiles";
import commonColor from "../../theme/variables/commonColor";

class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: null,
      opac: 0
    };
  }

  render() {
    return (
      <Animated.View style={style.viewStyle}>
        <Container style={style.wrapper}>
          <Animated.View style={style.deckswiperView}>
            <DeckSwiper
              activeOpacity={1}
              dataSource={data}
              ref={mr => (this._deckSwiper = mr)}
              onSwiping={(dir, opa) =>
                this.setState({ direction: dir, opac: opa })}
              renderTop={item =>
                <Card activeOpacity={1} style={{ borderRadius: 10 }}>
                  <CardItem
                    button
                    style={style.deckswiperImageCarditem}
                    activeOpacity={1}
                    cardBody
                  >
                    <ImageBackground style={style.cardMain} source={item.image}>
                      {this.state.direction === "left" &&
                        <Animated.View
                          style={{
                            opacity: -this.state.opac / 150,
                            position: "absolute",
                            right: 30,
                            top: 40,
                            borderWidth: 2,
                            borderRadius: 5,
                            borderColor: commonColor.brandPrimary,
                            width: 100,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [{ rotate: "20deg" }]
                          }}
                        >
                          <Text
                            style={{
                              backgroundColor: "transparent",
                              fontSize: 30,
                              color: commonColor.brandPrimary,
                              fontWeight: "900",
                              textAlign: "center",
                              lineHeight: 35
                            }}
                          >
                            NOPE
                        </Text>
                        </Animated.View>}
                      {this.state.direction === "right" &&
                        <Animated.View
                          style={{
                            opacity: this.state.opac / 150,
                            position: "absolute",
                            left: 30,
                            top: 40,
                            borderWidth: 2,
                            borderRadius: 5,
                            borderColor: commonColor.brandSuccess,
                            width: 100,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [{ rotate: "-20deg" }]
                          }}
                        >
                          <Text
                            style={{
                              backgroundColor: "transparent",
                              fontSize: 30,
                              color: commonColor.brandSuccess,
                              fontWeight: "900",
                              textAlign: "center",
                              lineHeight: 35
                            }}
                          >
                            Like
                        </Text>
                        </Animated.View>}
                    </ImageBackground>
                  </CardItem>
                  <CardItem
                    button
                    activeOpacity={1}
                    style={style.deckswiperDetailsCarditem}
                  >
                    <Body>
                      <Text style={style.text}>
                        {item.name}, {item.age}
                      </Text>
                      <Text style={style.subtextLeft}>
                        {item.situation}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>}
              renderBottom={item =>
                <Card style={{ borderRadius: 10 }}>
                  <CardItem
                    style={{
                      borderTopLeftRadius: 10,
                      overflow: "hidden",
                      borderTopRightRadius: 10
                    }}
                    cardBody
                  >
                    <ImageBackground style={style.cardMain} source={item.image} />
                  </CardItem>
                  <CardItem
                    style={{
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10
                    }}
                  >
                    <Body>
                      <Text style={style.text}>
                        {item.name}, {item.age}
                      </Text>
                      <Text style={style.subtextLeft}>
                        {item.situation}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>}
            />
          </Animated.View>
          <Grid style={style.bottomGrid}>
            <Row style={style.bottomRowStyle}>
              <Button
                style={style.bottomRoundedPills}
                onPress={() => this._deckSwiper._root.swipeLeft()}
              ><View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                  <Icon
                    name="md-close"
                    style={{
                      color: commonColor.brandPrimary,
                      fontSize: 40,
                      lineHeight: 40
                    }}
                  />
                </View>
              </Button>
              <Button
                style={style.bottomRoundedPills}
                onPress={() => this._deckSwiper._root.swipeRight()}
              >
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row'  }}>
                  <Icon
                    name="md-heart"
                    style={{
                      color: commonColor.brandPrimary,
                      fontSize: 35,
                      lineHeight: 40,
                      marginLeft: 2,
                      marginRight: 2
                    }}
                  />
                </View>
              </Button>
            </Row>
          </Grid>
        </Container>
      </Animated.View>
    );
  }
}

export default SearchScreen;