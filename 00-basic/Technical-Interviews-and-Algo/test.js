function solution(dartResult) {
  let len = dartResult.length;

  let exp = dartResult
    .replace("S", "**1")
    .replace("D", "**2")
    .replace("T", "**3")
    .replace("S", "**1");
}
console.log(solution("1S2D*3T"));
/*
37
1**1*2
2**2*2
3**3

*/
console.log(solution("1D2S#10S"));
/*
9
1**2
2**1
10**1

*/
console.log(solution("1D2S0T"));
/*
3
1**2
2**1
0**3

*/
console.log(solution("1S*2T*3S"));
/*
23
1*2**1*2
2**3*2
3**1

*/
console.log(solution("1D#2S*3S"));
/*
5
1**2*2
2**1*2
3**1

*/
console.log(solution("1T2D3D#"));
/*
-4
1**3
2**2
3**2

*/
console.log(solution("1D2S3T*"));
/*
59
1**2
2**1*2
3**3*2

*/

// let len = dartResult.length;
// let temp = 0;
// var answer = 0;
// for (i = 0; i < len; i++) {
//   let char = dartResult[i];
//   let nextChar = i + 1 < len ? dartResult[i + 1] : false;
//   if (char === "1" && nextChar === "0") {
//     i++;
//     temp += 10;
//     break;
//   }
//   if (char === /[0-9]/) {
//     temp += ~~char;
//     break;
//   }

//   if (char === "D") {
//     temp **= 2;
//   } else if (char === "T") {
//     temp **= 3;
//   }
//   if (nextChar || nextChar === "*") {
//     answer += temp;
//   } else {
//     answer;
//   }
// }
