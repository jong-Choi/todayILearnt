# 리액트 치트시트
리액트에 대한 내용을 간략하게 정리한 리드미 파일.  

코드들의 주요 출처는 아래와 같다.

[벨로퍼트와 함께하는 모던 자바스크립트](https://learnjs.vlpt.us/)  
[벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)  
[리액트를 다루는 기술](https://thebook.io/080203/) [깃허브](https://github.com/gilbutITbook/080203/)  
[PoiemaWeb](https://poiemaweb.com/)  

## DOM과 쿼리 셀렉터
바닐라 자바스크립트의  DOM과 쿼리 셀렉터  


### DOM Query
```js
document.getElementById(id)
document.getElementsByClassName(class)
document.getElementsByTagName(tagName)
```
DOM Query에서 GetElements를 하는 경우 HTMLCollection을 반환한다.
HTMLCollection은 live로 결과값을 반환한다. 때문에 반복문 등을 돌릴 때 유의해야 한다. (반복문을 아래에서부터 돌리는 등의 방법으로 우회한다.)


### CSS 셀렉터
```css
* : 모든 요소를 선택
태그명 : 해당 태그명으로 선택
태그명[어트리뷰트]: 해당 어트리뷰트를 갖는 태그.  
~=는 공백을 기준으로 단어를 포함 (h1[title~="first"]를 선택하면 'heading first'가 선택됨).  
 ^=의 경우 해당 단어로 시작하는 값을 선택 (a[href^="https://"]).   
 $=로 특정 값으로 끝나는 요소 선택 (a[href$=".html"]).   
 *=로 특정 요소를 포함한 값을 선택 (a[href*="naver.com"])

   
#id : id 1개
.class : 클래스명
셀렉터A 셀렉터B: A의 후손요소 (ul li)
셀렉터A > 셀렉터B : A의 자식요소 (div > p) 
셀렉터A + 셀렉터B : A의 인접형제 1개
셀렉터A ~ 셀렉터B : A이후의 모든 형제

   
selector:pseudo-class 가상 클래스 셀렉터
:link - 방문하지 않은 링크
:visited - 방문한 링크
:hover - 셀렉터에 마우스가 올라와 있을 때
:active - 셀렉터가 클릭된 상태일 때
:focus - 셀렉터에 포커스가 들어왔을 때
:checked
:enabled, :disabled 
:first-child, :last-child
:nth-child(n), :nth-last-child(n)
nth-child를 사용할 때에 :nth-child(2n)과 같이 사용하여 홀수, 짝수번째만 선택할 수 있다.(음수는 생략된다. 즉 2n-1은 1, 3, 5 순으로 진행된다.)
:first-of-type, :last-of-type, :nth-of-type(n), :nth-last-of-type(n)
:not(셀렉터) : input:not([type=password])
:valid(셀렉터), :invalid(셀렉터) : input태그에 pattern, required로 정합성 검증을 할 때에 사용

selector::pseudo-element 가상 요소 셀렉터
::first-letter
::first-line - 블록 요소 첫번째 줄
::after - 콘텐츠의 뒤
::before - 콘텐츠의 앞
::selection - 드래그한 콘텐츠
```

```js
document.querySelector(cssSelector)
document.querySelectorAll('li.red')
```
querySelectorAll은 NodeList(non-live)를 반환한다.

## Virtual DOM
실제 돔이 아니라 메모리에 존재하는 JavaScript 객체.  
리액트의 State가 업데이트되면 해당 가상 DOM 역시 리렌더링 된다.  
성능 뿐 아니라, 프로그래밍상으로도 코드를 통으로 갈아치우면 리액트에서 자동으로 변화된 부분을 비교하고 리렌더링하기 때문에 생산성이 향상된다.

## 리액트의 설치
yarn 설치 : `npm install --global yarn`
CRA : `npx create-react-app 폴더명` 혹은 `yarn create react-app 폴더명`
실행 : `npm start` 혹은 `yarn start`

Git Bash는 리눅스와 명령어 일치를 위해 사용된다. [Git for windows](https://gitforwindows.org/)에서 설치하고, VS Code의 설정에서 'Terminal > External: Windows Exec' 설정을 bash.exe로 바꿔준다. (`C:\Program Files\Git\bin\bash.exe`)

## 클래스형 컴포넌트 기초
### 클래스
자바스크립트는 컨스트럭터와 프로토타입을 기반으로 한다.
```js
function Person({name, age}) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function() {
  return `안녕하세요, 제 이름은 ${this.name}입니다.`;
};

const person = new Person({name: '윤아준', age: 19});
```

ES2015부터 클래스 문법이 추가되었다.
```js
class Person {
  // 이전에서 사용하던 생성자 함수는 클래스 안에 `constructor`라는 이름으로 정의합니다.
  constructor({name, age}) {
    this.name = name;
    this.age = age;
  }

  // 객체에서 메소드를 정의할 때 사용하던 문법을 그대로 사용하면, 메소드가 자동으로 `Person.prototype`에 저장됩니다.
  introduce() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}

const person = new Person({name: '윤아준', age: 19});
```

클래스는 기존 생성자 방식보다 엄격하다.
1. 함수가 아니며, 함수로 호출될 수 없다.
2. 클래스 선언문 이전에 참조할 수 없다.(let, const처럼 호이스팅은 되지만 접근이 불가능한 TDZ방식)
3. 부모 클래스를 상속받을 때에는 extends로 상속받고, 부모 클래스를 참조할 때에는 super(프로퍼티명)으로 참조한다. 이때 super키워드는 메서드 안에서도 사용될 수 있다.


### 클래스형 컴포넌트
클래스형 컴포넌트는
1. react에서 Component 클래스를 임포트한다.
2. 해당 클래스를 상속받아 클래스를 생성한다.
3. 클래스 내부에 render() 메서드를 만들어 JSX를 반환한다.
4. 인스턴스를 생성하지 않고도 사용할 수 있는 static 메서드와 프로퍼티를 지원한다. (클래스 호출만으로도 충분한 경우 static을 사용할 것)

```js
import React, { Component } from 'react';
 
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
 
export default App;
```


#### Props
클래스에서 프롭을 받을 때에는 아래와 같이 사용할 수 있다. (prop-types를 이용해 타입 지정 + static을 이용해 클래스 내부에서 기본값과 타입 지정)
```js
import React, { Component } from ‘react‘;
import PropTypes from ‘prop-types‘;


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

#### State
```js
import React, { Component } from ‘react‘;
 
class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0
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

[alternative class syntax](https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax)를 지원하는 현재의 리액트 버전에서는 아래와 같이 state 객체를 this에 바인딩하기에 constructor없이도 this.state를 초기화할 수도 있다.
(단 constructor(props)에 사용된 super(props)가 없어져서 this.props에 접근하지 못하는 점은 유의)

```js
import React, { Component } from ‘react‘;
 
class Counter extends Component {
  state = {
    number: 0
  };

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

#### 라이프 사이클 메서드
```js
static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.value != = prevState.value) { // 조건에 따라 특정 값 동기화
      return { value: nextProps.value };
    }
    return null; // state를 변경할 필요가 없다면 null을 반환
}
```
getDerivedStateFromProps()는 props값을 비교하여 state에 적용한다. 컴포넌트가 마운트, 업데이트 될 때 사용  

componentDidMount() { ... }는 첫 렌더링 이후 실행된다.  

shouldComponentUpdate(nextProps, nextState) { ... } props, state가 변경되었을 때에 업데이트 할 지를 판단한다. this.props, this.state가 현재의 props, state이다. true를 반환하면 업데이트 된다.

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevState.array != = this.state.array) {
    const { scrollTop, scrollHeight } = this.list
      return { scrollTop, scrollHeight };
    }
}
```
getSnapshotBeforeUpdate()는 render가 실행되기 전에(업데이트 되기 전에) 실행된다. 기존에 있던 스크롤 값을 새로운 렌더링에 반영하는 등에 사용된다.  

componentDidUpdate(prevProps, prevState, snapshot) { ... } 업데이트가 끝난 직후 실행된다. snapshot은 getSnapshotBeforeUpdate에서 반환된 값을 의미한다.  

componentWillUnmount() { ... }는 컴포넌트가 DOM에서 제거될 때 실행된다.  

```js
componentDidCatch(error, info) {
  this.setState({
      error: true
  });
  console.log({ error, info });
}
```
componentDidCatch()는 에러가 발생했을 때에 실행된다.  

### 함수형 컴포넌트
#### Hooks
##### useState(초기값) 
useState는 state값과 state를 수정하는 함수를 배열 형태로 반환한다. state의 초기값을 useState의 파라미터로 넘겨준다. `const [value, setValue] = useState(0);`

##### useEffect(콜백함수[, 의존자배열])
useEffect는 컴포넌트가 리렌더링(업데이트)될 때마다 특정 콜백함수를 실행시킨다. 
- 콜백 함수는 컴포넌트가 언마운트 혹은 리렌더링 되기 전에 실행할 cleanup함수를 반환할 수 있다. 
- 의존자 배열을 두번째 인자로 두어 특정 state가 변화할 때에만 리렌더링 되도록 할 수 있다. (클래스의 라이프사이클 메서드를 대체)
```js
useEffect(() => {
    console.log('의존자 배열이 비어 있으면 컴포넌트가 최초로 마운드 될 때에만 실행됩니다.');
    return () => {
        colsole.log('컴포넌트가 언마운트됩니다.')
    }
  }, []);

useEffect(() => {
    console.log('이름이 변경되었습니다.', name);
  }, [name]);
```

##### useReducer(리듀서함수(state, action), state객체초기값)
useReducer(리듀서 함수, state객체초기값)은 [state, dispatch]을 반환한다.  
- dispatch는 리듀서 함수를 호출하여 리듀서 함수의 반환값에 맞게 상태를 변경한다.
- 리듀서 함수는 action을 인자로 받아 변경될 state 값을 반환한다.
- action과 state는 객체의 형태로 주고 받는다.

아래의 예시는 `{ value: 0 }`을 갖는 state에 대해 `{ type: 'INCREMENT' | 'DECREMENT' }` 형태의 action을 dispatch하는 리듀서의 예시이다. 

dispatch(액션{타입}) 실행 => 리듀서 함수 호출   
=> reducer(actions에 따라 switch~case문을 실행하고 객체를 반환)   
=> 반환된 객체에 맞게 state 수정  

```js
import React, { useReducer } from ‘react‘;

const Counter = () => {

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case ‘INCREMENT‘:
      return { value: state.value + 1 };
    case ‘DECREMENT‘:
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: ‘INCREMENT‘ })}>+1</button>
      <button onClick={() => dispatch({ type: ‘DECREMENT‘ })}>-1</button>
    </div>
  );
};

export default Counter;
```

useReducer를 useState대신 사용하면 state를 객체의 형태로 관리할 수 있다.
```js
function reducer(state, action) {
  return {
    …state,
    [action.name]: action.value
  };
}
```
event.target을 action객체로 받는다.
이후 state 객체에서 `[action.name]` 프로퍼티를 오버라이딩 하여 반환한다.

```js
import React, { useReducer } from ‘react‘;


function reducer(state, action) {
  return {
    …state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: “,
    nickname: “
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

##### useMemo(콜백함수, 의존자배열)
컴포넌트가 리렌더링되는 과정에서 컴포넌트 내부의 함수들이 지속적으로 호출되고 연산된다.  

useMemo(콜백함수, 의존자배열)은 의존자 배열이 그대로인 경우 콜백함수를 호출하지 않도 memoization된 값을 사용한다.

##### useCallback(콜백함수, 의존자배열)
컴포넌트가 리렌더링 되는 과정에서 컴포넌트 내부의 함수 선언문들이 실행되며 새로운 함수가 생성된다.  
이로 인한 성능 저하를 명확히 수치화할 수는 없으나, 예기치 못한 성능 저하를 막기 위해 관습적으로 useCallback을 이용하여 함수를 메모이제이션 한다.

```js
const [list, setList] = useState([]);
const [number, setNumber] = useState('');

// useCallback의 의존자 배열을 비워두면 최초 마운트시 생성된 함수를 계속 이용한다.
const onChangeHandler = useCallback((e) => {
    setNumber(e.target.value);
}, []);

// 그 외의 경우 콜백 함수 내에서 사용되는 변수들이 변경될 때에 새로운 함수를 생성하도록 의존자 배열을 선언한다.
const onSubmitHandler = useCallback(()=> {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber('');
}, [number, list])

// useMemo를 사용하여 숫자 리스트가 그대로인 경우 새로운 평균값을 구하지 않도록 최적화 하였다.
const avg = useMemo(()=> {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}, [list])
```

##### React.memo() 
React.memo() 함수는 해당 컴포넌트의 props가 변경되는 경우에만 함수형 컴포넌트를 호출하여 리렌더링하는 함수이다.
해당 [예시](https://www.daleseo.com/react-hooks-use-callback/)를 보자.

```js
import React, { useState, useCallback } from "react";

function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "💡" : "⬛"}
    </button>
  );
}

Light = React.memo(Light);
```
Light 컴포넌트를 React.memo() 함수로 감쌌다.

```js
export default function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = () => setMasterOn(!masterOn);
  const toggleKitchen = () => setKitchenOn(!kitchenOn);
  const toggleBath = () => setBathOn(!bathOn);

  return (
    <div className="App">
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  );
}
```
이후 위와 같이 침실, 주방, 욕실로 나누어 on에 각각의 state를 props로 넘겨주었다.    
  
헌데 위의 코드는 리렌더링마다 3번의 Light 컴포넌트가 호출된다. 3개의 toggle 함수가 모두 재생성되고, 이로 인해 Props의 변경이 탐지되기 때문이다. useCallback을 이용하여 toggle함수의 재생성을 막을 수 있다.    

```js
export default function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [
    kitchenOn
  ]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);


  return (
    <div className="App">
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  );
}
```

##### useRef()
리액트에서 DOM을 직접 조작할 때에는 DOM 요소에 ref라는 어트리뷰트를 준다.

useRef()는 ref로 사용될 변수명을 생성할 대 사용한다. 한편 useRef()가 전역 저장소에 저장됨을 이용하여 전역 객체로서 임시로 사용할 수 있다.  

1. 객체 지정하기
`const 변수명 = useRef()`
`<input ref={변수명}>`
해당 변수명을 함수 내에서 사용하면 element를 반환한다.

`const onClick = () => 변수명.current.focus();`

2. 전역 변수 관리
state와는 다르게 전역에서 관리되기에 컴포넌트를 리렌더링해도 유지되는 특징이 있다.
초급 예시에서는 Todo리스트에서 id값을 1씩 increment하기 위해 사용된다.

```js
const nextId = useRef(1)

const onAddTodo = () => {
    ...
    nextId.current += 1;
}
```

Flux 패턴을 사용하는 상태관리 툴을 이용하는 것이 권장된다.  

##### 커스텀 훅 만들기
함수를 반환하는 js파일을 import하여 훅처럼 사용할 수 있다.

```js
// useInputs.js
import { useReducer } from ‘react‘;
 
function reducer(state, action) {
  return {
    …state,
    [action.name]: action.value
  };
}
 
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

```js
//form.js
import React from 'react';
import useInputs from './useInputs';
 
const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
...
}
```

위의 커스텀 훅은 state의 초기값을 인수로 받아 state와 onChange 함수를 반환한다.  

### SCSS
Sass는 자식 요소를 들여쓰기로 구분하는 문법을 지원한다. 이를 통해 구조화한 표기가 가능하다.
SCSS는 중괄호가 없는 Sass에서 CSS의 방식으로 중괄호를 추가한 방식이다. Sass와 마찬가지로 CSS로 컴파일 된다.

Sass는 다음의 기능을 지원한다.
1. Nesting
자식 요소를 선택할 때에는 2 인덴트를 준다.
가상 클래스 선택자나 가상 요소 선택할 때에는 부모 요소를 &으로 지정한다.
```scss
#navbar {
  width: 80%;
  height: 23px;

  &:hover {
    text-decoration: underline;
  }

  // .myAnchor:visited
  &:visited {
    color: purple;
  }

  ul {
    list-style-type: none;
  }

  li {
    float: left;
    a {
      font-weight: bold;
    }
  }
}
```

프로퍼티에도 nesting을 사용할 수 있다.

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```
```css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold;
}
```

그 밖에 아래와 같은 기능들을 지원한다
```
변수의 사용
조건문과 반복문
Import
Mixin
Extend/Inheritance
```

### styled-components
CSS in js를 이용하여 컴포넌트를 스타일링 할 수 있다.
`yarn add styled-components`

1. `styled.태그명`을 뒤에 템플릿 리터럴을 이용하여 스타일을 씌워준다.
2. 조건부로 css를 추가하기 위해서는 styled-components의 css를 import하여 `return css` 후 템플릿 리터럴을 반환한다.
3. ``yarn add polished`를 이용하여 Sass와 같은 유틸 함수를 사용할 수 있다. polished는 유틸 함수를 가지고 있는 styled-components의 라이브러리이다.

```js
import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${props => {
    const selected = props.theme.palette.blue;
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
```

### 자바스크립트의 비동기 처리

#### 콜백
1. 콜백 : 다른 함수에 인수로 넘겨주는 함수. 호출(call back)되어 실행(execute)될 목적으로 인수로 넘기는 함수이다.
2. setTimeout(콜백함수, 지연시간ms) : 특정시간 이후 콜백함수를 실행한다. clearTimeout(함수명)을 통해 스케줄링을 취소할 수 있다.

setTimeout을 통해 이전 함수의 처리 결과를 기다린 후, callback을 실행시키는 방식으로 비동기 처리를 구현할 수 있다.

#### Promise
Promise 객체란 완료가 예정된 작업의 실행 결과를 의미하는 대리자이다. ES6에서 채택되었다.  
Promise의 콜백 함수(executor)는 기본적으로 resolve(), reject() 메서드를 가지며, 둘 중 하나를 반드시 반환해야 한다. 

new Promise(콜백) - 대기(pending) 상태를 갖는다. 결과값은 undefined이다.  
resolve(value) - 콜백(executor)이 성공적으로 이행(fulfilled)된 상태이다. 결과값으로 value를 반환한다.  
rejected(error) - 콜백(executor)이 특정한 사유로 불이행(error)된 상태이다. Error 객체를 반환한다.  

콜백만을 이용해 비동기 처리를 하면 아래와 같다.  
```js
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});
```

Promise 객체를 이용해 비동기 처리를 하면 아래와 같다.
```js
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(n => {
    return increaseAndPrint(n);
  })
  .then(n => {
    return increaseAndPrint(n);
  })
  .then(n => {
    return increaseAndPrint(n);
  })
  .then(n => {
    return increaseAndPrint(n);
  })
  .then(n => {
    return increaseAndPrint(n);
  })
  .finally(()=> {
      console.log('끝!')
  })
  .catch(e => {
    console.error(e);
  });
```
Promise 객체의 resolve(value) 메서드의 반환값을 .then 인스턴스 메서드를 통해 n으로 이어 받으며 코드의 가독성이 좋아졌다.  
또한 .catch 인스턴스 메서드를 통해 에러 발생에도 대처할 수 있게 되었다. 추가적으로 .finally 인스턴스 메서드는 결과에 관계없이 프라미스가 처리되면 실행되며, 인수를 받지 않는다.


#### async/await
ES8(2017)에 추가된 문법이다.

1. await 키워드는 프라미스가 끝날 때까지 기다린 후 다음 작업을 수행한다.
2. await는 async 키워드가 붙은 함수 안에서만 사용할 수 있다.
3. 에러는 try - catch 구문으로 받을 수 있다.
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
```


4. Promise의 정적 메서드 .all을 통해 동시에 실행할 Promise들을 등록하거나, .race를 통해 등록한 Promise들 중 가장 빨리 끝난 값 만을 가져올 수도 있다.
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

async function processAll() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
}

async function processRace() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first);
}

process(); // dog \r rabbit \r turtle
processAll(); // rabbit \r dog \r turtle
processRace(); // rabbit
```

### axios

#### axios 설치하기 
`npm install axios --save`
혹은
`yarn add axios`

#### axios의 메서드
`axios.get(url[, config])` - config는 설정을 의미한다.   
`axios.post(url[, data, config])`  
`axios.put(url,data[, config])`  
`axios.patch(url, data[, config])`
`axios.delete(url[, config])`  

#### axios의 비동기 처리
aioxs는 promise를 반환한다. 이를 이용해 아래와 같이 비동기적으로 처리한다.  


```js
import axios from 'axios'

axios.get('https://api.example.com/users/1/memos')
  .then(response => {
    alert('요청이 성공하였습니다.');
  })
  .catch(error => {
    alert('요청이 실패하였습니다.');
  })
  .then(response => {
    alert('성공과 실패에 관계없이 항상 실행됩니다.')
  })
```

```js
//ECMA 2017 async/await
async function getUserMemo() {
  try{
    const response = await axios.get('https://api.example.com/user/1/memos');
    alert('요청이 성공하였습니다.');
  }
  catch (error) {
    alert('요청이 실패하였습니다.');
  }
  finally {
    alert('성공과 실패에 관계없이 항상 실행됩니다.');
  }
}
```

#### axios의 설정 추가
config에 axios에 설정을 추가한다.
다양한 config 옵션들은 [이 주소](https://axios-http.com/kr/docs/req_config)를 참조하자.

```js
import axios from 'axios';

// 1. defaults 설정을 사용하면 고정된 값들을 손쉽게 사용할 수 있다.
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['X-Example-Key'] = 'example';
axios.defaults.headers.post['Content-Type'] = 'application/json'l

// 2. 서버에 따라 여러개의 모듈을 생성해야 할 때에는 create메서드를 이용해서 새로운 객체를 만들어 사용할 수 있다. 새로 만들어진 Axios 객체도 임포트된 모듈과 같은 역할을 한다.
import axios from 'axios';

const AuthAPI = axios.create({
  baseURL : 'https://api.auth.com',
});

const UserAPI = axios.create({
  baseURL: 'https://api.users.com',
});

// 3. 메서드에 따라서 엑시오스에 추가적인 옵션을 주입하는 방식이다.
import axios from 'axios';

axios.post('/user/1/memos', {
  title: '메모 제목',
  content: '메모의 내용입니다.',
}, {
  headers: {'Content-Type': 'application/json'},
})
```

#### axios 응답 예시 
Axios의 응답은 아래와 같은 구조를 가지고 있다.

```js
{
  data: {},
  status: 200,
  statueText: 'OK',
  config: {}, //서버로 요청을 보냈을 때 어떤 설정을 가지고 있었는지를 의미
  request: {},
}
```
위 객체가 resolve로써 반환된다.  

요청이 실패했을 경우에는 아래와 같은 Promise.reject 객체를 반환한다.  
```js
//서버에서 실패를 반환한 경우 error.response 속성은 아래와 같이 반환한다.
{
  data: {},
  status:   ,
  statusText: ' '
}
```

아래는 try-catch로 resolve, reject 객체를 받는 예시이다. 
```js
//서버의 응답이 없는 경우 error.response 속성이 없다. 따라서 error.request를 받아야 한다.
axios.get('/user/1/memos')
  .then(respone => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.config);
    console.log(response.request);
  })
  .catch(error => {
    if (error.response) {
      //요청을 보냈으나 서버에서 실패로 응답한 경우
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.statusText);
    }
    else if (error.request) {
      //요청은 보냈으나 서버 응답이 없어 에러가 발생한 경우, 리스폰스가 없다.
      console.log(error.request);
    }
    else {
      // 이유 없이 에러가 발생한 경우도 핸들링해야 한다.
      console.log('Error', error.message);
    }
  });
```

#### api.js 파일 만들기 예시

[넷플릭스 클론 코딩](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8/)에 사용된 방법이다.

1. @/api 폴더를 생성한다.
2. ./axios.js 파일을 생성한다.
```js
import axios from "axios";

// 같은 요청을 여러번 반복하기 위해 baseURL, Prams, Fetch(requests.js)를 나누어 저장

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
```
위에서 `.env`파일을 최상위 폴더에 생성하였으며, REACT_APP_MOVIE_DB_API_KEY라는 식별자로 지정된 문자열을 process.env로 불러오는 모습이다.

3. 그 밖에 주로 사용되는 url 패턴을 ./request.js 파일에 저장한다.
```js
//https://developers.themoviedb.org/
const requests = {
  fetchNowPlaying: "movie/now_playing",
  fetchNetflixOriginals: "/discover/tv?with_networks=213",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies: "/discover/movie?with_genres=28",
  fetchComedyMovies: "/discover/movie?with_genres=35",
  fetchHorrorMovies: "/discover/movie?with_genres=27",
  fetchRomanceMovies: "/discover/movie?with_genres=10749",
  fetchDocumentaries: "/discover/movie?with_genres=99",
};

export default requests;
```

4. 실제 사용시 아래와 같이 적용한다.
```js
import axios from "../api/axios.js";
import requests from "../api/requests";
import React, { useEffect, useState } from "react";

function Row() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  });

  const fetchMovieData = async () => {
    const request = await axios.get(requests.fetchTrending);
    setMovies(request.data.results);
  };
}

export default Row;
```
@/api/axios.js 파일의 axios를 불러와 
@/api/requests 파일의 requests.fetchTrending url과 결합하는 모습니다. axios파일에서 baseURL과 params 등을 미리 지정해두었기에 간편하게 사용이 가능하다.

5. axios.js가 아닌 index.js 파일을 사용하여 아래와 같이 삽입할 수도 있다.
```js
import api from "@/api";
```

6. 객체 형태로 export하여 구조 분해 할당으로 여러 api를 구분하여 받을수도 있다.
```js
const TMDBapi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: tmdb_api_key,
    language: "ko-KR",
  },
});

const WEATHERapi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const instance = { TMDBapi, WEATHERapi };

export { TMDBapi, WEATHERapi }
export default instance;
```
```js
import { TMDBapi } from "@/api";
```

모듈의 export와 import에 대해서는 [다음](https://ko.javascript.info/import-export)을 참조하자.

### context API를 활용한 전역상태관리
#### 상태 패턴 (State Pattern)
디자인 패턴 중 상태 패턴은 Context 클래스에서 인터페이스를 제공하여 State로 캡슐화하는 것을 의미한다.
[참조](https://has3ong.github.io/programming/designpattern-state/)

리액트에서의 Context는 전역적(global)으로 데이터를 공유하기 위해 사용되도록 디자인되었다. 즉 데이터 간의 간격과 컴포넌트 트리의 계층이 없이 데이터를 공유할 수 있다. 16.3버전부터 추가되었다.

#### Context API
context 안에 `{color: 'black'}`이라는 값을 넣어 해당 값을 전역적으로 사용하는 예제이다.
1. createContext
@/contexts/color.js 라는 새로운 컨텍스트 파일을 만들자.
```js
import { createContext } from 'react';

const ColorContext = createContext({color: 'black'})

export default ColorContext;
```

2. CONTEXT.Consumer
해당 콘텍스트는 컴포넌트의 형태로 다른 컴포넌트에서 사용된다.
이때 Function as a child 혹은 Render Props라 불리는 패턴으로 컴포넌트 안에 value를 갖는 함수가 사용된다.
@/components/ColorBox.js
```js
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color //color: 'black'
          }}
        />
      )}
    </ColorContext.Consumer>
  )
}
```

3. CONTEXT.Provider
상위 컴포넌트에서 context를 수정할 수 있다. 이때 value 프로퍼티를 필수로 가지고 있어야 한다.

@/App.js
```js
import ColorBox from './components/ColorBox';
import ColorContext from './comtexts/color';

const App = () => {
  return (
    <ColorContext.Provider value={{ color : 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  )
}

export default App;
```

##### 동적 컨텍스트 사용하기
Context는 함수 등 다양한 값을 지니고 있을 수 있다.  
아래는 조금 더 복잡한 예시이다.

@/contexts/color.js 
```js
import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer과 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
```

@/App.js
```js
import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
```

##### useContext Hook
ColorContext 모듈의 state를 구조분해 할당으로 가져온 예시이다.
```js
import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor
        }}
      />
    </>
  );
};

export default ColorBox;
```

##### Class의 contextType 프로퍼티 사용하기
클래스형 컴포넌트 컴포넌트명.contextType을 통하여 this.context에 createContext()로 생성된 컨텍스트를 바인딩할 수 있다.    

이 경우 하나의 context만 바인딩 됨에 유의하자.  
(여러 컨텍스트를 사용하는 경우 CONTEXT.Provider를 통해 프로퍼티를 넘겨주어야 한다.)  

Babel을 통해서 Static 클래스 필드를 사용하면 아래와 같이 정의할 수 있다.  

```js
import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
```

### 리덕스






