const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jony-choi:pass1234@boilerplates.994v8.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('몽고디비연결')).catch(err=>console.log('에러발생'+err))

/*
{
  ,useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}
*/
app.get('/', (req,res) => res.send('Hello World!'));

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));