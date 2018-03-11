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
import style from "./ChatListScreenStyle";
import data from "../../data/conversations";

class ChatListScreen extends React.Component {
  render() {
    return (
      <View style={style.viewStyle}>
        <Content style={{flex: 1}}>
          <List
            removeClippedSubviews={false}
            style={{ marginTop: 7 }}
            dataArray={data}
            renderRow={dataRow =>
              <ListItem
                avatar
                button
                style={{ marginLeft: 15 }}
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

export default ChatListScreen;