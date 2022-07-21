# React 2022 개정판 - 생활코딩
[React 2022 개정판](https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7)은 기존 버전에서 예시를 가다듬고 10개의 강좌로 통합한 버전이다. 또한 기존 버전과 달리 최신 트렌드에 맞게 함수형 프로그래밍을 진행한다. 클래스를 이용한 객체지향 프로그래밍을 원한다면 [기존 React 강좌](https://www.youtube.com/watch?v=XMb0w3KMw00&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)를 공부하자.
  

## 1. 수업 소개
리액트는 복잡한 태그를 모듈화하여 사용자정의 태그를 만드는 데에 특화되어 있다. 타인이 많은 사용자 정의태그를 퍼올 수 있다는 점에서 리액트가 라이브러리로서 가진 확장성은 뛰어나다.  
  

## 2. 실습 환경 구축
리액트 실습환경 구축이 어렵다면 [리액트 공식문서](https://ko.reactjs.org/docs/getting-started.html)의 [코드 블리츠](https://stackblitz.com/edit/react-q17tec)를 이용하자.  
노드JS가 설치되어 있다면 터미널에 `npx create-react-app my-app`을 입력하면 my-app이라는 프로젝트 폴더가 생성된다.  
'react'라는 이름을 제외한 이름으로 디렉토리를 만들고, 디렉토리의 경로 상에 한글이나 특수문자가 없도록 한다.  
`npx create-react-app .`을 입력하여 터미널이 호출된 경로 내부에 creat-react-app을 설치하다.

`npm start`로 입력하면 리액트 개발환경이 시작된다.
`control + c`를 입력하면 리액트가 종료된다.  
`npm start`명령어가 경로오류로 실행되지 않는 경우 [npm add react-scripts](https://thespoiler.tistory.com/21)명령어를 이용하여 노드 모듈을 다시 연결해보자. (.gitignore로 인해 리액트 및 모듈이 연결되지 않을 수 있다.)
  

## 3. 소스 코드 수정
프로젝트의 시작파일은 `src/index.js` 파일이다.  

`index.js`는 `<App />`를 렌더링하고 있다. 해당 `<App />`는 `import App from './App';`되었다.  

`src/App.js`파일을 살펴보면 `<App />`을 구성하는 `function App()`을 확인할 수 있다.  


다시 `index.js`를 살펴보자. `const root = ReactDOM.createRoot(document.getElementById('root'));`라는 구문을 발견할 수 있다. 이는 `'root'`라는 id을 가진 HTML 객체를 ReactDOM으로 컨트롤하겠다는 의미이다.  

`public/index.html`을 살펴보면  `<div id="root"></div>`라는 블럭이 있다. `index.js`는 해당 블럭의 위치로 `root.render(<App />)`를 수행하고 있는 것이다.


정리하자면, `index.js`는 
1) `App.js`를 가져온다.
2) `public/index.html`로부터 `<div id="root">`를 가져온다. 
3) ReactDOM을 이용해 `App.js`의 `function App()`을 `<div id="root">`로 전달하며 렌더링한다.

|과정|||||
|---|---|---|---|---|
|App.js|->|index.js|->|index.html|
  
위의 과정을 통해 만들어진 전체 HTML태그는 웹 브라우저의 개발자 모드를 통해 확인할 수 있다.

### 배포하기
터미널에서 ctrl+c를 누르면 기존 실행중인 개발환경이 종료된다.  
`npm run build`를 명령하면 배포판을 만들 수 있다.  
새로 만들어진 `build/index.html`파일을 확인해보자. 파일의 용량을 줄이기 위해 줄어든 태그가 보인다.

### 배포판 실행하기
빌드를 하기 위해서는 'serve'라는 NodeJS의 파일을 주로 사용한다.  
`npx serve -s build`는 serve라는 앱을 통해(`serve`) 항상 index.html을 실행하는데(`-s`) 이때 index.html의 폴더는 '`build`'라는 의미이다.


## 4. 컴포넌트 만들기
컴포넌트 만들기를 연습하기 위해 `src/`폴더의 `app.css`, `index.css` 파일의 내용을 삭제하고, `App.js`의 함수 내부의 태그들을 지우자. 해당 함수 내부에 새로운 태그를 입력하여 새로운 컴포넌트를 작성해보자.

새로운 사용자 정의 태그는 아래의 과정으로 만들어진다.  
1) 첫 글자를 대문자로 하는 함수명을 가진 새로운 함수를 만들자. `fuction Header()`. 해당 함수는 HTML의 `<header></header>`태그와 관련된 함수라 할 수 있다. 
2) `function Header()`를 이용해 새로운 `<Header></Header>`태그를 사용할 수 있다. 해당 태그를 사용하면 `function Header()`내부의 태그들을 반복적으로 호출할 수 있게 된다.
```javascript
function Header(){
  return <header>
    <h1><a href="/">HELLO WORLD!!</a></h1>
  </header>
}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Header></Header>
      <Header></Header>
      ...
      ...
    </div>
  )
}
```
3) 위와 같이 작성하여 ```npm start```를 진행하면 'HELLO WORLD!!'라고 3번 인사하는 것을 볼 수 있다.

이렇게 새로운 태그를 만들어서 HTML 태그처럼 사용할 수 있다. 이것을 '컴포넌트'라고 한다.  

`<header>`뿐만 아니라 `<nav>`, `<article>`과 같은 태그들도 `<Nav>`, `<Article>`라는 이름을 가진 컴포넌트로 분리해낼 수 있다. 
```js
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  )
}
```
컴포넌트를 이용하면 위와 같이 태그를 보기좋게 나눌 수 있을 뿐만 아니라,  
해당 컴포넌트들에 작성된 강력한 기능들을 동시에 적용해낼 수 있다. 

## 5. PROP
`<Header>` 컴포넌트에서 컴포넌트별로 출력값이 달라지게 하기 위해서는 props를 쓸 수 있다.

기존 `<Header>` 태그에 `title='REACT'` 어트리뷰트를 부여한다.
```js
function App() {
  return (
    <div className="App">
      <Header title="REACT"></Header>
    </div>
  )
}
```

해당 어트리뷰트를 `fuction Header()`에 매개변수로 넘겨준다. (관습적으로 이 매개변수를 props라 한다.)
```js
function Header(props){
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
```
 HTML의 속성값을 함수 내부에 프로퍼티로 호출하기 위해서는 중괄호를 이용한다. 이제 화면에 'REACT'가 출력된다.

 위와 같이 HTML태그의 속성(어트리뷰트)값을 함수의 매개변수 props로 넘겨받아 프로퍼티값으로서 사용할 수 있다. 아래는 여러 속성을 지닌 태그의 예시이다.

 ```js
function Header(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  return (
    <div className="App">
      <Article title="Welcome back!" body="if you're first here, please sign up."></Header>
    </div>
  )
}
```
위의 예제는 아래와 같이 출력된다.

---
## Welcome back!
if you're first here, please sign up.

---

5강 5분