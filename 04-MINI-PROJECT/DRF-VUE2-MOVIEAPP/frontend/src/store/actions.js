import api from "@/api";
import { FETCH_POST_LIST, FETCH_POST } from "./mustaions-types";

export default {
  fetchPostList({ commit }) {
    return api.get("/posts").then((res) => {
      commit(FETCH_POST_LIST, res.data.results);
    });
  },
  fetchPost({ commit }, postId) {
    console.log(`/posts/${postId}`);

    return api.get(`/posts/${postId}`).then((res) => {
      commit(FETCH_POST, res.data);
    });
  },
};
