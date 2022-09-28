const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("안녕하세요 MEVN프로젝트입니다.");
});

server.listen(PORT, () => {
  console.log(`SErver running at http://127.0.0.1:${PORT}/`);
});
// 4.1 HTTP 객체로 실행하기
// 포트번호를 설정합니다. IP + 포트번호로 URI를 만듭니다.
// http 객체의 createServer메서드로 서버를 만듭니다.
// 응답값은 텍스트라는 헤더를 만들고, end로 응답에 대한 문자열을 보냅니다.
// listen메서드를 통해 http 서버를 시작합니다.
// node simple_http.js 라는 명령어로 서버를 시작합니다.
