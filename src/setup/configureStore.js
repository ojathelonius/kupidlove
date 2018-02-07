import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers";

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: "kupidlove",
      realtime: true
    })
  );

  // TODO : understand how the key is used
  // It seems like you can't pass a config object to persistStore anymore, see persistStore.js (l.61)
  let reducer = persistReducer({ storage: AsyncStorage, key: "kupidlove"}, rootReducer);
  let store = createStore(reducer, enhancer);
  persistStore(store, undefined, onCompletion);

  return store;
}
