import {
  ERROR_AUTH,
  ERROR_LOADING,
  LOADING,
  SET_AUTH_USER,
  SET_LOG_OUT,
  SET_LOGIN, SET_PASSWORD,
  SET_USER_EMAIL,
  SET_USER_ID
} from "../actions-types";

const initialState={
  userName:"",
  userEmail:"",
  password: "",
  userId:null,
  authUser:false,
  userLogOut:false,
  isLoading:false,
  errorMsg:"",
}

export const authReducer=(state={initialState},action)=> {
switch (action.type) {

  case SET_LOGIN:
    return  {
    ...state,userName:action.payload
    }

  case SET_PASSWORD:
    return {
      ...state,password:action.payload
    }

    case SET_USER_EMAIL:
    return  {
    ...state,userEmail:action.payload.email
    }

  case SET_USER_ID:
    return  {
    ...state,userId:action.payload.id
    }

    case SET_AUTH_USER:
    return  {
    ...state,authUser:action.payload
    }

  case SET_LOG_OUT:
    return {
    ...state,userLogOut:action.payload
    }

    case LOADING:
    return  {
    ...state,isLoading:action.isLoading
    }

  case ERROR_AUTH:
    return {...state,authUser:false, errorMsg: action.message}


  default:
    return state;
}
}