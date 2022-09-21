// // 콜백 함수
// function increase(number, callback) {
//   setTimeout(() => {
//     const result = number + 10;
//     if (callback) {
//       callback(result);
//     }
//   }, 1000);
// }

// increase(0, (result) => {
//   console.log(result);
//   increase(result, (result) => {
//     console.log(result);
//     increase(result, (result) => {
//       console.log(result);
//       increase(result, (result) => {
//         console.log(result);
//         increase(result, (result) => {
//           console.log(result);
//           increase(result, (result) => {
//             console.log(result);
//             console.log("작업완료");
//           });
//         });
//       });
//     });
//   });
// });

// // promise
// function increase(number) {
//   const promise = new Promise((resolve, reject) => {
//     //resolve는 성공, reject는 실패
//     setTimeout(() => {
//       const result = number + 10;
//       if (result > 50) {
//         //50보다 높으면 에러 발생
//         const e = new Error("NumberTooBig");
//         return reject(e);
//       }
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// increase(0)
//   //promise는 결과를 처리 후 resolve 혹은 reject함수를 실행 후 결과값을 반환함.
//   //resolve의 결과값을 .then으로 넘겨줌
//   .then((number) => {
//     console.log(number);
//     return increase(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return increase(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return increase(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return increase(number);
//   })
//   //.구문의 마지막에만 ;을 붙여주기
//   //catch로 에러를 확인하기
//   .catch((e) => console.log(e));

// // async/await
// // promise가 끝날 때까지 기다림
// function increase(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number + 10;
//       if (result > 50) {
//         const e = new Error("NumberTooBig");
//         return reject(e);
//       }
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// async function runTask() {
//   try {
//     let result = await increase(0);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// }

// runTask();
