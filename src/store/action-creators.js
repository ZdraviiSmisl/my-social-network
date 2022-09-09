import {
  ADD_REACTIONS,
  DELETE_POST, ERROR_AUTH,
  ERROR_LOADING,
  LIMIT_POSTS,
  LOADING,
  NEXT_ITEMS,
  PREV_ITEMS, SET_AUTH_USER, SET_LOGIN, SET_PASSWORD,
  SET_POSTS,
  SET_SKIP, SET_USER_EMAIL, SET_USER_ID,
  SET_USERS,
  TOTAL_POSTS
} from '../actions-types';
import axios from "axios";
import {authApi, postsApi} from "../pages/api/axios-rest";

export const setAllUsers = (payload) => ({type: SET_USERS, payload});
export const setAllPosts = (payload) => ({type: SET_POSTS, payload});
export const setTotalPosts = (totalPosts) => ({type: TOTAL_POSTS, totalPosts});
export const setLimitPosts = (limitPosts) => ({type: LIMIT_POSTS, limitPosts});
export const setSkipPosts = (skipPosts) => ({type: SET_SKIP, skipPosts});
export const setDeletePost = (payload) => ({type: DELETE_POST, payload});
export const loading = (isLoading) => ({type: LOADING, isLoading});
export const setErrorMessage = (message) => ({type: ERROR_LOADING, message});
export const setErrorAuth = (message) => ({type: ERROR_AUTH, message});
export const nextItems = (payload) => ({type: NEXT_ITEMS, payload});
export const prevItems = (payload) => ({type: PREV_ITEMS, payload});
export const incrementReactions = (payload) => ({type: ADD_REACTIONS,payload});

export const setUserName = (payload) => ({type: SET_LOGIN, payload});
export const setUserEmail = (payload) => ({type: SET_USER_EMAIL, payload});
export const setUserId = (payload) => ({type: SET_USER_ID, payload});
export const setAuthUser = (payload) => ({type: SET_AUTH_USER, payload});


export const getUsers = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.get("https://dummyjson.com/users");
    dispatch(setAllUsers(res.data));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(loading(false));
  }
}

export const getPosts = (limitPosts = 15, skipPosts = 15) => async (dispatch) => {

  try {
    dispatch(loading(true));
    const res = await postsApi.receivePosts(limitPosts, skipPosts);
    dispatch(setAllPosts(res.data));
    dispatch(setTotalPosts(res.data.total));
    dispatch(setLimitPosts(limitPosts));
    dispatch(setSkipPosts(skipPosts));


  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(loading(false));
  }
}

export const deletePost = (postId) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await postsApi.deleteSpecificPost(postId);
    dispatch(setDeletePost(postId));


  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(loading(false));
  }
}


export const getAuthUser = (userName,password) => async (dispatch) => {
  try {
      dispatch(loading(true));
    const res = await authApi.login(userName,password);
      dispatch(setUserName(res.data.username));
      dispatch(setUserEmail(res.data.email));
      dispatch(setUserId(res.data.id));
      dispatch(setAuthUser(true))

  } catch (error) {
    if (!error.response) {
      dispatch(setErrorAuth("No server response"))
    } else if (error?.response.status === 400) {
      dispatch(setErrorAuth("Missing username or password"));
    } else if (error?.response.status === 401) {
      dispatch(setErrorAuth("Unauthorized"));
    } else {
      dispatch(setErrorAuth("Login Failed"))
    }
  } finally {
    dispatch(loading(false));
  }
}

