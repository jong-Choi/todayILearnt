# 코딩앙마 REACT JS 강좌
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
Element의 변수값을 교체해주긴 하지만, 컴포넌트의 라이프 사이클의 원리를 이용하진 않아 리렌더링 되지 않는다.  

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
```js
export default function Word(props) {
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
            <input type="checkbox" checked={isDone} />
        </td>
```


```js
export default function Word(props) {
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
            <input type="checkbox" checked={isDone} />
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
  
json서버는 빠르고 쉽게 서버를 구축하기 때문에 작은 프로젝트에서 사용하기 좋은 백엔드 툴이다.  
  
`npm install -g json-server`  

새로운 포트로 data.json을 열러 서버로 만들어보자.
`json-server --watch ./src/db/data.json --port 3001`

Json Server를 열기 위해서는 관리자 권한으로 실행해야 한다. 
powershell을 열고 `executionpolicy` 를 입력, `set-executionpolicy unrestricted`로 변경한다.  
혹은 git bash를 사용하면 적용된다.  


## 12 useEffect, fecth()로 API 호출
