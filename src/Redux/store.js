import { createStore, combineReducers } from "redux";
import catalog_reducer from "./catalog_reducer";

let reducers = combineReducers({
  data: catalog_reducer,
});

let store = createStore(reducers);

export default store;
