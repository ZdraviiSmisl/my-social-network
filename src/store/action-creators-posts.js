import {
  ADD_POST,
  ADD_REACTIONS,
  DELETE_POST, ERROR_AUTH,
  ERROR_LOADING,
  LIMIT_POSTS,
  LOADING,
  NEXT_ITEMS,
  PREV_ITEMS, SET_AUTH_USER, SET_DATA_POST, SET_LOGIN, SET_PASSWORD,
  SET_POSTS,
  SET_SKIP, SET_USER_EMAIL, SET_USER_ID,
  SET_USERS,
  TOTAL_POSTS
} from '../actions-types';
import { axiosBaseUrl, getDataFromLs, postsApi} from "../pages/api/rest-posts";

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
export const incrementReactions = (payload) => ({type: ADD_REACTIONS, payload});
export const setNewPost = (payload) => ({type: ADD_POST, payload});


export const setUserId = (payload) => ({type: SET_USER_ID, payload});
export const setAuthUser = (payload) => ({type: SET_AUTH_USER, payload});




export const getPosts = (limitPosts, skipPosts) => async (dispatch) => {

  try {
    dispatch(loading(true));
    const res = await postsApi.receivePosts(limitPosts, skipPosts);
    dispatch(setAllPosts(res.data));
    dispatch(setTotalPosts(res.data.total));
    dispatch(setLimitPosts(limitPosts));
    dispatch(setSkipPosts(skipPosts));
    const postListFromLs = getDataFromLs();
    const postListFromApi = res.data.posts;

    postListFromLs.forEach((postItemFromLs) => {
      const index = postListFromApi.findIndex((postItemFromApi) => postItemFromApi.id === postItemFromLs.id);
      if (index > -1) {
        postListFromApi[index] = postItemFromLs;
      } else {

      }
    })

    return {...res.data.posts, posts: postListFromApi}

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
    dispatch(setDeletePost(res.data.id));


  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(loading(false));
  }
}

export const addNewPost = (newPost) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await postsApi.addOnePost(newPost);
    dispatch(setNewPost(res.data));
    dispatch(loading(false));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    dispatch(loading(false));
  }
}

export const updatePost = (post)=>async(dispatch)=>{
  try {
dispatch(loading(true));
const res=await postsApi.updatePost(post);
dispatch(setUpdatedPost(res.data.id));

  }catch (error) {
    dispatch(setErrorMessage(error.message));
    dispatch(loading(false));
  }
}





