import commonColor from "../../theme/variables/commonColor";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  contentStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  textHeader: {
    marginBottom: 10,
    textAlign: 'center'
  },
  loginBtnText: {
    fontSize: 15,
    fontWeight: "500"
  },
  emailLoginBtn: {
    marginTop: 30,
    width: deviceWidth - 120,
    alignSelf: "center",
    backgroundColor: "#D80A21"
  },
};