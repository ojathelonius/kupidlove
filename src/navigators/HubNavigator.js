import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View } from "native-base";
import { Platform } from "react-native";
import ProfileNavigator from './ProfileNavigator';
import SearchNavigator from './SearchNavigator';
import ChatNavigator from './ChatNavigator';
import TabBar from '../components/TabBar/TabBar'

const Navigator = TabNavigator(
    {
        Profile: {
            screen: ProfileNavigator
        },
        Search: {
            screen: SearchNavigator
        },
        ChatList: {
            screen: ChatNavigator
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