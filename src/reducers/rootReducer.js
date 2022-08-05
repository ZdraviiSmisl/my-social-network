import {usersReducer} from "./usersReducer";
import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";

const rootReducer = {
  usersReducer,
  postsReducer
}

export default combineReducers(rootReducer);