import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Dimensions, Platform, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { Container, Button, Icon, Header, Title, Left, Right, Body, Thumbnail } from "native-base";
import { GiftedChat, Actions, Bubble, Send, LoadEarlier, Composer } from "react-native-gifted-chat";
import commonColor from "../../theme/variables/commonColor";
import style from "./ChatScreenStyle";
import data from "../../data/messages";
import old_data from "../../data/old_messages";

var { height } = Dimensions.get("window");

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
    this.userName = this.props.navigation.state.params.name;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: data
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 600);
  }

  onLoadEarlier() {
    this.setState(previousState => {
      return {
        isLoadingEarlier: true
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState(previousState => {
          return {
            messages: GiftedChat.prepend(
              previousState.messages,
              old_data
            ),
            loadEarlier: false,
            isLoadingEarlier: false
          };
        });
      }
    }, 1000);
  }

  onSend(messages = []) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });

    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(previousState => {
          return {
            typingText: this.userName + " est en train d'écrire..."
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (!this._isAlright) {
            this._isAlright = true;
            this.onReceive("OK !");
          }

        }
      }

      this.setState(previousState => {
        return {
          typingText: null
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2
          }
        })
      };
    });
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#f0f0f0"
          },
          right: {
            backgroundColor: "#F7524C"
          }
        }}
      />
    );
  }
  renderSend(props) {
    return (
      <Send
        {...props}
        label='Envoyer'
        textStyle={{ color: commonColor.brandPrimary, marginTop: 10 }}
      />
    );
  }

  renderAvatar(props) {
    return <Thumbnail small source={require("../../../assets/fake1.jpg")} />;
  }

  renderLoadEarlier(props) {
    return (
      <LoadEarlier {...props} label='Charger plus de messages' />
    );
  }

  renderComposer(props) {
    return (
      <Composer {...props} placeholder='Ecrire un message' />
    );
  }


  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={style.footerContainer}>
          <Text style={style.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const navigation = this.props.navigation;
    if (!this.state.show) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator
            size="large"
            color={commonColor.brandPrimary}
            style={{ top: height / 2.2 }}
          />
        </View>
      );
    } else {
      return (
        <Container style={{ backgroundColor: "#FFF" }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <GiftedChat
              messages={this.state.messages}
              onSend={this.onSend}
              loadEarlier={this.state.loadEarlier}
              onLoadEarlier={this.onLoadEarlier}
              isLoadingEarlier={this.state.isLoadingEarlier}
              user={{
                _id: 1
              }}
              renderBubble={this.renderBubble}
              renderFooter={this.renderFooter}
              renderAvatar={this.renderAvatar}
              renderSend={this.renderSend}
              renderLoadEarlier={this.renderLoadEarlier}
              renderComposer={this.renderComposer}
            />
          </KeyboardAvoidingView>
        </Container>
      );
    }
  }
}

export default connect()(ChatScreen);
