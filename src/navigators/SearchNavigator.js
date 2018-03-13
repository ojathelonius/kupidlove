import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../screens/search/SearchScreen';
import SearchCardScreen from '../components/search-card/SearchCardScreen';
import NestedNavBar from '../components/NestedNavBar/NestedNavBar';

const Navigator = StackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                header: null
            }
        },
        SearchCard: {
            screen: SearchCardScreen,
            navigationOptions: {
                header: props => (<NestedNavBar {...props} title = 'Détails du profil'/>)
            }
        }
    },
    {
        initialRouteName: 'Search',
    }
);

class SearchNavigator extends React.Component {
    render() {
        return (
            <Navigator />
        );
    }
}

export default SearchNavigator;