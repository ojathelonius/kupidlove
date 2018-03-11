import React from 'react';
import { StackNavigator } from 'react-navigation';
import ChatListScreen from '../screens/chat-list/ChatListScreen';
import NestedNavBar from '../components/NestedNavBar/NestedNavBar';
import ChatScreen from '../screens/chat/ChatScreen';

const Navigator = StackNavigator(
    {
        ChatList: {
            screen: ChatListScreen,
            navigationOptions: {
                header: null
            }
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                header: props => (<NestedNavBar {...props} title = 'Conversation'/>)
            }
        }
    },
    {
        initialRouteName: 'ChatList',
    }
);

class ChatNavigator extends React.Component {
    render() {
        return (
            <Navigator />
        );
    }
}

export default ChatNavigator;