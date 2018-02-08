import commonColor from "../../theme/variables/commonColor";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    connexionBtn: {
        width: deviceWidth - 90,
        alignSelf: "center",
        backgroundColor: "#D80A21"
    },
    inscriptionBtn: {
        width: deviceWidth - 90,
        alignSelf: "center",
        backgroundColor: "#A00002",
        marginTop: 10
    },
    btnText: {
        fontSize: 15,
        fontWeight: "500"
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    fbIcon: {
        color: 'white',
        fontSize: 60
    },
    iconContainer: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};