const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require('./models/User');

//application/url과 json을 분석하도록
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jony-choi:pass1234@boilerplates.994v8.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('몽고디비연결')).catch(err=>console.log('에러발생'+err))


app.get('/', (req, res)=> res.send('Hello World! 반갑습니다 월드'))


app.get('/register', (req, res)=>{
  //회원가입할 때 필요한 정보들을 클라이언트에서 가져와서 데이터베이스에 넣기
  //parser로 받아오기
  const user = new User(req.body)

  //몽고디비에 저장중
  user.save((err, userInfo)=>{
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})
 

app.listen(port, () => console.log(`본 앱은 ${port}번 포트를 바라보고 있습니다.`))