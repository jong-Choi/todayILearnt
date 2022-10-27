// function solution(n, arr1, arr2) {
//   var answer = [];

//   for (let i = 0; i < n; i++) {
//     //배열의 각 인덱스를 조회하여 | 비트연산자를 통해 처리 후 2진수로 변환
//     const bin = (arr1[i] | arr2[i]).toString(2).padStart(5, "0");
//     replacedBin = bin.replace(/1/gi, "#").replace(/0/gi, /\s/);
//     answer.push(replacedBin);
//   }

//   return answer;
// }
const solution = (n, arr1, arr2) =>
  arr1.map((a, idx) =>
    (a | arr2[idx])
      .toString(2)
      .padStart(n, "0")
      .replace(/1/gi, "#")
      .replace(/0/gi, " ")
  );
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
