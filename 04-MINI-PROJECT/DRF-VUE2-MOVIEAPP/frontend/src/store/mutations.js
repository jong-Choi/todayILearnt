import { FETCH_POST_LIST, FETCH_POST, SET_TOKEN } from "./mustaions-types";

export default {
  [FETCH_POST_LIST](state, posts) {
    state.posts = posts;
  },
  [FETCH_POST](state, post) {
    state.post = post;
  },
  [SET_TOKEN](state, Token) {
    console.log(Token);
  },
};
