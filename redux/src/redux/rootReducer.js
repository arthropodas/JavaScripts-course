import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducers from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducers,
});


export default rootReducer;