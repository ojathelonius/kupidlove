import commonColor from "../theme/variables/commonColor";
import { Dimensions }  from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  swiperDot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 20
  },
  swiperActiveDot: {
    backgroundColor: commonColor.brandPrimary,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 20
  },
  swiperSlidesView: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  loginText: {
    fontSize: 18,
    color: commonColor.contentTextColor,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10
  },
  swiperImageView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden"
  },
  profilImage: {
    height: deviceHeight / 2.5,
    width: deviceWidth / 1.7,
    marginBottom: 30
  },
  loginBtn: {
    width: deviceWidth - 60,
    alignSelf: "center",
    backgroundColor: "#3B5998"
  },
  loginBtnText: {
    fontSize: 15,
    fontWeight: "500"
  },
  noteView: {
    marginHorizontal: 30,
    bottom: 10
  },
  noteText: {
    color: commonColor.lightTextColor,
    fontSize: 12,
    textAlign: "center"
  }
};