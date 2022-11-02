async function f() {
  async function g() {
    throw "에러 발생"
  }
  try {
    let result = await g()
    console.log(result)
  }
  catch (err) {
    console.log('에러가 발생하였습니다.', err)
  }

}

f()