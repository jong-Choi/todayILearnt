import Vue from "vue";
import App from "./App.vue";
import store from "./store/index"; //store를 찾아서 가져온다. 참고로 생략된 store모듈의 경로는 index.js를 기준으로 한다. index.js파일이 없으면 에러가 난다.

new Vue({
  el: "#app",
  store, //vue의 옵션에 스토어를 가져한다.
  render: h => h(App)
});
