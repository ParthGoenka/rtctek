import {createStore} from "redux";
import cakeReducer from "./cakereducer";
const store = createStore(cakeReducer)

export default store;