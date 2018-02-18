import React from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/edit-profile/EditProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Navigator = StackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null
            }
        },
        EditProfile: {
            screen: EditProfileScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        initialRouteName: 'Profile'
    }
);

class ProfileNavigator extends React.Component {
    render() {
        return (
            <Navigator />
        );
    }
}

export default ProfileNavigator;