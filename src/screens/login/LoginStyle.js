import commonColor from "../../theme/variables/commonColor";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  swiperStyle: {
    height: deviceHeight / 2
  },
  swiperDot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 30
  },
  swiperActiveDot: {
    backgroundColor: commonColor.brandPrimary,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 30
  },
  loginText: {
    fontSize: 18,
    color: commonColor.contentTextColor,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10
  },
  profilImage: {
    height: deviceHeight / 2.5,
    width: deviceWidth / 1.5
  },
  fbLoginBtn: {
    width: deviceWidth - 90,
    alignSelf: "center",
    backgroundColor: "#D80A21"
  },
  instaLoginBtn: {
    width: deviceWidth - 90,
    alignSelf: "center",
    backgroundColor: "#A00002",
    marginTop: 10
  },
  emailLoginBtn: {
    width: deviceWidth - 90,
    alignSelf: "center",
    marginTop: 10
  },
  loginBtnText: {
    fontSize: 15,
    fontWeight: "500"
  },
  emailLoginBtnText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#A00002"
  },
  noteView: {
    marginHorizontal: 30,
    bottom: 10
  },
  noteText: {
    color: commonColor.lightTextColor,
    fontSize: 12,
    textAlign: "center"
  },
  contentStyle: {
    justifyContent: "center",
    flex: 1
  },
  swiperView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5
  }
};