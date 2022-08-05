import {ERROR_LOADING, LOADING, SET_POSTS} from "../actions-types";

let initialState = {
  posts: [],
  isLoading: false,
  error: "",
  total: 0,
  skip: 0,
  limit: 0
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POSTS:
      return {...state, posts: [...state.posts, ...action.payload.posts], ...action.payload, error: ""}

    case LOADING:
      return {...state, isLoading: action.isLoading}

    case ERROR_LOADING:
      return {...state, posts: [], error: action.message}

    default:
      return state;
  }
}

