import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tabReducer from './tabReducer';

export default combineReducers({
  tab: tabReducer,
  form: formReducer
});
