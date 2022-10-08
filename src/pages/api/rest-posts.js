import axios from "axios";

export const axiosBaseUrl = axios.create({
    baseURL: "https://dummyjson.com/"
  }
)

const POSTS_LIST_LS = "POSTS_LIST_LS";


 export const getDataFromLs = () => {
  const postsListStr = localStorage.getItem(POSTS_LIST_LS);
  const postsList = postsListStr ? JSON.parse(postsListStr) : [];

  return postsList;
}

 export const setListToLS = (postsList) => {
  localStorage.setItem(POSTS_LIST_LS,JSON.stringify(postsList))
}




export const postsApi = {
  receivePosts(limitPosts, skipPosts) {
    return axiosBaseUrl.get(`posts?limit=${limitPosts}&skip=${skipPosts}`);
  },

  deleteSpecificPost(postId) {
    return axiosBaseUrl.delete(`posts/${postId}`);
  },

  addOnePost(newPost) {
    return axiosBaseUrl.post(`posts/add`, newPost);
  },

  updatePost(post) {
    return axiosBaseUrl.put(`posts/${post.id}`)
  }

}

