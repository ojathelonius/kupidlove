import React from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../profile/ProfileScreen';
import EditProfileScreen from '../edit-profile/EditProfileScreen';
import SettingsScreen from '../settings/SettingsScreen';

const ProfileNav = StackNavigator(
    {   
        Profile: {
            screen: ProfileScreen
        },
        EditProfile: {
            screen: EditProfileScreen
        },
        Settings: {
            screen: SettingsScreen
        },
    },
    {
        initialRouteName: 'Profile',
        headerMode: 'none'
    }
);

class ProfileNavScreen extends React.Component {
    render() {
        return (
                <ProfileNav />
        );
    }
}

export default ProfileNavScreen;