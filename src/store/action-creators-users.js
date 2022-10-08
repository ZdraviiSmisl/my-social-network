import {usersApi} from "../pages/api/rest-users";
import {loading, setAllUsers, setErrorMessage} from "./action-creators-posts";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await usersApi.getAllUsers();
    dispatch(setAllUsers(res.data));

  } catch (error) {
    dispatch(setErrorMessage(error.message));
  } finally {
    dispatch(loading(false));
  }

}