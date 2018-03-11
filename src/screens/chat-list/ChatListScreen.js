import React from 'react';
import {
  Container,
  Content,
  Button,
  Icon,
  Header,
  Title,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
  List
} from "native-base";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import style from "./ChatListScreenStyle";
import data from "../../data/conversations";



const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToChat: (name) => {
    ownProps.navigation.navigate({
      routeName: "Chat",
      params: { name: name }
    });
  }
});

const mapStateToProps = (state) => {
  return state;
}

class ChatListScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <Content style={{ flex: 1 }}>
          <List
            removeClippedSubviews={false}
            style={{ marginTop: 7 }}
            dataArray={data}
            renderRow={dataRow =>
              <ListItem
                avatar
                button
                style={{ marginLeft: 15 }}
                onPress={() => this.props.navigateToChat(dataRow.name)}
              >
                <Left>
                  <Thumbnail round source={dataRow.thumbnail} />
                </Left>
                <Body>
                  <Text style={style.usernameTxt}>
                    {dataRow.name}
                  </Text>
                  <Text style={style.distanceTxt}>
                    {dataRow.distance}
                  </Text>
                </Body>
              </ListItem>}
          />
        </Content>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatListScreen);