import * as actions from '../const/actions';
import { Alert } from "react-native";

export const showAlert = (title, message) => {
    Alert.alert(title, message);
     return {
         type: actions.SHOW_ALERT,
         message
     } 
}

export const hideTabBar = () => {
     return {
         type: actions.HIDE_TAB_NAVIGATOR
     }
}

