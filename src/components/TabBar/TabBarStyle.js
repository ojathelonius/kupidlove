import commonColor from "../../theme/variables/commonColor";
import { Dimensions, Platform} from "react-native";
import * as Expo from "expo";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {
    navContainer :{
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
        justifyContent: 'center'
    },
    header: {
        padding: 0,
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3
    },
    footerTab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    activeIcon: {
        color: commonColor.brandPrimary
    },
    inactiveIcon: {
        color: commonColor.darkGrey
    }
};