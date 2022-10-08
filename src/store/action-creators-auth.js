/*
import {authApi} from "../pages/api/rest-auth";
import {loading, setAuthUser, setErrorAuth, setUserId} from "./action-creators-posts";

export const getAuthUser = (userName, password) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authApi.login(userName, password);
    dispatch(setUserId(res.data.id));
    dispatch(setAuthUser(true));


  } catch (error) {
    if (!error.response) {
      dispatch(setErrorAuth("No server response"));
    } else if (error?.response.status === 400) {
      dispatch(setErrorAuth("Missing username or password"));
    } else if (error?.response.status === 401) {
      dispatch(setErrorAuth("Unauthorized"));
    } else {
      dispatch(setErrorAuth("Login Failed"));
    }
  } finally {
    dispatch(loading(false));
  }
}*/
