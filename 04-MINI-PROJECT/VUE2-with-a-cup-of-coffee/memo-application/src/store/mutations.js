import { FETCH_MEMOS } from "./mutations-types";

export default {
  [FETCH_MEMOS](state, payload) {
    state.memos = payload;
  }
};
