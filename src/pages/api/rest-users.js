import {axiosBaseUrl} from "./rest-posts";

export const usersApi= {
  getAllUsers(){
    return axiosBaseUrl.get("https://dummyjson.com/users");
  }
}