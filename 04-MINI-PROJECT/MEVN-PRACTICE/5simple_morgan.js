// npm install morgan
const express = require("express");
const app = express();
const loogger = require("morgan");
const PORT = 3000;

//1번 로직
app.use(loogger("tiny"));
app.use((req, res, next) => {
  console.log("1 Time:", Date.now());
  next();
});
//2번 로직
app.use((req, res, next) => {
  console.log("2 Time:", Date.now());
  next();
});

app.listen(PORT, () => {
  console.log(`서버가 생성되었습니다.${PORT}`);
});

/*
    morgan이라는 모듈은  Node,js 로깅 라이브러리,
    http 요청 로거에 사용된다.

    :HTTP 메서드 :url :상태코드 :응답컨텐츠길기 :응답헤더시작시간 의 형태로 로그가 나오게 된다.
*/
192페이지
