import React from 'react';
import style from "./NavBarStyle.js";
import { NavigationActions } from 'react-navigation';
import { Icon, Header, FooterTab, Button, View } from "native-base";

class NavBar extends React.Component {

    render() {

        return (
            <View style={style.navContainer}>
                <Header style={style.header}>
                    <FooterTab style={style.footerTab}>
                        <Button onPress={() => this.props.navigation.navigate("Profile")}>
                            <Icon
                                name="md-person"
                                size={20}
                                style={
                                    this.props.navigation.state.index === 0
                                        ? style.activeIcon
                                        : style.inactiveIcon
                                }
                            />
                        </Button>

                        <Button onPress={() => this.props.navigation.navigate("Search")}>
                            <Icon
                                name="search"
                                size={20}
                                style={
                                    this.props.navigation.state.index === 1
                                        ? style.activeIcon
                                        : style.inactiveIcon
                                }
                            />
                        </Button>

                        <Button onPress={() => this.props.navigation.navigate("Chat")}>
                            <Icon
                                name="md-chatboxes"
                                size={20}
                                style={
                                    this.props.navigation.state.index === 2
                                        ? style.activeIcon
                                        : style.inactiveIcon
                                }
                            />
                        </Button>
                    </FooterTab>
                </Header>
            </View>
        );
    }
}

export default NavBar;