import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./AuthReducer/Reducer";
import { thunk } from "redux-thunk";
import { TaskReducer } from "./TaskReducer/Reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  data: TaskReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
