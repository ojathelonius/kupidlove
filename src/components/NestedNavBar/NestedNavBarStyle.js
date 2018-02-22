import commonColor from "../../theme/variables/commonColor";
import { Dimensions, Platform } from "react-native";
import * as Expo from "expo";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {
    navContainer: {
        height: 50,
        backgroundColor: '#ffffff'
    },
    navContainerWithPadding: {
        height: 80,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexLeft: {
        flex: 1
    },
    flexCenter:{
        flex: 2
    },
    flexRight:{
        flex: 1
    },
    backArrow :{
        color: '#000000'
    },
    title :{
        fontSize: 17,
        textAlign: 'center'
    },
    bigTitle :{
        fontSize: 21,
        textAlign: 'center'
    }
};