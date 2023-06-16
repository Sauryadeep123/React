import { combineReducers, createStore } from "redux";
import todoReducer from "./Reducer/todo-reducer";
const rootreducer=combineReducers({todoReducer,});
const store=createStore(rootreducer);
export default store;