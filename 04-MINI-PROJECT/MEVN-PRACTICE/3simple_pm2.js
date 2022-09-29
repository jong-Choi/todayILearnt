const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const obj = {
    이름: "큰돌",
  };
  res.end(JSON.stringify(obj));
});

setTimeout(() => {
  //1초마다 서버서 중지되도록 에러를 발생시킵니다.
  JSON.parse("{Z");
}, 1000);

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

// 4.2 PM2로 서버 관리하기
// pm2는 자동으로 서버를 다시 시작해주고 관리해주는 매니저 라이브러리
// 4.2.1 일부러 중지되는 서버 만들기
// node simple_pm2.js 를 입력한 후
// http://127.0.0.1:12010/ 에 접속 후 1초 후 새로고침을 하면 서버가 중지되어 있다.
// "{Z"는 올바른 JSON 형식이 아니기 때문이다.

// 1. pm2 설치하기
// npm install pm2 -g

// 2. pm2로 서버 관리하기
// pm2 start simple_pm2.js
// pm2 stop simple_pm2.js
// 아래의 명령어로 시작하여 로그를 남길 수 있다.
// pm2 start simple_pm2.js -1 pm2.log

// pm2 list : pm2로 관리하는 앱을 표시합니다.
// pm2 start <파일명> : pm2로 앱을 시작합니다.
// pm2 monit --- : pm2로 관리하는 앱의 상태를 보여준다
// pm2 stop <id or name> : pm2로 시작한 앱을 중단한다.
// pm2 delete <id or name> : pm2로 관리하는 앱을 중단하고 삭제한다.
