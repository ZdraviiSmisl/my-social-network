import {axiosBaseUrl} from "./rest-posts";

export const authApi = {
  login(username, password) {
    return axiosBaseUrl.post(`auth/login`, {
      username,
      password,
      expiresInMins: 60,
    })
  }
}