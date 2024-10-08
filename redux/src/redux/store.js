import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store