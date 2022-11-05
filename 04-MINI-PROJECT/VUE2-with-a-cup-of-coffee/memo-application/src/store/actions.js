import axios from "axios";
import { FETCH_MEMOS } from "./mutations-types";

//MemoApp.vue에서 사용하던 것과 동일한 엑시오스 인스턴스
const memoAPICore = axios.create({
  baseURL: "http://localhost:8000/api/memos"
});

export function fetchMemos({ commit }) {
  memoAPICore.get("/").then(res => {
    commit(FETCH_MEMOS, res.data);
  });
}

export default {
  fetchMemos
};
