import React from 'react';
import { Image, View, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import commonColor from "../../theme/variables/commonColor";
import styles from "./ProfileScreenStyle";
import { hideTabBar } from '../../actions/uiActions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => ({
    navigateTo: (screen) => {
      dispatch(hideTabBar());
      ownProps.navigation.navigate(screen);
    }
});

const mapStateToProps = (state) => {
  return state;
}


class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <View style={styles.profileImageView}>
            <Image
              source={require("../../../assets/profile.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileDescriptionView}>
            <Text style={styles.nameAndAgeText}>Emmanuel Macron, 40 ans</Text>
            <View style={{ padding: 5 }}>
              <Text style={styles.workplaceText}>
                Président de la République
              </Text>
            </View>
            <Text style={styles.workplaceText}>Paris, France</Text>

            <Button
              transparent
              onPress={() => this.props.navigateTo("EditProfile")}
              style={styles.profileButton}
            >

              <Icon
                name="create"
                style={{ color: commonColor.brandPrimary }}
              />
              <Text style={styles.profileButtonText}>Modifier le profil</Text>
            </Button>
            <Button
              transparent
              onPress={() => this.props.navigateTo("Settings")}
              style={styles.profileButton}
            >

              <Icon
                name="md-settings"
                style={{ color: commonColor.brandPrimary }}
              />
              <Text style={styles.profileButtonText}>Paramètres</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);