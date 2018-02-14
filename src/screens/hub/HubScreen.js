import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View } from "native-base";
import { Platform } from "react-native";
import ProfileScreen from '../profile/ProfileScreen';
import SearchScreen from '../search/SearchScreen';
import ChatScreen from '../chat/ChatScreen';
import SettingsScreen from '../settings/SettingsScreen';
import EditProfileScreen from '../edit-profile/EditProfileScreen';
import NavBar from '../../components/NavBar/NavBar'

const HubNavigator = TabNavigator(
    {
        Profile: {
            screen: ProfileScreen
        },
        Search: {
            screen: SearchScreen
        },
        Chat: {
            screen: ChatScreen
        },
        Settings: {
            screen: SettingsScreen
        },
        EditProfile: {
            screen: EditProfileScreen
        }
    },
    {
        tabBarComponent: props => (<NavBar {...props}/>),
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: false
    }
);

class HubScreen extends React.Component {
    render() {
        return (
                <HubNavigator />
        );
    }
}

export default HubScreen;