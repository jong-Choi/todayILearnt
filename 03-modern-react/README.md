# 벨로퍼트와 함께하는 모던 리액트
본 문서는 [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/) 사이트와 도서 [리액트를 다루는 기술](https://thebook.io/080203/)를 공부하며 내용을 요약한 것이다.  
리액트의 '모던'함은 주로 Hook을 사용하는 것이다. Hooks의 추가로 인해 클래스형 컴포넌트가 아닌 함수형 컴포넌트가 대세가 되었다.

### 실습환경 구축
터미널에 
`npx create-react-app .`을 이용하면 해당 폴더에 CRA가 만들어진다.
`npm start`로 리액트를 시작하고 `control + c`로 리액트를 종료한다.
`git clone`이후 리액트가 시작되지 않으면 `npm add react-scripts`를 우선적으로 실행하여 노드JS와 연결하자. 그럼에도 실행되지 않은다면 `npm install`로 노드js 모듈을 설치하자.

## 1장 리액트 입문
### 01. 리액트는 어쩌다 만들어졌을까?
[카운터 예시](https://codesandbox.io/s/cool-ramanujan-tqdvh?fontsize=14&file=/src/index.js)
```html
<h2 id="number">0</h2>
<div>
  <button id="increase">+1</button>
  <button id="decrease">-1</button>
</div>
```

```js
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
```
위 함수는 바닐라 자바스크립트의 DOM을 이용하여 버튼을 누를 때마다 텍스트가 새로고침 된다.  

이러한 방식의 문제는 이벤트 핸들러와 DOM이 서로 뒤섞인다는 점이다. 이벤트가 많아질수록 복잡해진다.  


리액트는 Virtual DOM을 이용한다. 자바스크립트의 이벤트 핸들러가 HTML과 연결되는 것이 아니라, Virtual DOM은 자바스크립트의 객체이다. 이를 통해 더 빠른 속도로 렌더링을 진행할 수 있으며, 프로젝트를 관리할 수 있다.

### 02. 작업환경 준비
npm 대신 yarn을 사용할 수 있다. 설치하려면,
`npm install --global yarn` 입력

본 강의의 폴더명은 아래와 같다.
`npx create-react-app begin-react`


### 03. 나의 첫번째 리액트 컴포넌트
src 디렉토리에서 `touch Hello.js` 생성하여 아래와 같이 작성해보자.

```js
import React from 'react';

function Hello() {
  return <div>안녕하세요</div>
}

export default Hello;
```

리액트 컴포넌트를 만들기 위해서는 `import React from 'react'`로 리액트를 불러와준다.   
  
컴포넌트는 함수형으로 작성했다.  
리턴값으로 XML 형식을 반환할 수 있는데, 이를 JSX라 부른다.  

마지막에 'Hello'라는 이름으로 컴포넌트를 내보내기 위해 `export default Hello;`를 입력한다. 다른 컴포넌트에서 불러와 사용할 수 있다.  

<Hello> 컴포넌트를 App.js에서 불러와 사용해보자.

```js
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```

index.js를 열어보자. 가장 아래에 다음의 코드를 확인할 수 있다.  
```js
import App from './App'; 

...
ReactDOM.render(<App />, document.getElementById('root'));
```

이는 해당 index.js가 id가 'root'인 엘리먼트와 연결되어있다는 의미이다. index.html문서에서는 다음의 태그를 확인할 수 있다.
`<div id="root"></div>`

### 04 JSX의 기본 규칙 알아보기
JSX는 리액트에서 사용하는 마크업 랭귀지이다. XML과 닮아있으나, 자바스크립트로 인식된다.   
해당 자바스크립트 코드는 [BABEL](https://bit.ly/2wMpkk2)을 통해 자바스크립트로 변환된다.   

1. 태그는 꼭 닫혀있어야 한다.
`<br>`, `<input>`과 같이 열려잇는 태그는 컴파일 에러`Parsing error`를 내뱉는다. 
`<br />`, `<input />`과 같이 닫아줘야 한다.

컴포넌트를 호출할 때에도 보통 `<Hello></Hello>`와 같이 호출하지만, 태그 안에 내용물이 없는 경우 `<Hello />`와 같이 자체로 닫을 수 있다.

2. return의 태그는 하나의 태그로 감싸져 있어야 한다.
```js
function App() {
  return (
    <Hello />
    <div>안녕히계세요.</div>
  );
}
```
이렇게 하면 컴파일 에러를 낸다.

```js
function App() {
  return (
    <div>
      <Hello />
      <div>안녕히계세요.</div>
    </div>
  );
}
```
```js
function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요.</div>
    </>
  );
}
```

위처럼 div나 Fragment로 감싼다.

3. 내부의 변수와 주석은 중괄호({변수명})으로 감싼다.
name 변수를 표시할 때엔 아래와 같이
`<div>{name}</div>`

주석은 아래와 같이
```js
{/*<div className="test">
     주석연습
</div>*/}
```




