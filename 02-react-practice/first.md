# React 2022 개정판 - 생활코딩
[React 2022 개정판](https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7)은 기존 버전에서 예시를 가다듬고 10개의 강좌로 통합한 버전이다. 또한 기존 버전과 달리 최신 트렌드에 맞게 함수형 프로그래밍을 진행한다. 클래스를 이용한 객체지향 프로그래밍을 원한다면 [기존 React 강좌](https://www.youtube.com/watch?v=XMb0w3KMw00&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)를 공부하자.

문서로 된 경우 패스트 캠퍼트의 벨로퍼트님의 문서를 참조하자. [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
  

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
function App(){
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
function App(){
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
HTRL태그는 속성(어트리뷰트)를 가지고 있다. 이러한 어트리뷰트를 이용해 입력값을 가진다. 이미지의 경로, 이미지의 크기 등.  
  
리액트에서는 속성을 PROP라고 한다. 컴포넌트에 PROP을 장착해보자.  
  


`<Header>` 컴포넌트에서 속성에 따라 출력값이 달라지게 하기 위해서는 props를 쓸 수 있다.

기존 `<Header>` 태그에 `title='REACT'` 어트리뷰트를 부여한다.
```js
function App(){
  return (
    <div className="App">
      <Header title="REACT"></Header>
    </div>
  )
}
```
해당 어트리뷰트를 아래와 같이 `fuction Header()`에 매개변수 props로 넘겨준다. (관습적으로 매개변수명을 props라 한다.)  


```js
function Header(props){
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
```
 props를 콘솔로 호출하여 보면, props는 Object이며, 프로퍼티로 {title: "REACT"}를 가지고 있다.  
 HTML의 속성값을 함수 내부에 프로퍼티로 호출하기 위해서는 중괄호를 이용한다. 이제 화면에 'REACT'가 출력된다.
 이처럼 Props는 상위 컴포넌트가 하위 컴포넌트로 프로퍼티를 넘기기 위해 사용된다.

 위와 같이 HTML태그의 속성(어트리뷰트)값을 함수의 매개변수 props로 넘겨받아 프로퍼티값으로서 사용할 수 있다. 
 아래는 여러 프로퍼티를 지닌 Props객체의 예시이다.

 ```js
function Header(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App(){
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

### 리스트로 출력하기
먼저 리스트를 만들고, 이를 태그에 넘겨주는 원리를 살펴보자. 
아래에는 const lis라는 리스트를 선언한 예시이다.

기존 코드
``` js
function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}
```

const lis로 새로운 리스트를 선언하고 태그에 넘겨준 예시
``` js
function Nav(){
  const lis = [
    <li><a href="/read/1">html</a></li>,
    <li><a href="/read/2">css</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
```

위처럼 중괄호를 이용하면 js로 만들어진 객체를 반환받을 수 있다.


이제 Props를 사용해서 Nav()컴포넌트와 App()컴포넌트를 연결하자

App()내에 topics이라는 리스트를 만들자. 이때 topics는 const로 선언하는데, 프로퍼티는 값을 변경시키지 않기 때문이다.
해당 topics 리스트에 title과 body를 지닌 객체를 삽입하자. 이때 각 객체는 고유한 id값을 지니고 있어야 한다.

이후 해당 리스트를 `<Nav topics={topics}></Nav>`태그로 `Nav()`의 props로 넘겨준다.
```js
function App(){
  const topics =[
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ]
  return (
    <div className="App">
      <Nav topics={topics}></Nav>
    </div>
  )
}
```

`Nav()`내부에는 기존의 lis리스트를 초기화하고,
for문을 이용해 props의 객체들을 lis리스트에 푸쉬한다.
```js
function Nav(props){
  //리스트 초기화
  const lis = [];

  //App()컴포넌트로 부터 전달받은 props를 lis에 push
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li>{t.title}</li>)
  }

  //출력값
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
```

위 함수에서 t.title은 topics 내부 객체의 title 프로퍼티를 의미한다. for문을 통해 {lis}에 순차적으로 출력된다. ㄹ

for문을 수정하여 해당 title 프로퍼티를 링크로 바꾸어 보자.   
링크로 바꾸기 위해서는 <a></a>태그를 사용하며, 앞서 고유한 id값을 넘겨준 것을 이용해 객체별로 중괄호를 사용하여 URL을 달리 만들 수 있다.  

```js
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
```
이제 /read/2라는 링크를 가진 css라는 글자 링크가 생긴다.   

한가지 더, 리스트로 전달받은 자식 객체들은 반복문 내에서는 각각 고유한 key값을 가지고 있어야 한다.   
따라서 최종적으로 아래와 같이 for문이 생성하게 된다.  

```js
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
```
[리액트 - 리스트와 키](https://ko.reactjs.org/docs/lists-and-keys.html)를 참고하자. 리액트는 각각의 요소들, 특히 리스트의 요소들이 동일한 요소인지를 파악해서 렌더링한다. 효율적인 렌더링과 관리를 위해 리스트에 키를 삽입하게 된다.  

이제 App()컴포넌트와 Nav(props)컴포넌트가 연결되었다.  

```js
//Nav의 사용자 정의 태그.
function Nav(props){
  //리스트 초기화
  const lis = [];

  //App()컴포넌트로 부터 전달받은 props를 lis에 push
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  //출력값
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

//상위 컴포넌트
function App(){
  const topics =[
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ]

  //Nav 컴포넌트를 호출하여 topics 리스트를 props로 넘겨줌.
  return (
    <div className="App">
      <Nav topics={topics}></Nav>
    </div>
  )
}
```

## 6. 이벤트
리액트에서의 이벤트는 HTML에서의 이벤트와 달리 카멜케이스를 사용한다. onclick이 아닌 onClick를 사용하며, 이벤트의 내용으로 콜백함수를 넘겨준다.  

아래는 기존의 코드이다.  

```js
function Header(props){
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App(){
  const topics =[
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ]

  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```

App()컴포넌트에 `<Header />` 태그에 이벤트를 만들고 props로 함수를 전달하여 보자  
onChangeMode 이벤트는 클릭시마다 객체의 MODE가 'update', 'create' 등으로 변경된다.

```js
function App(){
  ...
  return (
    <div>
      <!--아래와 같이 이벤트를 추가함-->
      <Header title="WEB" onChangeMode={function(){
        alert('Header');
      }}></Header>
      ...
    </div>
  );
}
```

Header() 컴포넌트에도 이벤트를 추가하고 event객체를 파라미터로 주입한다. 이벤트 객체는 이벤트 상황을 제어할 여러가지 정보와 기능을 가지고 있다.  
`event.preventDeaault();` 를 이용해 기본동작을 방지하면, 클릭시 자동으로 리로드되는 일을 방지할 수 있다.   
이후 App() 컴포넌트에 있는 onChageMode() 이벤트를 가져오면 된다.  

```js
function Header(props){
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}
```

이를 이용해 <Nav />태그를 수정하여 보자. 각 객체의 id를 onChangeMode의 파라미터로 받아 아래와 같이 코드를 작성할 수 있다.  

function이라는 키워드 대신 Arrow Function을 사용하였다. 콜백 함수로 사용할 때에는 Arrow Function이 유용하다.

```js
function App(){
  ...
  return (
    <div>
      ...
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      ...
    </div>
  );
}
```

이번엔 Nav(props)에 onClick이벤트를 넣어보자.  
가독성을 위해 push 메서드의 내용을 줄바꿈한 후 들여쓰기 하였다.  
App() 컴포넌트에서와 마찬가지로 Arrow Fuction을 사용하였으며, Arrow Fuction에서 파라미터가 하나인 경우에는 괄호를 생략할 수 있다.  

```js
function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{t.title}</a>
    </li>)
  }
  ...
}
```

이때 onChangeMode();에 파라미터로 id값을 넘겨주어야 한다. 이를 위해 아래와 같이 코드를 수정한다.  

```js
function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }
  ...
}
```

상위 컴포넌트의 이벤트에 파라미터를 넘겨주기 위해
1) 태그에 파라미터로 넘겨줄 id라는 어트리뷰트를 만들어주었다.  
2) 이후 `prop.onChangeMode(event.target)`라는 코드를 작성하였는데, 이때 target 프로퍼티는 이벤트를 발생시킨 태그, 즉 `<a id={t.id} />` 태그를 의미한다.  
3) 결과적으로 event.target.id라는 태그를 통해 {t.id}라는 인스턴스를 App() 컴포넌트 이벤트에 매개변수로 입력할 수 있다.

아래는 완성된 코드이다. [화살표 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)의 사용법을 적용하였다.   

```js
function Header(props){
  return <header>
    <h1><a href="/" onClick={event=>{
      event.preventDefault();
      props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App(){
  const topics =[
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ]

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={id=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```

## 7. STATE
컴포넌트에 props를 인풋으로 넣으면 return값이 렌더링을 했다.  

return값에 영향을 미치는 또 다른 요인으로는 state가 있다.  

props가 외부의 컴포넌트와 주고 받는 값이라면, state는 컴포넌트 내부에서 사용되는 값이라는 점에서 차이가 있다.  

이를 이용해 지금까지 작성한 태그의 Article값이 변경되도록 작성하여 보자. 아래는 기존의 태그이다.  

```js
function App(){
  ...
  return (
    <div>
      ...
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```

App() 컴포넌트에 mode라는 상수를 선언하고 이에 관한 if문을 만든다.  

```js
function App(){
  const mode = "WELCOME"
  if(mode === 'WELCOME'){

  } else if (mode === 'READ'){

  }
  ...
  return (
    <div>
      ...
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
```

이후 return값에 있는 내용을 if문으로 전달받고, return값은 if문의 결과값을 전달받는다.  
본 예시에서는 결과값의 전달을 위해 content라는 변수를 선언하였다.  

```js
function App(){
  const mode = "WELCOME"
  ...
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    content = <Article title="Read" body="Hello, Read"></Article>
  }
  ...
  return (
    <div>
      ...
      {content}
    </div>
  );
}
```

이제 Header을 클릭하거나 Nav를 클릭함에 따라 mode가 바뀌도록 설정하여보자.

```js
function App(){
  ...
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        mode = "WELCOME";
      }}></Header>
      <Nav topics={topics} onChangeMode={id=>{
        mode = "READ";
      }}></Nav>
      {content}
    </div>
  );
}
```

...실행이 되지 않는다.   
클릭을 하여도 컴포넌트가 다시 실행되는 것이 아니기 때문에 결과값에 변화가 없다.  
App() 컴포넌트 내부의 mode 데이터가 변경되기 위해서는 useState라는 HOOK을 사용해야 한다.  

Hook이란 연동(Hook into)하는 기능에 특화되어 리액트의 16.8버전(2018년 후반)에 추가된 기능이다. 기존 리액트는 Class를 이용해 프로그래밍을 사용하였다. this 키워드와 고차원 컴포넌트를 이용해 state를 렌더링해왔다. Hook이란 함수형 프로그래밍을 따르며, this키워드를 대체한다. 최상위 계층에서 호출되는 Hook을 이용해 고차원 컴포넌트를 효과적으로 추상화할 수 있다.

```js
import {useState} from 'react'
```

이제 useState 함수를 이용해서 변수값을 상태로 만들 수 있다.

```js
function App(){
  const _mode = useState('WELCOME');
  ...
}
```
mode변수의 앞에 언더바(_)를 붙여주었다. 이는 관습적으로 해당 변수가 블록 스코프 내부에서만 private하게 사용됨을 의미하며, mode변수와 _mode변수를 구분짓기 위해 사용해보았다. 콘솔창에 _mode를 찍어보자.

```js
_mode (2) ['WELCOME', f]
```
위에서 보듯 useState는 배열을 리턴한다. 배열의 0번 인덱스는 상태의 값을 읽을때 사용하며, 1번 인덱스는 상태의 값을 변경할 때 사용할 함수이다. 이를 이용하여 state값을 가진 mode 변수와 state값을 변경시킬 setMode 변수를 만들 수 있다.

```js
function App(){
  const _mode = useState('WELCOME');
  const mode = _mode[0];
  const setMode = _mode[1];
  ...
}
```

위의 예시는 실제로는 아래와 같이 사용한다.

```js
function App(){
  const [mode, setMode] = useState('WELCOME');
  ...
}
```
useState의 0번 인덱스 상태는 mode에, 1번 인덱스 함수는 setMode에 할당되었다.

이제 앞서 작성했던 '클릭시 모드가 변경'되기 위해서는 setMode에 할당된 함수를 이용한다.

```js
function App(){
  ...
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChangeMode={id=>{
        setMode("READ");
      }}></Nav>
      {content}
    </div>
  );
}
```
Nav를 클릭하면 mode변수값이 변경되며 App()컴포넌트가 다시 실행되고, mode변수값에 따른 값을 렌더링해준다.  

이제 mode가 "READ"일 때 출력되는 값을 변경하여 보자. "READ"일 때 출력되는 값은 App()컴포넌트의 `else if (mode === 'READ'){content = <Article title="Read" body="Hello, Read"></Article>}`에 의해 결정된다. body 태그에 출력되는 값을 id에 따라 적절하게 바뀌도록 하면 되는 것이다.  


body에 들어갈 내용도 state를 이용하여 변경하여 보자. 편의상 id의 변수명을 바꾸었다.  
Nav() 컴포넌트에서 전달받는 id값은 idProp으로 변경하였다.  
useState를 통해 만들어지는 id는 idState로 지정하고 초깃값은 null로 하였다.  

이제 setId 함수를 이용하면 Nav()로 부터 넘겨받은 prop이 idState의 값이 된다.

```js
function App(){
  const [mode, setMode] = useState('WELCOME');
  const [idState, setId] = useState(null);
  ...
    return (
    <div>
    ...
      <Nav topics={topics} onChangeMode={idProp=>{
        setMode("READ");
        setId(idProp)
      }}></Nav>
      {content}
    </div>
  );
  ...
}
```

이제 idState와 topics 배열에 담겨있는 객체를 비교하여 같은 id를 갖는 값을 찾아 body태그로 넘겨주면 된다. for문을 이용해 title과 body변수를 할당하고, 이를 title과 body인스턴스에 {title}, {body}로 넘겨준다.  
`else if (mode === 'READ'){content = <Article title="Read" body="Hello, Read"></Article>}` 부분이 for문과 중괄호를 이용하여 아래와 같이 바뀐다.   

```js
function App(){
  const [mode, setMode] = useState('WELCOME');
  const [idState, setId] = useState(null);
  const topics =[
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ]
  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    let title = null;
    let body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === idState){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  ...
}
```

이제 실행해보자....는 안 된다. 왜 일까?  
id값이 생성되는 Nav()컴포넌트를 보자.   

```js
function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }
  ...
}
```
App()컴포넌트의 topics 배열에 있는 id프로퍼티는 숫자형이었다.  
해당 프로퍼티의 값이 Nav()컴포넌트의 태그인 `<a id={t.id} />`로 전달되면서 숫자형의 값이 문자형이 된다.   
태그의 인스턴스는 문자형을 값으로 지닌다. 해당 문자값이 `props.onChangeMode(event.target.id);`를 통해 App()컴포넌트의 `idProp`로 넘어간다. 해당 문제를 해결하기 위해 `idProp`으로 넘기기 전에 숫자형으로 변경하여 주자.

```js
function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  ...
}
```

최종적으로 만들어진 코드는 아래와 같다.
```js
function Header(props){
  return <header>
    <h1><a href="/" onClick={event=>{
      event.preventDefault();
      props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App(){
  const [mode, setMode] = useState('WELCOME');
  const [idState, setId] = useState(null);
  const topics =[
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ]
  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    let title = null;
    let body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === idState){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={idProp=>{
        setMode("READ");
        setId(idProp)
      }}></Nav>
      {content}
    </div>
  );
}
```

## 8. CREATE
폼을 이용해 새로운 topics 타이틀과 바디를 추가할 것이다.  

먼저 CREAT 페이지로 이동할 수 있는 링크를 추가해보자. a태그를 이용하였다. `<a href="/create">Create</a>`
```js
function App(){
...
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      {content}
      <a href="/create">Create</a>
    </div>
  );
}
```
해당 a태그를 클릭할 시 링크가 변경되는 것이 아니라 mode가 변경되도록 아래와 같이 수정하자.  
```js
<a href="/create" onClick={event=>{
  event.preventDefault();
  setMode('CREATE');
}}>Create</a>
```

이제 mode 부분에 'CREATE'를 추가하자.   
```js
function App(){
  if(mode === 'WELCOME'){} 
  else if (mode === 'READ'){}
  else if (mode === 'CREATE'){
    content = <Create></Create>
  }
```
mode가 CREATE일 때 <Create> 컴포넌트가 실행되도록 만들었다.  

이제 Create() 컴포넌트를 작성해보자.  

```js
function Create(){
  return <article>
    <h2>Create</h2>
  </article>

}
```

입력을 받을 예정이므로 article에 폼태그를 추가한다.  

form태그의 여러 타입에 대해서는 [HTML Input 요소의 타입들(types)](http://jun.hansung.ac.kr/cwp/htmls/HTML%20Input%20Types.html)를 참조하자.

폼 태그에 input type="text"를 title을 한 줄로 받자.  
textarea로 body를 여러줄로 받자.  
input type="submit"으로 create 버튼을 생성하자.  

```js
function Create(){
  return <article>
    <h2>Create</h2>
    <form>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><textarea name="body" placeholer="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
```

Create 버튼을 누르면 이벤트가 발생하도록 App() 컴포넌트에 onCreate 이벤트를 작성하자.  

```js
function App(){
  else if (mode === 'CREATE'){
    content = <Create onCreate={(title, body)=>{

    }}></Create>
  }
}
```

onCreate 이벤트에서 title, body를 props로 넘겨받기 위해 Create()컴포넌트의 <form> 태그를 수정하자. submit버튼이 발생되면 실행되는 onSubmit 이벤트를 이용한다. 이때 event.target은 이벤트가 발생된 객체, 즉 form 태그를 의미한다.  
form tag에 입력된 밸류값을 가져오기 위해 `event.target.title.value`를 하는 것이 좋다.  

```js
function Create(){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
    }}>
    </form>
  </article>
}
```
그리고 props를 이용하여 App() 컴포넌트의 onCreate()로 밸류값을 전달한다.  


```js
function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
    </form>
  </article>
}

function App(){
  else if (mode === 'CREATE'){
    content = <Create onCreate={(title, body)=>{

    }}></Create>
  }
}
```

이제 Create로 topics를 변경하기 위해서는 topics를 state로 변경해야 한다. App()컴포넌트의 topisc 부분을 아래와 같이 변경하자.

```js
function App(){
  const [topics, setTopics] =useState([
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ])
}
```

한편 새로운 id를 추가하기 위해 [nextId, setNextId] 변수를 추가하였다. 기본값은 4로 지정하였다. 
```js
function App(){
  const [nextId, setNextId] = useState(4);
```

이후 해당 state를 변경하는 인터페이스를 만들어보자.(props로 넘겨받은 변수에 언더바를 추가하였다.)  
```js
function App(){
  else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
    }}></Create>
  }
}
```

해당 newTopic을 Topics에 어떻게 추가할 수 있을까? state는 Immutable한 값이다. 이에 대해서는 [생활코딩 Immutability](https://opentutorials.org/module/4075)를 참조하자. 반면 범 객체(object, array)는 Mutable하다.   

State는 항상 Immutable한 상태를 유지하는 것이 좋다. 따라서 State값을 수정할 때에는 setValue를 사용하여야 하며, setValue로 범객체를 사용할 때에는 Immutable한 특성을 유지하기 위해 깊은 복사를 해야한다. 또한 본 예시에 사용된 예 말고도 concat을 사용할 수도 있다. [세오토리](https://seo-tory.tistory.com/53) 블로그를 참조하자. 본 예시에서는 Topics 배열을 깊은 복사 후, 내용을 수정하고, setValue를 이용할 것이다.

```js
function App(){
  else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics] //topics를 깊은 복사로 넘겨받음.
      newTopics.push(newTopic);
      setTopics(newTopics);
    }}></Create>
  }
}
```
이제 newTopics값이 Topics 값을 교체하게 된다.   
원리를 간단하게 설명해보면, 원시객체(primitive)의 예시를 들어보자. id가 1이었다. 이를 setId(2)로 바꾸면 1과 2는 값(value)도 다르고, 저장된 위치(reference)도 다르다. [jeaseong 블로그 참조](https://velog.io/@jeaseong/%EC%9B%90%EC%8B%9C-%ED%83%80%EC%9E%85%EA%B3%BC-%EA%B0%9D%EC%B2%B4) 때문에 React는 setId(2)와 함께 컴포넌트를 다시 실행하게 된다.  

반면 범객체를 보자. Topics 배열이 있다. 새로운 topic값을 Topics객체에 추가하고 setTopics(Topics)를 실행하면, 기존 Topics와 새로운 Topics는 같은 위치(reference)에 저장되어 있다. 따라서 setTopics(Topics)를 실행해도 React는 컴포넌트를 다시 실행하지 않는다. `newTopics=[...Topics]`의 걑은 복사를 통해 새로운 reference를 갖는 배열을 만들고, setTopics(newTopics)를 실행하면 비로소 React는 컴포넌트를 다시 실행하게 된다.   

아래의 예시와 같이 깊은 복사와 push 대신 concat을 사용할 수 있다. concat은 값이 추가된 새로운 배열을 반환하는 함수이다.

```js
function App(){
  else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      setTopics(topics.concat(newTopic));
    }}></Create>
  }
}
```

마지막으로 해당 글이 추가되었는지 상세페이지로 이동하자. 이때 setId를 실행한 후, nextId값을 1 더해준다.   
```js
function App(){
  else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics] //topics를 깊은 복사로 넘겨받음.
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
}
```
위 부분에서 처럼 Create 컴포넌트와 관련된 내용이 다른 부분과 구별되어 표시되는 점이 state를 사용했을 때의 이점이라 할 수 있다. 완성된 코드는 아래와 같다.

```js
function Header(props){
  return <header>
    <h1><a href="/" onClick={event=>{
      event.preventDefault();
      props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = propes.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
    </form>
  </article>
}

function App(){
  const [mode, setMode] = useState('WELCOME');
  const [idState, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] =useState([
      {id: 1, title:'html', body:'html is ...'},
      {id: 2, title:'css', body:'css is ...'},
      {id: 3, title:'javascript', body:'javascript is ...'},
  ])
  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    let title = null;
    let body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === idState){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics] //topics를 깊은 복사로 넘겨받음.
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={idProp=>{
        setMode("READ");
        setId(idProp)
      }}></Nav>
      {content}
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}
```