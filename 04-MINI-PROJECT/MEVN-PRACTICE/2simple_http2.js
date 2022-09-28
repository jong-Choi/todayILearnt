const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const obj = {
    이름: "큰돌",
  };
  res.end(JSON.stringify(obj));
});

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

// 헤더에서 json파일로 보낸다는 정보
// json파일의 key는 항상 문자열로 지정할 것. 이후 해당 obj를 stringify하여 사용
