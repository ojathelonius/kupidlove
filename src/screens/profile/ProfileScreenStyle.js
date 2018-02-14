import commonColor from "../../theme/variables/commonColor";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    marginTop: 1
  },
  profileImageView: {
    alignItems: "center",
    marginTop: 25
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  profileDescriptionView: {
    marginTop: 15
  },
  nameAndAgeText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center"
  },
  workplaceText: {
    fontSize: 14,
    color: commonColor.contentTextColor,
    textAlign: "center"
  },
  profileButton: {
    marginTop: 20,
    alignSelf: "center"
  },
  profileButtonText: {
    color: commonColor.brandPrimary,
    fontWeight: "600",
    fontSize: 14,
    paddingLeft: 0
  }
};
