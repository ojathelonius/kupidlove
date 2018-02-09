import commonColor from "../../theme/variables/commonColor";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  button: {
    marginTop: 15
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#A00002"
  }
};