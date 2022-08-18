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