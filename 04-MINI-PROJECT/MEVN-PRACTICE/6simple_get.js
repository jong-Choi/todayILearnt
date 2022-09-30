const express = require("express");
const app = express();
const loogger = require("morgan");
const PORT = 3000;

app.use(loogger("tiny"));

// 1. 라우팅 설정하기
const simple_module = require("/7simple_module.js");
app.get("/", simple_module.intro);
app.get("/user/:userName/books/:bookName", simple_module.handleBook);
app.listen(PORT, () => {
  console.log(`서버가 생성되었습니다.${PORT}`);
});
