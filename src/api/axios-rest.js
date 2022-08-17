import axios from "axios";

export const axiosBaseUrl = axios.create({
    baseURL: "https://dummyjson.com/"
  }
)

export const getPostsPage = async (limitParam = 15, skipParam = 15) => {
  const response = await axiosBaseUrl.get(`posts?limit=${limitParam}$skip=${skipParam}`);
  return response.data;
}

export const getUsersPage = async (limitParam = 10, skipParam = 10) => {
  const response = await axiosBaseUrl.get(`users?limit=${limitParam}&skip=${skipParam}`);
  return response.data;
}

export const postsApi = {
  receivePosts(limitPosts, skipPosts) {
    return axiosBaseUrl.get(`posts?limit=${limitPosts}&skip=${skipPosts}`);
  }
}