import {
  DELETE_POST,
  ERROR_LOADING,
  LIMIT_POSTS,
  LOADING,
  NEXT_ITEMS,
  PREV_ITEMS,
  SET_POSTS,
  SET_SKIP,
  TOTAL_POSTS
} from "../actions-types";

let initialState = {
  posts: [],
  isLoading: false,
  error: "",
  skipPosts: 0,
  totalPosts: 50,
  limitPosts: 10
}

export const postsReducer = (state = {initialState}, action) => {
  switch (action.type) {

    case SET_POSTS:
      return {...state, posts: [...state.posts, ...action.payload.posts], ...action.payload, error: ""}

    case LOADING:
      return {...state, isLoading: action.isLoading}

    case ERROR_LOADING:
      return {...state, posts: [], error: action.message}

    case TOTAL_POSTS:
      return {...state, totalPosts: action.totalPosts}

    case SET_SKIP:
      return {...state, skipPosts: action.skipPosts}

    case LIMIT_POSTS:
      return {...state, limitPosts: action.limitPosts}

    case NEXT_ITEMS:
      return {...state, skipPosts: state.skipPosts + action.payload}

    case PREV_ITEMS:
      return {...state, skipPosts: state.skipPosts - action.payload}

    case DELETE_POST:
      const posts = [...state.posts];
      const filteredPosts = posts.filter(post => post.id !== action.payload)

      return {...state, posts: filteredPosts}

    default:
      return state;
  }
}

