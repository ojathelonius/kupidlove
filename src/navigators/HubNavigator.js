import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View } from "native-base";
import { Platform } from "react-native";
import ProfileNavigator from './ProfileNavigator';
import SearchScreen from '../screens/search/SearchScreen';
import ChatScreen from '../screens/chat/ChatScreen';
import EditProfileScreen from '../screens/edit-profile/EditProfileScreen';
import TabBar from '../components/TabBar/TabBar'

const Navigator = TabNavigator(
    {
        Profile: {
            screen: ProfileNavigator
        },
        Search: {
            screen: SearchScreen
        },
        Chat: {
            screen: ChatScreen
        }
    },
    {
        tabBarComponent: props => (<TabBar {...props}/>),
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: false
    }
);

class HubNavigator extends React.Component {
    render() {
        return (
                <Navigator />
        );
    }
}

export default HubNavigator;