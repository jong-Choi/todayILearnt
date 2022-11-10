import { FETCH_POST_LIST } from "./mustaions-types";

export default {
  [FETCH_POST_LIST](state, posts) {
    state.posts = posts;
  },
};
