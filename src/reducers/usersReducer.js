import {ERROR_LOADING, LOADING, SET_USERS} from "../actions-types"

let initialState = {
  users: [],
  error: "",
  isLoading: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: [...state.users, ...action.payload.users], error: ""}

    case LOADING:
      return {...state, isLoading: action.isLoading}

    case ERROR_LOADING:
      return {...state, users: [], error: action.message}

    default:
      return state;
  }
}

