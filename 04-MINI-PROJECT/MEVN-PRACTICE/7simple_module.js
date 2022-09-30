// 2. 컨트롤러 설정하기
module.exports.handleBook = (req, res) => {
  console.log(req.params);
  res.send(req.params);
};
module.exports.intro = (req, res) => {
  res.send(`우리의 Express로 만든 서버입니다..!`);
};

// url을 127.0.0.1:3000/user/승철/books/논어 로 요청을 보낼 수 있다.
