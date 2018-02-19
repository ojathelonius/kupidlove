import React from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/edit-profile/EditProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import NestedNavBar from '../components/NestedNavBar/NestedNavBar';

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
            navigationOptions: {
                header: props => (<NestedNavBar {...props} title = 'Modification du profil'/>)
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                header: props => (<NestedNavBar {...props} title = 'Paramètres'/>)
            }
        },
    },
    {
        initialRouteName: 'Profile',
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