import {ERROR_LOADING, GET_POST, LOADING, SET_POSTS, SET_USERS} from '../actions-types'
import axios from "axios";

export const setAllUsers = (payload) => ({type: SET_USERS, payload});
export const setAllPosts = (payload) => ({type: SET_POSTS, payload});
export const loading = (isLoading) => ({type: LOADING, isLoading});
export const setErrorMessage = (message) => ({type: ERROR_LOADING, message});
export const getPost = (payload) => ({type: GET_POST, payload});

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

export const getPosts = (axios) => async (dispatch, getState) => {
  const state = getState();

  try {
    dispatch(loading(true));
    const res = await axios.get("https://dummyjson.com/posts");
    dispatch(setAllPosts(res.data));

  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(loading(false));
  }
}
