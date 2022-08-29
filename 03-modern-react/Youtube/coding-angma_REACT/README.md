# 코딩앙마 REACT JS 강좌
[링크](https://youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-)

- [코딩앙마 REACT JS 강좌](#코딩앙마-react-js-강좌)
    - [요약](#요약)
  - [1 강좌 소개](#1-강좌-소개)
  - [2 개발환경 설정](#2-개발환경-설정)
  - [3 컴포넌트와 jsx](#3-컴포넌트와-jsx)
  - [4 컴포넌트 만들기.](#4-컴포넌트-만들기)
  - [5 CSS 적용법](#5-css-적용법)
  - [6 이벤트 처리](#6-이벤트-처리)
  - [7 state (상태값), useState](#7-state-상태값-usestate)
  - [8 props (속성값)](#8-props-속성값)
- [9 더미데이터 구현, map() 반복문](#9-더미데이터-구현-map-반복문)
  - [10 리액트 라우터를 이용해 페이지 이동 구현](#10-리액트-라우터를-이용해-페이지-이동-구현)
  - [11 json-server, REST API](#11-json-server-rest-api)
  - [12 useEffect, fecth()로 API 호출](#12-useeffect-fecth로-api-호출)
  - [13 Custom Hooks](#13-custom-hooks)
  - [14 put(수정), delete(삭제)](#14-put수정-delete삭제)
  - [15 post, useHistory](#15-post-usehistory)
  - [16 추가 기능들](#16-추가-기능들)
  - [17 타입스크립트 적용해보기](#17-타입스크립트-적용해보기)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


### 요약
1. Json Server 열기
`json-server --watch ./src/db/data.json --port 3001`로 서버를 하나 열고  
`http://localhost:3001/`로 접속하면 json파일이 연결되어 있다.  

2. React-Router-Dom
`<Switch>`와 `<Router>`를 이용해 주소를 변경하며 렌더링 될 컴포넌트를 변경할 수 있음.  
`<Link to=URI>`는 `<a>`태그와는 달리 URI만 변경하고 새로고침을 하지 않음.  

3. 자바스크립트 fetch()와 REST API
fetch()를 이용해 URI로 서버에 CRUD(POST(), GET(), PUT(), DELETE())메서드로 요청을 보내고 결과값을 리턴받을 수 있음. 결과값은 .then (함수(결과값)) 의 형식으로 저-장! 이처럼 URI로 요청하고 받는 API를 REST API라고 함.  
```js
fetch("http://localhost:3001/days")
            .then (res => {
                return res.json()
            })
```

4. useState
본 강좌에서는 STATE로 DAYS와 날짜에 따른 단어들을 관리함. 특히 REST API로 받은 DATA를 STATE로 넘겨 서버와 통신할 때 리렌더링을 진행함.   

5. useRef
useRef는 DOM에 접근할 수 있는 태그이다. 본 강좌에서는 useRef로 폼 태그에 접근하고, 해당 폼 태그의 Value를 REST API의 PUT()으로 자료를 추가함.  

6. 타입 스크립트
jsx를 리턴하는 컴포넌트의 경우 확장자를 tsx로 변경하고, 그렇지 않은 일반 파일은 ts로 확장자를 변경함. 꺽쇠의 활용에서 두 확장자의 차이가 있음.  
인터페이스로 객체의 요소들에 타입을 한 번에 부여할 수 있음. 인터페이스는 export하여 여러 ts 파일에서 사용 가능.  
`<>`꺽쇠를 이용하여 `  const engRef = useRef<HTMLInputElement>(null);`과 같이 변수에 타입(혹은 HTML 엘리먼트 타입)을 지정해줄 수 있음.  
타입이 지정되면 타입에 맞는 메서드와 프로퍼티, 어트리뷰트의 자동완성 기능이 지정됨.  
또한 특정 객체가 undefined나 null을 입력받을 우려가 있는 경우 빨간줄을 띄워주며, if문으로 입력을 강제하거나 식별자 뒤에 `?`를 붙임으로서 해당 오류를 해결하는 것이 좋음.  




## 1 강좌 소개
리액트를 이용한 영어단어장.  
함수형 컴포턴트, 훅, JSON-server를 이용한 CRUD, REST API를 통한 추가, 수정 삭제 기능  
코드 다운로드는 https://github.com/coding-angma/voca  

## 2 개발환경 설정  
- NODE JS 설치
- 원하는 폴더의 터미널에서 `npx create-react-app 하위폴더명` 입력 (create-react-app이 웹 팩 등을 자동으로 설치해준 후 삭제됨)
- `npm start` 후 index.html 파일 실행
<br>

- git에 push할 때에는 `.gitignore`에 NODE JS 내용 추가.
- git에서 clone한 후에는 `npm install` 실행 (`package.json`파일 dependencies의 패키지들이 설치됨.`
<br>

- index.html의 id='root'로 index.js의 가상 돔이 렌더링 됨.   
<br>

- 파일에 작성되어 저장되는 모든 내용은 브라우저에 즉시 반영됨. Hot Module Replacement
- 터미널에서 ctrl+c로 Node js를 중단할 수 있음. npm start 명령어로 리액트를 실행할 수 있음. (package.json 파일의 scripts 부분 참조.)
```
  "scripts": {
    "start": "react-scripts start", 개발모드로 실행
    "build": "react-scripts build", 배포모드로 빌드
    "test": "react-scripts test", 작동에 에러가 없는지 테스트
    "eject": "react-scripts eject" 웹팩 바벨 등의 설정파일을 추출
  },
``` 
  
jsx - 자바스크립트 내부에 쓰는 xml형태의 태그. 예약어인 class 대신 className을 쓰는 등 일부 문법에 차이가 있음.    
  
## 3 컴포넌트와 jsx  
**컴포넌트**  
기능별로 모아두는 것. 동일한 디자인, 로직에 따라 수정/재활용이 가능하다.  
컴포넌트 함수명의 첫 글자는 대문자로 사용한다.  
컴포넌트는 jsx를 리턴한다.   

**jsx**  

1. 컴포넌트의 리턴 문 안에 작성한다.   
2. class대신 className  
3. 스타일 어트리뷰트의 밸류는 객체 형태로 작성할 수 있다.   
4. 스타일 어트리뷰트의 프로퍼티는 카멜케이스 (background-color가 아니라 backgroundColor!!)  
5. 컴포넌트에 선언된 변수는 리턴문에서 {변수명} 형태로 불러올 수 있다. {평가식}도 가능하다. (값만 불러올 수 있고 객체는 불러올 수 없음.)
6. return문은 하나의 요소로 이루어져 있어야 함. 따라서 return문 안의 모든 태그를 `<div>, </div>`나 Fragment(`<></>`)로 감싸야 함.
7. 모든 태그는 닫혀 있어야 하며, self-closing 가능 (`<Header />`, `<br />`)
8. 주석은 태그 밖에서는 `{/*   */}`, 태그 안에서는 `/*  */`로 작성  

```js
function Appl() {
    const name = "Tom";
    const person = {
        name: name,
        age: 30,
}
return (
    <> {/*fragment로 감싸기*/}
        <img src = {this.props.user.img} alt="logo" /> {/* 셀프 클로징 */}
        <div className="App">
            <img src = {this.props.user.img} alt="logo"></img>
            <h1 
                style = {{
                    backgroundColor: "green",
                }}> {/* 인라인 스타일 작성 방법 (중괄호가 두 개!) */}
            Hello, {name}. <p> 당신의 한국 나이는 {person.age + 1}살 입니다. <p/>
            </h1>
        </div> 
    </> 
)

```

## 4 컴포넌트 만들기.

1. `src/component` 폴더와 `hello.js`생성
2. 컴포넌트 내부에 한 줄의 반환값만 있는 경우 아래와 같은 형태 생성하고 추출할 수 있음.
- 화살표 함수 사용 (return과 중괄호 생략 가능)
    ```js
        const Hello = () => <p>Hello</p>;;

        exprot default Hello;
    ```

컴포넌트로 추출할 태그가 하나라면 아래와 같이 작성
- 한줄로 작성
  ```js
  export default function Hello(){
    return <p>Hello</p>;
  }
  ```

3. `App.js`에서 아래와 같이 import
   `import Hello from './component/Hello';`

4. import된 컴포넌트는 사용자 정의 태그처럼 jsx에 삽입된다.  
    ```js
    function App() {
    return (
        <>
            <Hello />
            <Hello> world </Hello>
        </>
      );
    }
    ```

## 5 CSS 적용법
- 인라인 작성  
  스타일 어트리뷰트(style=)의 밸류({})의 객체({})로 작성  
  프로퍼티의 밸류는 숫자는 따옴표 없이 적어도 되지만 일반적으로 따옴표 작성.  
  camelCase로 프로퍼티명 작성, 마지막 프로퍼티에도 쉼표 작성하는 관습.  
  일반적으로는 인라인을 사용하지 않음.  
    ```js
    export default function Hello() {
        return (
            <div>
                <h1
                    style={{
                        color: "red",
                        borderRight : "12px solid #000",
                        marginBottom: "50px",
                        opacity: 1,
                    }}>
                ...
        );
    }
    ```

- CSS파일 활용. 
  index.css 파일은 HTML 전체에 적용. 
  App.css, Hello.css 등의 CSS 파일도 import 시 HTML 전체에 영향을 미치는 점에 유의.
  `import App.css`

- CSS모듈 활용.
  1. `Hello.module.css`라는 형태로 파일 생성 (주로 '컴포넌트명.module.css'의 형태로 이름 작성.)  
  2. `import styles from "./Hello.module.css";`의 형태로 임포트  
  3. 클래스 명은 중괄호로 묶어 `<div clssName={styles.box}>Hello</div>`의 형태로 작성.  
  4. `Hello.js`컴포넌트와 `App.js` 컴포넌트에 각기 다른 CSS 모듈을 삽입하면 클래스 명이 겹칠 일이 없고, 상속, 오버라이딩 등의 문제도 해결됨.  
  5. 웹에서 렌더링 될 때에는 `<div class="Hello_box__3-_ge">`와 같은 형태로 자동으로 네이밍을 변환함.  

## 6 이벤트 처리
1. 이벤트에 `{함수명}`넘겨주기
함수를 실행하고자 한다면 `{함수명}`으로 호출한다.  
```js
export default function Hello() {
    function showName() {
      consol.log("Mike");
    }

    return (
      <div>
        <h1> Hello </h1>
        <button onClick={showName}>Show name</button>
        <button>Show age</button>
      </div>
    );
}
```

`{함수명()}`으로 입력하면 함수가 반환하는 값을 입력받는다. 위의 예시에서 `onClick={showName()}`을 입력하면 `undefined`라서 반응을 하지 않는다.

2. 이벤트에 화살표 함수 넘겨주기
```js
export default function Hello() {
    function showName() {
      consol.log("Mike");
    }

    return (
      <div>
        <h1> Hello </h1>
        <button onClick={showName}>Show name</button>
        <button onClick={
            () => {
                console.log(30);
            }}>
                Show age
            </button>
      </div>
    );
}
```

3. 화살표 함수를 이용해서 함수를 매개변수화 함께 호출할 수 있다.
```js
export default function Hello() {
    
    function showName() {
      console.log("Mike");
    }
    function showAge(age) {
        console.log(age)
    }

    return (
      <div>
        <h1> Hello </h1>
        <button onClick={showName}>Show name</button>
        <button onClick={
            () => {
                showAge(30);
            }}>
                Show age
            </button>
      </div>
    );
}
```

4. 함수명을 호출하여 이벤트 객체 e를 전달받기.
```js
export default function Hello() {
    function showText(e){
        console.log(e.target.value)
    }

    return(
        <div>
            <input type="text" onChange={showText} />
        </div>
    );
}
```
e는 onChange에서 발생한 이벤트를 의미한다.  
target은 해당 이벤트가 발생한 객체. 즉 `<input> 엘리먼트`를 의미한다.  
value는 `<input> 엘리먼트`가 가진 프로퍼티이다.  



5. 화살표 함소로 이벤트 객체 e를 전달받기.
4의 예시를 함수를 아래와 같이 수정할 수 있다.  
```js
export default function Hello() {
    return(
        <div>
            <input type="text" onChange={e => {
                console.log(e.target.value);
            }} />
        </div>
    );
}
```

6. 인수를 식별자로 선언하기.  

실제 프로젝트에서는 `e.target.value`를 별도의 식별자로 선언하여 인수로 전달하는 방법을 쓴다.  
```js
export default function Hello() {
    function showText(txt){
        console.log(txt)
    }

    return(
        <div>
            <input 
                type="text" 
                onChange={e => {
                    const txt = e.target.value;
                    showText(txt);
                }} 
            />
        </div>
    );
}
```

## 7 state (상태값), useState
변수를 이용해 dom을 업데이트 해보자.  
```js
export default function Hello(){
    let gender = "Male";

    function changeGender() {
        gender = gender === "Male" ? "Female" : "Male";
        document.getElementById("gender").innerText = name;
    }
    
    return (
        <div>
            <h1>state</h1>
            <h2 id="gender">{gender}</h2>
            <button onClick={changeGender}>Change</button>
        </div>
    );
}
```
useStateElement의 변수값을 교체해주긴 하지만, 컴포넌트의 라이프 사이클의 원리를 이용하진 않아 리렌더링 되지 않는다.  

```js
export default function Hello(){
    const [gender, setGender] = useState('Male'); /* 첫번째 변수는 밸류, 두번째 변수는 메서드*/ 

    function changeGender() {
        const newGender = gender === "Male" ? "Female" : "Male";
        setGender(newGender);
    }
    
    return (
        <div>
            <h1>state</h1>
            <h2 id="gender">{gender}</h2>
            <button onClick={changeGender}>Change</button>
        </div>
    );
}
```
changeGender 부분은 아래와 같이 수정할 수 있다.

```js
    function changeGender() {
        setGender(gender === "Male" ? "Female" : "Male");
    }
```

changeGender 함수 없이 화살표 함수로 작성이 가능하다.  

```js
export default function Hello(){
    const [gender, setGender] = useState('Male'); /* 첫번째 변수는 밸류, 두번째 변수는 메서드*/ 
    
    return (
        <div>
            <h1>state</h1>
            <h2 id="gender">{gender}</h2>
            <button onClick={() => {
                setGender(gender === "Male" ? "Female" : "Male");
                }}
            >
                Change
            </button>
        </div>
    );
}
```

동일한 컴포넌트라도 각기 다른 객체로 작동한다.  
```
<>
    <Hello />
    <Hello />
    <Hello />
</>
```

## 8 props (속성값)
App 컴포넌트에서 age로 숫자형자료를 전달해보자.
```js
import Hello from './component/Hello';

function App() {
    return (
        <div className="App">
            <h3> props : properties </h3>
            <Hello age={10} />
            <Hello age={20} />
            <Hello age={30} />
        </div>
    );
}
```
함수형 컴포넌트로 입력받은 값들은 props에 프로퍼티의 형태의 인자로 전달된다.
```js
export default function Hello(props){
    console.log(props);
}
```
```
{age: 10}
{age: 20}
{age: 30}
```
```js
export default function Hello(props){
    console.log(props);

    return(
        <h2> {props.age}세 </h2>
    )
}
```
```
10세
20세
30세
```

컴포넌트에서 props에 접근하여 변경하는 것은 불가능하다. props의 프로퍼티는 READ ONLY properties이다.  
넘겨받은 props의 값을 state로 만들어야 한다.

useState를 이용하면 props가 아래와 같은 형태의 객체로 바뀐다.
```
{
0: 20,
1: f(),
length: 2
[[prototype]]: Number(0)
}
```
첫번째 원소는 상태의 값, 
두번째 원소는 상태의 값을 변경하는 함수.
```js
export default function Hello(props){
    const [gender, setGender] = useState('Male'); 
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h1>state</h1>
            <h2 id="gender">
                {gender}, {age}
            </h2>
            <button onClick={() => {
                setGender(gender === "Male" ? "Female" : "Male");
                setAge(age +1);
                }}
            >
                Change
            </button>
        </div>
    );
}
```
이제 버튼을 누를 때마다 성별도 바뀌고, props.age로 넘겨받은 값이 바뀐다.  

본 예제에서는 props.age의 값을 변경하지 않을 것이기 때문에   
props의 key로 아래와 같이 구조분해할당`{ age }` 받을 수 있다.  
```js
export default function Hello({ age }){
    const [gender, setGender] = useState('Male'); 
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    return (
        <div>
            <h1>state</h1>
            <h2 id="gender">
                {gender} ({age}) : {msg}
            </h2>
            <button onClick={() => {
                setGender(gender === "Male" ? "Female" : "Male");
                }}
            >
                Change
            </button>
        </div>
    );
}
```
props로 state를 만들고 state의 값을 props로 하부 컴포넌트에 전달하는 것도 역시 가능하다.  

# 9 더미데이터 구현, map() 반복문
- Header컴포넌트 생성
로고와 목차가 있는 Header를 생성한다.
```js
export default function Header() {
  return (
    <div className="header">
      <h1>
        <a href="/">토익 영단어(고급)</a>
      </h1>
      <div className="menu">
        <a href="#" className="link">
          단어 추가
        </a>
        <a href="#" className="link">
          Day 추가
        </a>
      </div>
    </div>
  );
}
```

- 더미 데이터 생성  
`./db/data.json` 으로 days라는 객체 배열와 words라는 객체 배열를 만든다.   
해당 데이터는 `import 식별자명 from "data.json"` 의 형태로 받아올 수 있다.  

- map() 사용
json 파일은 map을 이용하여 배열에서 특정 객체를 받아 반환할 수 있다.  
map의 콜백함수로 화살표 함수를 사용한 예시이다.  
```js
import dummy from "../db/data.json";

export default function DayList() {
    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key={day.id}>Day {day.day}</li>
            ))}
        </ul>
    );
}
```
이때 list 요소는 고유한 key값을 필요로 한다.  
더미데이터 파일의 id를 고유한 key값으로 부여하였다.  

날짜를 클릭했을 때에 단어를 받아오는 컴포넌트를 작성한다.
이때 dummy.words에 filter를 걸어 날짜와 일치하는 단어를 받아온다.  


```js
import dummy from "../db/data.json";

export default function Day(){
    const day = 1;
    const wordList = dummy.words.filter(word => word.day === day)
    
    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
```

- `<Header />`, `<DayList />`, `<Day />` 를 App 컴포넌트에 삽입한다.
```js
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <DayList />
            <Day />
        </div>
    );
}

export default App;
```

## 10 리액트 라우터를 이용해 페이지 이동 구현  
`npm install react-router-dom`

App.js에서 리액트 라우터를 삽입하자.

`import {BrowserRouter, Route, Switch} from 'react-router-dom';`

BrowserRouter를 상위 요소로 감싸고,  
Switch는 페이지를 이동할 때마다 바뀌는 부분을 감싸자.  
(즉 Header와 Footer는 Switch의 외부에 위치한다.)  
Route는 이동할 위치를 위미한다. `path="/"`는 첫 페이지를 의미한다.

```js
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <DayList /> 
                    </Route>
                    <Route path="/day">
                        <Day />
                    </Route>    
                <Switch />
            </div>
        </BrowserRouter>
    );
}

export default App;
```
첫번째 경로를 `<Route path="/">`로 선언하면 `http://localhost:3000`로 접속했을 때엔 잘 보이지만 `http://localhost:3000/day`로 접속해도 DayList가 보인다.  
이를 방지하기 위해 `exact path="/"`로 경로가 `http://localhost:3000/`일 때에만 DayList가 보이도록 한다.
  
DayList.js에 링크를 삽입해주자.  
리액트 라우터는 `a href=""`태그 대신 `Link to=""` 태그를 사용한다.
Link는 a태그와 달리 페이지의 경로만 변경할 뿐 **페이지의 새로고침이 일어나지 않는다**.  

```js
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                </li>
            ))}
        </ul>
    );
}
```
이제 각 날짜를 누르면 주소가 day/1, day/2로 변경된다. 
App에서 Route path가 주소에 맞게 이동하도록 수정하자.

```js
<Route path="/day/:day">
    <Day />
</Route>    
```
이제 Router가 동적으로 경로를 처리하게 되었다.
이때 `:day`는 `/day/${day.day}` 에서 `${day.day}`부분을 `{day: "1"}`과 같은 형태로 저장함을 의미한다. (만일 `<Route path="/day/:param">`으로 설정하면 `{param: "1"}`로 저장한다.)  

동적으로 처리되어 저장된 주소값을 Day.js에서 받기 위해선  
params를 사용한다.   
useParams().day는 현재의 경로에서 'day'에 해당하는 부분을 가져온다.  
즉, `http://localhost:3000/day/23571234590`에서 `"23571234590"` 부분을 가져온다.  


```js
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day(){
    // const a = useParams();
    // const day = a.day;
    // const day = useParams().day;
    const { day } = useParams();
    const wordList = dummy.words.filter(word => word.day === day)
    
    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
```
이때 Params로 들어오는 값은 문자임을 고려하여 필터 부분도 수정하자.(json 파일 확인 필수!)   
`    const wordList = dummy.words.filter(word => word.day === Number(day))`  

이제 APP 컴포넌트의 라우터는 `http://localhost:3000/`일 때와 `http://localhost:3000/day/${day}`일 때 작동하고 있다. 해당 두 주소가 아닌 경우 '잘못된 페이지'라고 알려주는 페이지를 만들자.  

```js
import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </>
  );
}
```
해당 컴포넌트는 APP의 마지막 라우트로 삽입한다.  
```js
          <Route>
            <EmptyPage />
          </Route>
```

## 11 json-server, REST API
단어장에 뜻 보기와 삭제버튼을 추가하기 위해 기존 Day컴포넌트의 내용 일부를 새로운 Word컴포넌트로 옮긴다.  


```js
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day(){
    // const a = useParams();
    // const day = a.day;
    // const day = useParams().day;
    const { day } = useParams();
    const wordList = dummy.words.filter(word => word.day === day)
    
    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
```

word의 값을 `{ word }`로 가져온다.

```js
export default function Word({ word }) {
    return (
    <tr>
        <td>
            <input type="checkbox" />
        </td>
        <td>{word.eng}</td>
        <td>{word.kor}</td>
        <td>
            <button>뜻 보기</button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>
    )
}
```

뜻이 보였다가 없어지는 state를 하나 생성한다.  

`const [isShow, setIsShow] = useState(false);`  
`<td>{isShow && word.kor}</td>` State가 True일 때에만 버튼이 나오도록 수정.  

state를 변경하는 이벤트를 생성한다.  
```js
    function ToggleShow(){
        setIsShow(!isShow)
    }
```
`<button onClick={toggleSohw}>뜻 보기</button>` 해당 이벤트를 뜻보기 버튼에 적용.  

button text의 텍스트는 아래와 같이 토글할 수 있다.  

```js
<button onClick={toggleSohw}>
    뜻 {isShow? '숨기기' : '보기'}
</button>
```
  
체크박스를 했을 때 단어 모습을 숨기기 위해 json 파일의 "isDone"이라는 값을 이용하자.  
```json
  "words": [
    {
      "id": 1,
      "day": 1,
      "eng": "book",
      "kor": "책",
      "isDone": false
    }, ...]
```
`<input type="checkbox" checked={word.isDone} />`  
`<td className={word.isDone? "off" : ''}>`  
  
위의 내용을 적용하면 isDone이 true일 때 체크박스가 체크되고 .off 스타일이 활성화 된다.  
문제는 핸들러가 없으면 한 번 실행되고 작동이 안된다.   
State로 만들어야 한다.

`const [isDone, setIdDone] = useState(word.isDone);`  
이벤트 핸들러를 만들고

```js
    function toggleDone() {
        setIsDone(!isDone);
    }
```
적용한다.
```js
        <td className={isDone? "off" : ''}>
            <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
```


```js
export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIdDone] = useState(word.isDone);

    
    function toggleShow(){
        setIsShow(!isShow)
    }

    function toggleDone() {
        setIsDone(!isDone):
    }

    return (
    <tr>
        <td className={isDone? "off" : ''}>
            <input type="checkbox" checked={isDone} onChange={toggleDone}/>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleSohw}>
                뜻 {isShow? '숨기기' : '보기'}
            </button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>
    )
}
```

지금까지 만든 함수는 더미데이터를 읽기만 하였다.  
더미데이터를 수정할 수 있어야 사용자가 체크한 단어의 isDone값이 변경될 것이다.  
  
**json server**  
json서버는 빠르고 쉽게 서버를 구축하기 때문에 작은 프로젝트에서 사용하기 좋은 백엔드 툴이다.  
  
`npm install -g json-server`  

새로운 포트로 data.json을 열러 서버로 만들어보자.
`json-server --watch ./src/db/data.json --port 3001`

Json Server는 혹은 git bash를 사용하면 적용된다.  
혹은 powershell을 열고 `executionpolicy` 를 입력, `set-executionpolicy unrestricted`로 변경 후 실행한다.  
 
`json-server --watch ./src/db/data.json --port 3001`로 서버를 하나 열고  
`http://localhost:3001/`로 접속하면 json파일이 연결되어 있다.  


**REST API**  
URI(Uniform Resource Identifier) 주소 : URL이 자원의 위치를 의미한다면 URI는 자원의 '식별자'를 의미. 파일의 주소 뒤에 Query를 붙일 수 있음.  
REST API는 URI의 주소와 메서드로 CRUD를 구현하는 것.  
POST()  
GET()  
PUT()  
DELETE()   
  
`localhost:3001/words`를 입력하면 식별자가 words인 객체가 보인다.  
`localhost:3001/words?day=1`을 입력하면 식별자가 words이고, day의 값이 1인 객체가 보인다.  

## 12 useEffect, fecth()로 API 호출
REST API로 하는 작업들은 모두 data.json 파일 내부에 기록됨에 유의하자.  

DayList에서 dummy로 연결된 json을 지우고 State를 하나 생성한다.  
해당 스테이드는 API로 부터 배열을 받는다.  
```js
import { Link } from "react-router-dom";

export default function DayList() {
    const [days, setDays] = useState([])
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                </li>
            ))}
        </ul>
    );
}
```

useEffect() : 상태값이 바뀌었을 때 동작하는 함수를 작성한다. 렌더링 결과가 실제로 돔에 반영되거나 컴포넌트가 사라지기 직전에 마지막으로 호출 됨. 즉 **state가 변경될 때마다 함수가 호출되는 것.**  
useEffect는 첫번째 매개변수로 실행할 함수를 의미함.  
두번째 매개변수로 '의존성 배열'을 받음. 렌더링이 새로될 때가 아니라 해당 배열에 있는 state들이 변경될 때에만 함수가 호출 됨.  
의존성 배열이 없을 때 : state가 변경될 때마다 함수가 호출 됨  
의존성 배열이 있고, 배열에 원소가 있을 때 : 해당 배열에 있는 State들이 변경될 때 함수가 호출 됨.  
의존성 배열이 있고, 배열에 원소가 없을 때 : 가장 처음에 렌더링 될 때에만 호출 됨.  

가장 처음 렌더링 될 때 fetch로 api를 호출하도록 하자.  
**fetch 사용법**  
fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.  
- res.json() : response로 온 응답을 json으로 반환함.  
- setDays(data) : .json()으로 만들어진 json을 받아서 해당 데이터를 state의 배열로 반영함.  

```js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {
    const [days, setDays] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then (res => {
                return res.json()
            })
            .then (data => {
                setDays(data);
            });
    }, []);

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                </li>
            ))}
        </ul>
    );
}
```

이제 Day컴포넌트에서도 로 사용되던 부분을 json서버의 응답 데이터로 교체하자.  
Day컴포넌트는 words를 받는다. day의 밸류는 Param으로 받은 값과 일치시킨다.       
이때 day를 의존성 배열에 넣는다. 만약 day값이 변경된다면 api도 다시 호출될 것 이므로 fetch의 uri와 의존성 배열로 연결된 Param은 항상 일치하게 된다.  
```js
import Word from "./Word";
//import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day(){
    const { day } = useParams();
    //const wordList = dummy.words.filter(word => word.day === day)
    const [words, setWords] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then (res => {
                return res.json()
            })
            .then (data => {
                setDays(data);
            });
    }, [day]);

    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
```

## 13 Custom Hooks
`./hooks` 폴더에 `useFetch.js` 파일 생성  
컴포넌트명은 `use훅이름`  
주소를 해당 hook의 props로 받는다.  
data를 받아서 json의 데이터를 반환하도록 한다.  
```js
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);

  return data;
}
```
이를 적용하자. 

```js
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function DayList() {
    const days = useFetch("http://localhost:3001/days")
    // const [days, setDays] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:3001/days")
    //         .then (res => {
    //             return res.json()
    //         })
    //         .then (data => {
    //             setDays(data);
    //         });
    // }, []);

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                </li>
            ))}
        </ul>
    );
}
```

```js
import Word from "./Word";
//import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Day(){
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    // const [words, setWords] = useState([]);
    
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then (res => {
    //             return res.json()
    //         })
    //         .then (data => {
    //             setDays(data);
    //         });
    // }, [day]);

    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
```

## 14 put(수정), delete(삭제)
Word 컴포넌트에서 에서 외운 단어인지 아닌지isDone을 수정하도록 togle json파일을 수정하자. 
fetch에 id를 넘겨 원하는 단어를 찾은 후,
두번째로 객체를 넣어준다. 해당 객체에 요청에 사용할 옵션들을 입력한다.  
Content-Type은 보내는 리소스의 타입을 입력한다. 우리는 json 형식으로 보낸다.    
PUT 메서드는 수정을 위한 정보를 입력해야 한다. 이를 위해 body 값에 수정을 위한 정보를 담아서 보낸다. 이때 JSON.stringify로 감싸서 json 형식으로 변환한다.  

응답을 받아서, 응답이 'OK'이면 state도 변경한다.  

```js
    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT", //put메서드로 수정할거야.
            headers: {
                "Content-Type": "application/json", //json파일로 보낼거야.
            },
            body: JSON.stringify({ //수정에 필요한 데이터를 json파일로 변환하는 중
                ...word, //기존 데이터
                isDone: !isDone, //isDone 수정
            }),
        }).then(res => {
            if (res.ok) { //응답이 ok?
                setIsDone(!isDone); //스테이트 바꿔
            }
        });
    }
```

삭제를 눌렀을 때, confirm 창을 띄워서 물어보고 삭제하도록 함.  
삭제 버튼에 함수를 추가 `<button onClick={del} className="btn_del">삭제</button>`  
fetch로 DELETE메서드 사용. 
 
```js
function del(){
    if(window.confirm('삭제 하시겠습니까?')){
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "DELETE",
        })
    }
}
```

이때 데이터를 삭제하면 삭제는 되지만 새로고침은 되지 않는다. 새로고침이 되도록 word라는 스테이트를 하나 추가하자

이때 word가 기존의 props로 받는 word와 이름이 겹치지 않도록 props의 word는 `{word : w}`로 변경하여 식별자 w에 할당하였다. 
이제 w는 word state 저장되고, 기존의 코드들은 state를 이어받는다.  

`    const [word, setWord] = useState(w);`  
이제 삭제된 경우 state의 id를 0으로 바꾸고, null을 리턴한다.  
```js
    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }),ten(res => P
            if(res.ok){
                setWord({ id : 0})
            })
        }
    }

    if (word.id === 0) {
        return null;
    }
```

삭제시에 정상적으로 새로고침이 진행되며, 삭제된 내용은 보이지 않는다. 

```js
export default function Word({ word: }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIdDone] = useState(word.isDone);

    
    function toggleShow(){
        setIsShow(!isShow)
    }

    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({ 
                ...word, 
                isDone: !isDone, 
            }),
        }).then(res => {
            if (res.ok) { 
                setIsDone(!isDone); 
            }
        });
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }),ten(res => P
            if(res.ok){
                setWord({ id : 0})
            })
        }
    }

    if (word.id === 0) {
        return null;
    }

    return (
    <tr>
        <td className={isDone? "off" : ''}>
            <input type="checkbox" checked={isDone} onChange={toggleDone}/>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleSohw}>
                뜻 {isShow? '숨기기' : '보기'}
            </button>
            <button onClick={del} className="btn_del">삭제</button>
        </td>
    </tr>
    )
}
```


```js
  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }
```

## 15 post, useHistory
post를 이용해서 단어와 날짜를 추가하는 기능을 만들자.  
`./component`폴더에 `CreateWord.js`파일을 만들자  
App에 임포트 하자.  
`import CreateWord from "./component/CreateWord`  
```js
<Route path="/create_word">
    <CreateWord />
</Route>
```

Header의 A태그도 아래와 같이 변경해주자  
```js
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
```

`CreateWord.js`에 단어 등록폼을 만들자  
먼저 기본 구조를 잡자  
- 영단어
- 한국어 뜻
- 날짜
```js
export default function CreateWord() {
  return (
    <form>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer"/>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터"/>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select>
            <option>1</option>
            <option>2</option>
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
```

사용자 정의 훅 useFetch로 Day 파트부터 수정하자.
`import useFetch from "../hooks/useFetch";`
```js
      <div className="input_area">
        <label>Day</label>
        <select>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
```

submit을 클릭하면 기본값으로 폼 태그가 초기화가 된다.   
이벤트를 만들어 preventDefault 하자.   
```js
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
```
`<form onSubmit={onSubmit}>`

useRef 훅을 이용 돔에 접근할 수 있다. 이를 이용해 폼 태그에 있는 정보를 얻을 수 있다.  
훅을 선언하고 각 태그에 Ref를 연결해주자.
```
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
``` 
`        <input type="text" placeholder="computer" ref={engRef} />`  
`        <input type="text" placeholder="컴퓨터" ref={korRef} />`    
`        <select ref={dayRef}>`       

submit을 누르면 `engRef.current.value`값이 생성된다.   
current 속성을 이용해서 해당하는 요소에 접근하고, value에는 input에 입력된 값이 저장된다.  

이를 이용해 submit을 누르면 "words"객체의 'day', 'eng', 'kor'은 `Ref.current.value`값으로 하고, `"isDone": false`를 갖는 객체를 추가하도록 이벤트를 작성하자. id는 자동으로 생성된다.  


```js
    const days = useFetch("http://localhost:3001/days");

    function onSubmit(e) {
        e.preventDefault();

        const day = dayRef.current.value;
        const eng = engRef.current.value;
        const kor = korRef.current.value;

        fetch(`http://localhost:3001/words/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day,
                eng,
                kor,
                isDone: false,
            }),
            }).then(res => {
            if (res.ok) {
                alert("생성이 완료 되었습니다");
            }
        });
    }
```

생성이 완료되면 해당 일자로 이동하여 확인해야 한다.  
생성이 완료되었는지 자동으로 해당 일자로 이동하도록 코드를 수정하여 보자.  
React Router의 useHistory는 사용자의 History에 있는 주소로 이동시킨다.  
`const history = useHistory();`  
res.ok일 때 페이지를 이동시키자.  
```js
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          history.push(`/day/${day}`);
        }
```

날짜를 추가하는 컴포턴트를 만들자.
`./component/CreateDay.js`
```js
//App.js
<Route path="/create_day">
    <CreateDay />
</Route>
```
```js
//Header.js
        <Link to="/create_day" className="link">
          Day 추가
        </Link>
```
CreateDay의 구조를 잡자.  
```js
export default function CreateDay() {
  return (
    <div>
      <h3>현재 일수 : 10일</h3>
      <button>Day 추가</button>
    </div>
  );
}
```
현재까지의 일자를 불러오자

```js
export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button>Day 추가</button>
    </div>
  );
}
```
이제 Day 추가를 누르면 날짜가 추가되도록 수정하자.  
현재 날짜에 +1을 해준다.

완료가 되면 가장 첫 페이지 `/`로 이동시킨다. 

```js
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        history.push(`/`);
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
```

## 16 추가 기능들
- 인터넷이 느린 경우 로딩창 추가하기
```js
//DayList 컴포넌트
export default function DayList() {
  if (days.length === 0) {
    return <span>Loading...</span>;
  }
```
```js
//day 컴포넌트
  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
```
개발자 도구의 Network 탭에서 `online`으로 되어 있는 설정을 `Slow 3G`프리셋으로 변경해서 테스트해보자.   

- 인터넷이 느릴 때 중복입력 안되게 만들기.  
`CreateWord`컴포넌트에서 생성을 여러번 클릭하면 res가 오기도 전에 비어있는 객체가 JSON에 추가되어 버린다. 통신중일 때에는 Submit이 불가능하게 막아보자.  
isLoading이라는 State를 만든다.
`const [isLoading, setIsLoading] = useState(false);`  
기존의 fetch를 isLoading이 false일 때에만 작동하도록 if문으로 감싼다.  
이때 fetch를 시작하기 전에 isLoading을 true로 만들고, res가 왔을 때에 isLoading을 false로 만든다.  
```js
if(!isLoading){
    setIsLoading(true);
    fetch(,{

    }).then(res=> {
        if res.ok{
            setIsLoading(false);
        }
    });
}
```
버튼에도 isLoading이 True일 때에는 saving이라고 표시되도록 바꿔주자.  
```js
      <button>
        {isLoading ? "Saving..." : "저장"}
      </button>
```
스타일로 살짝 흐려지게 적용할 수 있다.  
```js
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
```

- Day를 삭제하는 기능과 Day를 화살표로 이동하도록 추가해볼 수도 있겠다. 

## 17 타입스크립트 적용해보기
- 설치
리액트용 타입스크립트    
`npm install typescript @types/node @types/react @types/react-dom @types/jset` 
\+ 리액트 라우터 돔  
`npm install typescript @types/node @types/react @types/react-dom @types/jset @types/react-router-dom` 

- 확장자명 변경
js를 ts로,  jsx를 tsx로 변경. 컴포넌트들에 jsx가 포함되어 있으므로 tsx 확장자로 변경한다.  

- 프롭스 입력받기
`Word.tsx`열기
`interface IProps {}`
`export default function Word({ word: w }: IProps)`
이후 IPros에 프로퍼티와 프로퍼티 타입을 추가해준다.  

```ts
interface IProps {
  word: any;
}
```
Type을 any로 쓰는 것은 권장하지 않는다.   
새로운 인터페이스를 만들고, 테이터마다 타입을 지정해준다.  
이처럼 interface는 한 번에 여러개의 값의 타입을 지정해줄 수 있다.
```
    {
      "id": 1,
      "day": 1,
      "eng": "book",
      "kor": "책",
      "isDone": false
    },
```
```js
interface IProps {
  word: IWord;
}

interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}
```

이제 `word.`을 입력하면 word에 있는 프로퍼티와, 해당 프로퍼티의 자료형에 맞는 메서드와 프로퍼티를 사용할 수 있다.   


이때 기존의 function del()을 통해 자료를 삭제한다. 특정값을 동적으로 받기 위해서는 값에 물음표를 추가한다.  
```ts
interface IWord {
  day?: string;
  eng?: string;
  kor?: string;
  isDone?: boolean;
  id: number;
}
```

그런데 이렇게 하면 입력할 때에도 일부 값을 누락시킬 수 있는 문제가 있다. 때문에 del값에서 id값은 변경하면서 나머지는 기존 word객체를 스프레드해서 복사하도록 함이 바람직하다.  
```ts
interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      }).then(res => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
```

- Day 컴포넌트 수정하기.  
Word.tsx에서 만든 IWord 인터페이스를 export하자.
```ts
export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}
```
Day.tsx에서 이 인터페이스를 사용할 수 있게 된다.
`import Word, { IWord } from "./Word";`
```
const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
```
한편 Params에서 받는 객체를 타입스크립트는 빈객체로 인식하고 있다. 명확하게 지정해주자.
`  const { day } = useParams();`  
`  const { day } = useParams<{ day: string }>();`  
꺽쇠`<>`는 제너릭이라 부르는데, 어떤 타입을 사용할지를 넘겨주는 요소이다.  

- DayList 수정하기
**인터페이스 만들기**
```ts
export interface IDay {
  id: number;
  day: number;
}
```
**days에 타입 추가하기**
`const days: IDay[] = useFetch("http://localhost:3001/days");`

- CreateWord 수정하기
**변수에 타입 추가**  
`  const days: IDay[] = useFetch("http://localhost:3001/days");`   

**이벤트에 타입 추가**  
`   function onSubmit(e: React.FormEvent)`...이런건 타입스크립트 커뮤니티에 찾아가면서 외워야함.. ㅎ  

**useRef 수정하기**   
POST의 body에 있는 useRef객체들은 현재 Current로 되어 있다. 이런 경우 값이 삭제될 우려가 있어 타입스크립트에서 경고문을 보여준다. 각 form의 각 타입에 맞게 HTML element 타입을 제너릭으로 입력해준다.  
```ts
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
```

**POST 수정하기**
Ref중 하나라도 없으면 POST를 실행하지 않도록 if 조건문을 수정한다. 
`    if (!isLoading && dayRef.current && engRef.current && korRef.current)`
이후 body로 넘기는 객체들을 상수로 먼저 입력받은 body 태그에서 사용하도록 식별자를 이용해 수정한다.
```ts
    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
        setIsLoading(true);
        const day = dayRef.current.value;
        const eng = engRef.current.value;
        const kor = korRef.current.value;
        fetch(`http://localhost:3001/words/`, {
            body: JSON.stringify({
                day,
                eng,
                kor,
                isDone: false,
            }),
        })
    }
```

- useFetch 수정하기 
useFetch는 jsx를 반환하지 않으니 확장자명을 ts로 수정한다.
타입스크립트를 적용할 부위는 아래 한 줄  
`export default function useFetch(url: string)`

- npm start 입력하기
바뀐 확장자 파일이름들은 npm start를 입력해 다시 시작하면 적용된다. 