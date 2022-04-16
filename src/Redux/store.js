import { createStore, combineReducers } from "redux";
import admin_reducer from "./admin_reducer";
import catalog_reducer from "./catalog_reducer";

let reducers = combineReducers({
  data: catalog_reducer,
  admin: admin_reducer,
});

let store = createStore(reducers);

export default store;
