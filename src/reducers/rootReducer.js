import {usersReducer} from "./usersReducer";
import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {authReducer} from "./authReducer";

const rootReducer = {
  usersReducer,
  postsReducer,
  authReducer
}
export default combineReducers(rootReducer);