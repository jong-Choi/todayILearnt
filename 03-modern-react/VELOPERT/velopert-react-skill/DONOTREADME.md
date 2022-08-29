# 리액트를 다루는 기술

무료 보기 : (https://thebook.io/080203)

## 1 개발환경 설정

1. ESLint
2. Reactjs Code Snippets (xabikos.ReactSnippets)
3. Prettier-Code formatte

### Yarn

| 명령어             | npm                                 | yarn                          |
| ------------------ | ----------------------------------- | ----------------------------- |
| dependencies 설치  | npm install                         | yarn                          |
| 패키지 설치        | npm install [패키지명]              | yarn add [패키지명]           |
| dev 패키지 설치    | npm install --save-dev [패키지명]   | yarn add --dev [패키지명]     |
| 글로벌 패키지 설치 | npm install --global [패키지명]     | yarn global add [패키지명]    |
| 패키지 제거        | npm uninstall [패키지명]            | yarn remove [패키지명]        |
| dev 패키지 제거    | npm uninstall --save-dev [패키지명] | yarn remove [패키지명]        |
| 글로벌 패키지 제거 | npm uninstall --global [패키지명]   | yarn global remove [패키지명] |
| 업데이트           | npm update                          | yarn upgrade                  |
| 패키지 업데이트    | npm update [패키지명]               | yarn upgrade [패키지명        |

`$ yarn create react-app <프로젝트명>`
`$ npm init react-app <프로젝트 이름>`

## 2 JSX

- Webpack과 번들러  
  `import React from 'react';`

- 감싸인 요소와 Fragment

```js
function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
  );
}
```

```js
function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

- 자바스크립트 표현

```js
function App() {
  const name = ‘리액트‘;
  return (
    <div>
      {name === ‘리액트‘ ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}
```

- 삼항연산자를 사용한 조건부 렌더링  
  `return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;`
- and(&&)를 사용한 조건부 렌더링  
  `return <div>{name === ‘리액트‘ && <h1>리액트입니다.</h1>}</div>;`

      한줄로 이루어진 return은 괄호를 생략하여 표기하기도 한다.
      null, undefined 등의 falsy한 값은 렌더링되지 않는다. 0은 렌더링 된다.

- undefined를 렌더링하면 아래는 오류를 내뱉는다.

```js
const name = undefined;
return name;
```

- undefined를 JSX로 넘기는 것은 가능하다.

```js
const name = undefined;
return <div>{name}</div>;
```

- falsy한 값에 or(||) 연산자로 기본값을 줄 수 있다.

```js
function App() {
const name = undefined;
return name || ‘값이 undefined입니다.‘;
}
```

```js
function App() {
  const name = undefined;
  return <div>{name || ‘리액트‘}</div>;
}
```

- 스타일은 camelCase로 작성한다.

```js
function App() {
  const name = ‘리액트‘;
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: ‘black‘,
    color: ‘aqua‘,
    fontSize: ‘48px‘, // font-size -> fontSize
    fontWeight: ‘bold‘, // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
  };
  return <div style={style}>{name} </div>;
}
```

- 인라인 스타일에 객체를 넘겨줄 수도 있다.

```js
function App() {
  const name = '리액트';
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px', // font-size -> fontSize
        fontWeight: 'bold', // font-weight -> fontWeight
        padding: 16, // 단위를 생략하면 px로 지정됩니다.
      }}
    >
      {name}
    </div>
  );
}
```

- class 대신 className  
  class는 자바스크립트의 예약어이므로 className을 사용한다.  
  `return <div className="react">{name}</div>;`

- 태그는 항상 닫아야하며, <self-closing / >이 가능하다.
  `<input></input>` `<input/>` ` <br/>``<SomeComponent/> `

- 주석은 `{/*주석*/}`, 요소 안의 주석은 `//주석`, 텍스트로는 주석 불가

```js
   return (
    <>
      {/* 주석은 이렇게 작성합니다. /}
      <div
        className=“react“ // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
       ></div>
    </>
)
```

- ESLint : 빨간색은 오류, 초록색은 권고  
  `VSCode - 보기 - 문제` 탭에서 에러 확인 가능
- Prettier  
  프로젝트의 루트 디렉토리에 `.prettierrc` 파일 생성하여 아래와 같이 기본 설정

```js
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2
}
```

F1 입력후 `Format` 입력하여 코드 정리  
혹은 `VSCode - 기본 설정 - 설정 - Editor: Format On Save` 설정 가능

How I've sorted it after having super huge frustrations with Prettier stopping working in VSCode.

Select `VS Code` -> `View` -> `Command Palette`, and type: `Format Document With`
Then `Configure Default Formatter...` and then choose `Prettier - Code formatter`.

Not sure where to find Configure Default Formatter but I used File->Settings->Text Editor->Default Formatter –

## 3 컴포넌트

### 클래스형 컴포넌트

```js
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
```

클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 합니다.

### REACT Code Snippets

| Trigger | Content                                              |
| ------- | ---------------------------------------------------- |
| rcc     | 클래스 컴포넌트 생성                                 |
| rrc     | 클래스 컴포넌트와 react-redux 리덕스를 연결하여 생성 |
| rcjc    | import와 export 없이 클래스 컴포넌트 생성            |
| rwwd    | import 없이 클래스 컴포넌트 생성                     |
| rsc     | 화살표 함수형 컴포넌트 생성                          |
| rsf     | 함수형 컴포넌트 생성                                 |

### props

컴포넌트 속성을 설정할 때 사용하는 요소입니다.  
부모 요소에서 `<컴포넌트 프롭명="값" />`과 같이 어트리뷰트 처럼 사용한다.

컴포넌트에서 프롭 설정하기

```js
const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
```

App.js에서 프롭에 값 주기

```js
const App = () => {
  return <MyComponent name="React" />;
};
```

`안녕하세요, 제 이름은 React입니다.`

#### 컴포넌트.defaultProps={}

```js
const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: '기본 이름',
};
```

#### props.children

```js
const App = () => {
  return <MyComponent>응애 나 애기<MyComponent/>;
};
```

응애 나 애기는 출력이 안된다. 이 값은 컴포넌트의 children으로 존재한다.

```js
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};
```

#### 비구조화 할당으로 Props 할당받기

```js
const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};
```

#### 컴포넌트.propTypes={} 로 타입지정하기

```js
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
```

타입에 맞지 않은 Props.value가 전달되면 console창에 경고를 띄워준다.  
isRequired는 필수로 입력되어야 하는 값을 의미한다.

https://github.com/facebook/prop-types

### 클래스형 컴포넌트에서는 render(){} 의 형식으로 반환값을 설정함.

props는 this.props로 받음

```js
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default MyComponent;
```

아래는 기존 함수형 컴포넌트. 매개변수에 비구조화 할당 문법을 넣어서 props값을 받음.

```js
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

export default MyComponent;
```

클래스 문법에서 정적 메서드로 defaultProps와 propTypes를 추가할 수 있음.

```js
class MyComponent extends Component {
  static defaultProps = {
    name: ‘기본 이름‘
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (…);
  }
}
```

#### constructor와 this.state로 초깃값 설정하기

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

컨스트럭터를 사용하지 않고 초기값을 사용할 수 있다.

```js
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (...);
  }
}

export default Counter;
```

#### setState로 값 변경하기

setState는 한 이벤트 당 한 번 state값을 변경한다. 때문에 이벤트 한 번에 여러번 호출해도 한 번만 적용된다.  
기존 상태를 인자로 넘겨주면 state값을 여러번 변경할 수 있다. (props 인자는 생략 가능)

```js
this.setState((prevState, props) => {
  return {
    // 업데이트하고 싶은 내용
  };
});
```

```js
<button
  // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
  onClick={() => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });
    // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
    // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  }}
>
  +1
</button>
```

return값이 한 줄일 때에는 retrun을 생략하여 객체를 그대로 반환할 수 있다.

#### setState로 종료 시의 작업 설정하기

```js
<button
  // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
  onClick={() => {
    this.setState(
      {
        number: number + 1
      },
      () => {
        console.log(‘방금 setState가 호출되었습니다.’);
        console.log(this.state);
      }
    );
  }}
>
  +1
</button>
```

setState에 두번째 인자로 콜백함수를 주면 해당 함수는 변경이 끝났을 때 실행된다.

### 함수형 컴포넌트와 useState

```js
const Say = () => {
  const [message, setMessage] = useState(“);
  const onClickEnter = () => setMessage(‘안녕하세요!’);
  const onClickLeave = () => setMessage(‘안녕히 가세요!’);



const [color, setColor] = useState(‘black‘);

return (...)
};

export default Say;
```

#### 객체의 사본으로 state값을 변경하기

state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 합니다.

사본을 만들어 값을 다루기

```js
// 객체 다루기
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기

// 배열 다루기
const array = [
{ id: 1, value: true },
{ id: 2, value: true },
{ id: 3, value: false }
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter(item => item.id != = 2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정
```

## 4 이벤트 핸들링

### 이벤트를 사용할 때 주의사항

- 이벤트 이름은 카멜 표기법으로 작성합니다  
  onkeyup은 onKeyUp으로 작성합니다.
- 이벤트에 함수 형태의 값을 전달합니다
- DOM 요소에만 이벤트를 설정할 수 있습니다  
  컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다. 그냥 이름이 onClick인 props를 MyComponent에게 전달해 줄 뿐입니다. 하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있죠.

`<div onClick={this.props.onClick}>`  
(https://facebook.github.io/react/docs/events.html)

```js
class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
```

https://thebook.io/080203/ch04/02/02/02/
