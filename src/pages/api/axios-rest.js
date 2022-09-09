import axios from "axios";

export const axiosBaseUrl = axios.create({
    baseURL: "https://dummyjson.com/"
  }
)

export const postsApi = {
  receivePosts(limitPosts, skipPosts) {
    return axiosBaseUrl.get(`posts?limit=${limitPosts}&skip=${skipPosts}`);
  },

  deleteSpecificPost(postId) {
    return axiosBaseUrl.delete(`posts/${postId}`)
  }
}


export const usersApi = {

}


export const authApi = {
  login(username,password) {
    return axiosBaseUrl.post(`auth/login`,{
      username,
      password,
    })
  }
}