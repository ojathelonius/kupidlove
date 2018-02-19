import React from 'react';
import style from "./NestedNavBarStyle.js";
import { NavigationActions } from 'react-navigation';
import { Icon, Header, Button, View, Text, Left, Body, Right } from "native-base";


class NestedNavBar extends React.Component {

    render() {
        const backAction = NavigationActions.back({
            key: null,
        });

        return (
            <View style={style.navContainer}>
                <View style={style.flexContainer}>
                    <View style={style.flexLeft}>
                        <Button transparent onPress={() => this.props.navigation.dispatch(backAction)}>
                            <Icon name='arrow-back' style={style.backArrow} />
                        </Button>
                    </View>
                    <View style={style.flexCenter}>
                        <Text style={style.title}>{this.props.title}</Text>
                    </View>
                    <View style={style.flexRight} />
                </View>
            </View>
        );
    }
}

export default NestedNavBar;