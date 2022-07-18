//인풋을 입력받습니다.
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const input1 = parseInt(input[0])
const input2 = []
for( i = 0; i < input1; i++){
  input2[i] = input[i+1].split(' ').map(Number)
}


//solution함수 안에 답안을 작성하세요.
function solution(input1, input2) {
  let answer;
  let n = input1;
  let mt = input2;
  let max = 0;
  let dia1 = 0;
  let dia2 = 0;

  for (i = 0; i < n; i++){
    let sum_row = 0;
    let sum_col = 0;
    for (j = 0; j < n; j++){
      sum_row += mt[i][j];
      sum_col += mt[j][i];
    }
    if (sum_row > max) max = sum_row;
    if (sum_col > max) max = sum_col;
    dia1 += mt[i][i]
    dia2 += mt[4-i][i]
  }
  if (dia1 > max) max = dia1;
  if (dia2 > max) max = dia2;
  
  answer = max;
  console.log(answer);
}
solution(input1, input2);






/* 인풋 입력 스켈레톤 코드
1. 하나의 값을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim();


2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(" ");


3. 여러 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split("\n");


4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);


5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");


6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
  ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

출처: https://overcome-the-limits.tistory.com/25 [Plus Ultra:티스토리]

*/