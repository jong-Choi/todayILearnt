// 4.3 익스프레스로 서버 구축하기
// npm install express

const express = require("express");
const app = express();
const PORT = 3000;
//1번 로직
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
express로 생성한 모듈은 보통 app이라는 이름으로 사용한다.
app.use는 모든 http 요청을 처리하며, req, res라는 매개변수가 기본으로 설정되며, 이를 다음 미들웨어로 넘기는 next() 함수가 있다.
1번 로직이 실행된 후, next()를 통해 2번 로직이 실행된다. 
express는 app.listen을 통해 서버를 실행한다.

미들웨어 : 서로 다른 애플리케이션이 서로 통신하는 데 사용되는 소프트웨어
익스프레스는 로직간의 통신을 next()로 간단하게 실행할 수 있다.
*/
