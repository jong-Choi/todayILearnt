- [벨로퍼트와 함께하는 모던 자바스크립트](#--------------------)
  - [강의 소개](#-----)
  - [강의 대상](#-----)
  - [튜토리얼을 진행하기전에 필요한 것](#------------------)
  - [01. Hello JavaScript!](#01-hello-javascript-)
  - [02. 변수와 상수](#02-------)
    - [변수](#--)
    - [상수](#--)
    - [이제는 더 이상 사용하지마세요, var](#------------------var)
    - [데이터 타입](#------)
      - [숫자 (Number)](#----number-)
      - [문자열 (String)](#-----string-)
      - [참/거짓 (Boolean)](#------boolean-)
      - [null 과 undefined](#null---undefined)
  - [03. 연산자](#03----)
    - [산술 연산자](#------)
    - [대입 연산자](#------)
    - [논리 연산자](#------)
      - [NOT](#not)
      - [AND](#and)
      - [OR](#or)
      - [연산 순서](#-----)
    - [비교 연산자](#------)
      - [두 값이 일치하는지 확인](#-------------)
      - [두 값이 일치하지 않는지 확인](#----------------)
      - [크고 작음](#-----)
    - [문자열 붙이기](#-------)
  - [04. 조건문](#04----)
    - [if 문](#if--)
    - [if-else 문](#if-else--)
    - [if-else if 문](#if-else-if--)
    - [switch/case 문](#switch-case--)
  - [05. 함수](#05---)
    - [연습](#--)
      - [Hello, name!](#hello--name-)
      - [점수를 성적등급으로 변환하기](#---------------)
    - [화살표 함수](#------)
  - [06. 객체](#06---)
    - [함수에서 객체를 파라미터로 받기](#-----------------)
    - [객체 비구조화 할당](#----------)
    - [객체 안에 함수 넣기](#-----------)
  - [Getter 함수와 Setter 함수](#getter-----setter---)
  - [07. 배열](#07---)
    - [배열에 새 항목 추가하기](#-------------)
    - [배열의 크기 알아내기](#-----------)
  - [08. 반복문](#08----)
    - [for](#for)
      - [배열과 for](#----for)
    - [while](#while)
    - [for...of](#forof)
    - [객체를 위한 반복문 for...in](#-----------forin)
    - [break 와 continue](#break---continue)
    - [연습](#---1)
    - [퀴즈](#--)
  - [09. 배열 내장함수](#09--------)
    - [forEach](#foreach)
    - [map](#map)
    - [indexOf](#indexof)
    - [findIndex](#findindex)
    - [find](#find)
    - [filter](#filter)
    - [splice](#splice)
    - [slice](#slice)
    - [shift 와 pop](#shift---pop)
    - [unshift](#unshift)
    - [concat](#concat)
    - [join](#join)
    - [reduce](#reduce)
    - [퀴즈](#---1)
  - [10. 프로토타입과 클래스](#10-----------)
    - [객체 생성자](#------)
    - [프로토타입](#-----)
    - [객체 생성자 상속받기](#-----------)
    - [클래스](#---)
    - [연습](#---2)
- [알고있으면 유용한 자바스크립트 문법](#-------------------)
  - [01. 삼항 연산자](#01-------)
  - [02. Truthy and Falsy](#02-truthy-and-falsy)
  - [03. 단축 평가 (short-circuit evaluation) 논리 계산법](#03--------short-circuit-evaluation--------)
    - [&& 연산자로 코드 단축시키기](#----------------)
    - [|| 연산자로 코드 단축시키기](#----------------)
  - [04. 함수의 기본 파라미터](#04------------)
  - [05. 조건문 더 스마트하게 쓰기](#05---------------)
    - [특정 값이 여러 값중 하나인지 확인해야 할 때](#-------------------------)
    - [값에 따라 다른 결과물을 반환 해야 할 때](#-----------------------)
  - [06. 비구조화 할당 (구조분해) 문법](#06------------------)
    - [비구조화 할당시 기본값 설정](#---------------)
    - [비구조화 할당시 이름 바꾸기](#---------------)
    - [배열 비구조화 할당](#----------)
    - [깊은 값 비구조화 할당](#------------)
  - [07. spread 와 rest](#07-spread---rest)
    - [spread](#spread)
    - [rest](#rest)
      - [객체에서의 rest](#------rest)
      - [배열에서의 rest](#------rest)
      - [함수 파라미터에서의 rest](#-----------rest)
    - [함수 인자와 spread](#-------spread)
    - [퀴즈](#---2)
  - [08. 자바스크립트의 Scope 에 대한 이해](#08---------scope--------)
    - [예시를 통한 Scope 이해](#-------scope---)
    - [Hoisting 이해하기](#hoisting-----)
- [3장. 자바스크립트에서 비동기 처리 다루기](#3---------------------)
  - [01. Promise](#01-promise)
    - [Promise 만들기](#promise----)
  - [02. async/await](#02-async-await)
- [4장. HTML 과 JavaScript 연동하기](#4--html---javascript-----)
  - [01. 카운터](#01----)
    - [UI 만들기](#ui----)
    - [DOM 선택하기](#dom-----)
    - [이벤트 설정하기](#--------)
  - [02. 모달 만들기](#02-------)
    - [display 스타일을 사용하여 모달 열고 닫기](#display-------------------)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# 벨로퍼트와 함께하는 모던 자바스크립트

> 본 강의 자료는 [패스트캠퍼스 온라인 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 제공하는 JavaScript 강의에서 사용되는 강의 문서입니다.

## 강의 소개

이 강의에서 뜻하는 "모던 자바스크립트"는, 2019년에 사용하기에 걸맞는 그리고 또 뒤쳐지지 않는, 그런 자바스크립트를 칭합니다. 이 강의에서는 자바스크립트 기초부터 시작해서 실무에서 필요한 핵심 지식들까지 다뤄보게 됩니다.

## 강의 대상

이 강의는 프로그래밍을 한번도 해본적 없는 사람이 들어도 도움이 될 수 있으며, 자바스크립트 기초를 이미 배우신 분들도 도움이 될 수 있습니다. 특히 React, Angular, Vue 등의 웹 프레임워크 및 라이브러리를 공부하기 전에 이 튜토리얼을 통하여 자바스크립트를 한번 공부하고 나면 큰 도움이 될 수 있습니다. 그리고, Node.js 를 통하여 백엔드 개발을 하기 전에도 도움이 될 수 있습니다.

> 자바스크립트를 이미 아신다면 강의 초반부는 살짝 지루 할 수도 있습니다. 알고 있는 내용은 스킵을 하면서 보셔도 무방합니다 :)

## 튜토리얼을 진행하기전에 필요한 것

튜토리얼을 진행하기전에 꼭 필요한 것은 바로, 개발 공부에 대한 관심입니다. 그리고, 왜 개발을 배워야 하는지에 대한 동기입니다. 단순히 "프로그래밍을 배우고싶다" 또는 "나도 프로그래머가 되고 싶다"라는 생각은 개발 공부를 할 때 있어서 작심삼일이 되기 쉬운 마인드입니다.

그 대신에, 나는 "프로그래밍을 배워서 어떤 프로젝트를 만들어보고 싶다" 와 같은 확실한 목표를 세우고 개발 공부를 진행하시기를 바랍니다. 그 어떠한 목표가 거창한것이 아니여도 좋습니다. 진짜 간단한 프로젝트라 하더라도, 만들고 싶은 것을 목표로 삼고 개발 공부를 해보세요.

추가적으로, 개발 공부를 하게 될 때 있어서 필요한 도구들은 앞으로 하나하나 설치 할 것입니다.

## 01. Hello JavaScript!

자바스크립트는 여러분의 브라우저에서 언제든지 사용 할 수 있습니다. 만약 현재 여러분이 크롬브라우저가 아닌 다른 브라우저를 사용중이라면 크롬을 설치하여 실행해보세요. 그리고 개발자 도구를 열어보세요.

개발자 도구는 윈도우 Ctrl + Shift + I 또는 macOS Command + Option + I 키를 눌러서 열 수 있습니다.

> Safari, FireFox 에도 개발자 도구가 있습니다. 단, 이 튜토리얼에서는 크롬을 사용하기에 크롬 설치를 권장드립니다.

크롬 개발자 도구에서 Console 탭을 열고 입력창에 다음 코드를 입력해보세요.

```javascript
console.log("Hello JavaScript!");
```

![](https://i.imgur.com/xA2b56x.png)

위 이미지와 같이 Hello JavaScript! 가 보여졌나요?

여기서 `console.log` 는 콘솔에 특정 내용을 출력하라는 것을 의미합니다.

이번에는 조금 다른걸 해볼까요?

다음 코드를 한번 입력해보세요.

```javascript
console.log(1 + 2 + 3 + 4);
```

10 이라는 결과물이 나타났나요?

우리는 이렇게 JavaScript 를 통하여 연산을 할 수도 있답니다.

그런데 아무래도 매번 코드를 작성 할 때마다 크롬 개발자 도구에서 하는 것은 조금 불편합니다.

그래서, 여러분께 유용한 웹사이트를 소개드려볼까 합니다.

바로 [CodeSandbox](https://codesandbox.io) 이라는 사이트인데요, 코드를 작성하고 바로 결과물을 확인 할 수 있는 서비스입니다.

위 링크를 열고 우측 상단의 Create Sandbox 를 누르세요.

![](https://i.imgur.com/a0xc3s2.png)

그 다음에 Vanilla 를 선택하세요. Vanilla 는, 다른 라이브러리 없이 자바스크립트만 사용하겠다는 의미입니다.

![](https://i.imgur.com/rmGGFI1.png)

다음과 같은 에디터가 나타날텐데, 상단에 Fork 버튼을 누르세요.

![](https://i.imgur.com/QcpNUR9.png)

그 다음,

index.js 파일의 내용을 다 지우고 다음 코드를 입력해보세요.

```javascript
console.log("안녕하세요!");
console.log("JavaScript 를 배워봅시다");
```

그 다음에 우측의 Console 을 누르시면 결과물이 나타납니다.

![](https://i.imgur.com/QPqvmW8.png)

흰 페이지는 HTML 결과물을 보여주는 곳인데, 지금은 필요 없으니 이렇게 Console 창을 드래그하여 위로 쭉 끌어 올려주세요.

![](https://i.imgur.com/g3NRbuj.gif)

또는 이렇게 할 수도 있습니다.

![](https://i.imgur.com/TAjKRUv.gif)

이렇게 콘솔 탭을 옮기고 나서 다시 자바스크립트를 실행하려면, 코드에 변화를 주어야 합니다 (위 화면에서는 JavaScript 를 배워봅시다 뒤에 느낌표를 찍었습니다.)

이제 여러분은 JavaScript 를 작성하고, 실행 할 준비가 되었습니다!

> CodeSandbox 에서는 코드 테마도 바꿀 수 있답니다.
> ![](https://i.imgur.com/DHETwEp.png)

## 02. 변수와 상수

변수와 상수에 대해서 알아봅시다. 변수와 상수는, 특정 이름에 특정 값을 담을 때 사용합니다.

예를 들어서 우리가 value 라는 이름에 1 이라는 값을 넣는다고 가정해봅시다.

그러면, 코드를 이렇게 입력하면 됩니다.

```javascript
let value = 1;
```

그러면, 앞으로 우리가 value 를 조회하면 value 는 1을 가르키게 됩니다. 예를 들어서 우리가 이전에 배웠던 console.log 를 통하여 value 값을 출력하도록 해보세요.

```javascript
let value = 1;
console.log(value);
```

![](https://i.imgur.com/BMkIXLN.png)

1이라는 값이 우측에 나타날 것입니다.

특정 이름에 특정 값을 설정하는 것. 우리는 이것을 **선언** 이라고 부릅니다. 쉽게 말하면 이제부터 value 는 1이야~ 라고 정해주는 것이죠.

값을 선언 할 때에는 두가지 종류가 있는데요, 하나는 변수이고, 하나는 상수입니다.

### 변수

변수는, 바뀔수 있는 값을 말합니다. 한번 값을 선언하고 나서 바꿀 수 있습니다.

```javascript
let value = 1;
console.log(value);
value = 2;
console.log(value);
```

![](https://i.imgur.com/s3f8oyZ.png)

변수를 선언 할 때에는 이렇게 `let` 이라는 키워드를 사용합니다. 사용 하실 때 주의 할 점은 한번 선언했으면 똑같은 이름으로 선언하지 못합니다.

이런 코드는 오류가 발생합니다.

```javascript
let value = 1;
let value = 2;
```

![](https://i.imgur.com/Zy4rXMV.png)

단, 다른 블록 범위 내에서는 똑같은 이름으로 사용이 가능하긴 한데요, 이에 대해서는 나중에 알아보겠습니다.

### 상수

상수는, 한번 선언하고 값이 바뀌지 않는 값을 의미합니다. 즉, 값이 고정적이죠. 상수를 선언 할 때에는 다음과 같이 선언합니다.

```javascript
const a = 1;
```

이렇게, 상수를 선언 할 때에는 `const` 키워드를 사용합니다.

상수를 선언하고 나면, 값을 바꿀 수 없습니다.

한번 다음 코드를 입력해보세요.

```javascript
const a = 1;
a = 2;
```

![](https://i.imgur.com/mlqPNuh.png)

"Error: "a" is read-only" 라는 오류가 발생했습니다. 한번 상수로 선언했으면 값을 바꿀 수 없음을 의미합니다.

상수를 선언할 때에도 마찬가지로 한번 선언했으면 같은 이름으로 선언 할 수 없습니다.

```javascript
const a = 1;
const a = 2;
```

![](https://i.imgur.com/uvXKCHr.png)

### 이제는 더 이상 사용하지마세요, var

변수를 선언하는 또 다른 방법으로, `var` 이라는 키워드가 있습니다. 이 키워드를 이미 알고 계신 분들도 있을텐데, 모오오오던 자바스크립트에서는 더 이상 사용하지 않습니다.

```javascript
var a = 1;
```

var 이 let 과 다른 주요 차이점으로는, 똑같은 이름으로 여러번 선언 할 수도 있습니다. 추가적으로, var 과 let 은 사용 할 수 있는 범위가 다른데요, 이에 대해선 다음 번에 더 자세히 알아보도록 하겠습니다.

일단, var 키워드는 그냥 모르시는걸로 하셔도 무방합니다.

추가적으로, IE9, IE10 같은 구형 브라우저에서는 let 과 const 를 사용 할 수 없습니다. 하지만, 보통 개발을 하게 될 때는 Babel 과 같은 도구를 사용하여 코드가 구형 브라우저에서도 돌아갈 수 있게끔 변환작업을 합니다. 만약에, 여러분이 나중에 별도의 도구 없이 구형 브라우저를 호환시켜야 하는 상황이 온다면 (그럴 일은 거의 없을 겁니다.) var 를 사용하게 될 수도 있습니다.

### 데이터 타입

우리가 변수나 상수를 선언하게 될 때, 숫자 외에도 다른 값들을 선언 할 수 있습니다. 종류는 굉장히 많은데요 그 중에서 가장 기본적인 것들을 알아보겠습니다.

#### 숫자 (Number)

우선, 이미 사용해보았지만, 숫자는 그냥 바로 값을 대입하면 됩니다.

```javascript
let value = 1;
```

#### 문자열 (String)

그리고, 텍스트 (주로, 프로그래밍 언어에서는 이를 문자열이라고 부릅니다.) 형태의 값은 작은 따옴표 혹은 큰 따옴표로 감싸서 선언합니다.

```javascript
let text = "hello";
let name = "좌봐스크립트";
```

작은 따옴표와 큰 따옴표 사용에 있어서 큰 차이는 없습니다. 둘다 사용하셔도 되는데, 하나만 선택하셔서 사용하시면 됩니다. 저는 개인적으로 작은 따옴표 사용을 선호합니다.

CodeSandbox 에서는 작은 따옴표로 작성을 하면 자동으로 큰 따옴표로 변환을 해줄 것입니다. 자동 변환되는 것을 방지하기 위해서는 CodeSandbox의 좌측의 설정 아이콘을 누르고, .prettierrc 의 Create File 버튼을 누르고 나서 Use Single Quotes 를 활성화하세요.

![](https://i.imgur.com/PrB7qM9.png)

#### 참/거짓 (Boolean)

이번에는 boolean 이라는 것에 대해서 알아보겠습니다. boolean 은, 참 혹은 거짓 두가지 종류의 값만을 나타낼 수 있습니다.

```javascript
let good = true;
let loading = false;
```

참은 true, 거짓은 false 입니다.

#### null 과 undefined

자바스크립트에서는 "없음" 을 의미하는 데이터 타입이 두 종류가 있는데요, 하나는 `null` 이고 하나는 `undefined` 인데, 둘의 용도가 살짝 다릅니다.

null 은 주로, 이 값이 없다! 라고 선언을 할 때 사용합니다.

영국 드라마 주인공 셜록의 드라마 대사 중에 "난 친구 같은거 없어" 라는 대사가 있습니다.

![](https://i.imgur.com/EckM0uH.png)

```javascript
const friend = null;
```

반면, undefined 는, 아직 값이 설정되지 않은 것을 의미합니다.

다음 코드를 입력해보세요.

```javascript
let criminal;
console.log(criminal);
```

criminal 이라는 변수를 선언하긴 했지만 값을 지정해주지는 않았습니다. 이를 console.log 를 통해 보여주도록 하면 undefined 라는 값이 나타나게 됩니다.

![](https://i.imgur.com/bJCIYsx.png)

null 과 undefined 는 둘 다 값이 없음을 의미하는건 맞는데, null 은 우리가 없다고, 고의적으로 설정하는 값을 의미하고, undefined 는 우리가 설정을 하지 않았기 때문에 없는 값을 의미합니다.

## 03. 연산자

연산자에 대해서 알아봅시다.

연산자는 프로그래밍 언어에서 특정 연산을 하도록 하는 문자입니다.

예를 들어서, 우리가 변수와 상수를 배울 때 다음과 같은 코드를 작성했었지요?

```javascript
let value = 1; // 변수 선언
value = 2; // 대입 연산자
```

여기서 두번째 줄에서 사용된 `=` 문자가 바로 연산자입니다. 연산자의 종류는 굉장히 많습니다. 그 중에서 `=` 는, 대입 연산자에 해당합니다. 첫번째 줄은 새로운 변수를 선언하는 것으로서, 대입 연산자에 해당하지 않습니다.

### 산술 연산자

산술 연산자는 사칙연산과 같은 작업을 하는 연산자를 의미합니다.

- `+`: 덧셈
- `-`: 뺼셈
- `*`: 곱셈
- `/`: 나눗셈

위 4가지가 가장 기본적인 산술 연산자입니다. 이 외에도 몇가지가 더 있는데요, 먼저 위 연산자들을 한번 사용해봅시다.

```javascript
let a = 1 + 2;
console.log(a);
```

위 코드는 a 값을 선언 할 때 1 + 2 의 결과물을 담습니다. 따라서 콘솔에선 3 이라는 숫자가 나타나겠죠.

![](https://i.imgur.com/qk9W5NT.png)

```javascript
let a = 1 + 2 - (3 * 4) / 4;
console.log(a);
```

이렇게 우리가 계산기를 두드릴 때 처럼 할 수도 있습니다.

![](https://i.imgur.com/Vn7xxWa.png)

그리고, 이런 것도 할 수 있습니다. 이 또한 산술 연산자의 일부입니다.

```javascript
let a = 1;
a++;
++a;
console.log(a);
```

결과는 3이 나타납니다. `++` 는 특정 변수에 1을 바로 더해줍니다. 그런데, ++ 가 변수 이름 앞에 오는 것과 뒤에 오는것에 차이가 있습니다.

```javascript
let a = 1;
console.log(a++);
console.log(++a);
```

![](https://i.imgur.com/mfzGBCy.png)

`console.log(a++);` 를 할 때에는 1을 더하기 직전 값을 보여주고
`console.log(++a);` 를 할 때에는 1을 더한 다음의 값을 보여준다는 차이가 있습니다.

덧셈 외에도 뺄셈도 똑같이 할 수 있습니다.

```javascript
let a = 1;
a--;
console.log(a);
```

결과는 0이 나타나게 됩니다.

### 대입 연산자

대입 연산자는 특정 값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자입니다. 예를 들어서 다음과 같은 코드가 있다면

```javascript
let a = 1;
a = a + 3;
```

위 코드를 대입 연산자를 사용하면 다음과 같이 작성할 수 있습니다.

```javascript
let a = 1;
a += 3;
```

덧셈 말고 다른 연산도 가능합니다.

```javascript
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);
```

결과는 1이 나타나게 됩니다.

### 논리 연산자

논리 연산자는, 불리언 타입 (true 혹은 false)를 위한 연산자입니다. 논리 연산자는 다음 장에서 우리가 if 문을 배울 때 매우 유용합니다.

총 3가지가 있습니다.

- `!`: NOT
- `&&`: AND
- `||`: OR

OR의 경우엔 엔터키 위의 \ 문자를 Shift 누른 상태로 누르면 됩니다.

#### NOT

NOT 연산자는 true 는 false 로, false 는 true 로 바꿔줍니다.

```javascript
const a = !true;
console.log(a);
```

a 값은 false 입니다.

```javascript
const b = !false;
console.log(b);
```

b 값은 true 가 됩니다.

#### AND

AND 연산자는 양쪽의 값이 둘 다 true 일때만 결과물이 true 입니다.

```javascript
const a = true && true;
console.log(a);
```

다음과 같은 상황엔 모두 false 입니다.

```javascript
let f = false && false;
f = false && true;
f = true && false;
```

#### OR

OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다. 그리고, 두 값이 둘 다 false 일 때에만 false 입니다.

다음 상황엔 t 값은 true 입니다.

```javascript
let t = true || false;
t = false || true;
t = true || true;
```

반면 상황엔 false 입니다.

```javascript
let f = false || false;
```

#### 연산 순서

사칙연산을 할 때 곱셈 나눗셈이 먼저고 그 다음이 덧셈 뺄셈인 것 처럼, 논리 연산자도 순서가 있습니다. 순서는 NOT -> AND -> OR 입니다.
예를 들어 다음과 같은 코드가 있다고 가정해봅시다.

```javascript
const value = !((true && false) || (true && false) || !false);
```

괄호로 감싸져있을 때에는 가장 마지막에 처리를 하니까 맨 앞 NOT 은 나중에 처리하겠습니다.

우선 NOT 을 처리합니다.

```javascript
!((true && false) || (true && false) || true);
```

그 다음엔 AND 를 처리합니다.

```javascript
!(false || false || true);
```

OR 연산자를 좌측에서 우측 방향으로 처리를 하게 되면서 다음과 같이 처리됩니다.

```javascript
!true;
```

결국 결과값은 false 가 됩니다.

### 비교 연산자

비교 연산자는 두 값을 비교 할 때 사용 할 수 있습니다.

#### 두 값이 일치하는지 확인

```javascript
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);
```

`===` 는 두 값이 일치하는지 확인해줍니다. 일치한다면, true, 일치하지 않는다면 false 가 나타납니다. 위 코드의 경우엔 true 가 나타나겠죠?

두 값이 일치 하는지 확인 할 때 `=` 문자를 3번 사용하는데요, 2개로도 비교를 할 수는 있습니다.

```javascript
const a = 1;
const b = 1;
const equals = a == b;
console.log(equals);
```

위 코드는 똑같은 결과 true 를 반환하긴 하는데요, `=` 문자가 3개 있을 때와 2개 있을 떄의 차이점은 2개 있을때에는 타입 검사까지는 하지 않는다는 것입니다.

예를 들어서 `==` 를 사용하면 숫자 1과 문자 '1' 이 동일한 값으로 간주됩니다.

```javascript
const a = 1;
const b = "1";
const equals = a == b;
console.log(equals);
```

결과: true

그리고, 0 과 false 도 같은 값으로 간주되지요.

```javascript
const a = 0;
const b = false;
const equals = a == b;
console.log(equals);
```

결과: true

그리고 undefined 와 null 도 같은 값으로 간주됩니다.

```javascript
const a = null;
const b = undefined;
const equals = a == b;
console.log(equals);
```

결과: true

앞으로 여러분이 두 값이 일치하는지 비교 할 때에는 `==` 대신 `===` 를 사용 할 것을 권장 드립니다. `==` 를 사용하다보면 실수를 할 확률이 높아집니다.

#### 두 값이 일치하지 않는지 확인

두 값이 일치하지 않는지 확인 할 때에는 `!==` 를 사용하면 됩니다.

```javascript
const value = "a" !== "b";
```

결과물은 true 가 됩니다.

`!=` 를 사용하게 되면 타입 검사를 하지 않습니다.

```javascript
console.log(1 != "1");
console.log(1 !== "1");
```

처음엔 false, 두번째에서는 true가 나타납니다. 두 값이 일치하지 않는지 확인 할 때에도, !== 를 사용 할 것을 권장드립니다.

#### 크고 작음

두 값 중에서 무엇이 더 크고 작은지 비교하기 위해서는 다음 연산자를 사용 할 수 있습니다.

```javascript
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false;
```

위 코드에서 `// false` 이런 식으로 코드의 뒷부분에 텍스트가 적혀있는데요, 이는 주석이라고 부릅니다. 코드에 메모를 다는 것이죠.

여러줄로 주석을 작성 할 때에는 다음과 같이 할 수 있습니다.

```javascript
/*
  여러줄로 주석 작성하기
*/
```

### 문자열 붙이기

두 문자열을 붙일 때에는 `+` 로 할 수 있습니다.

```javascript
const a = "안녕";
const b = "하세요";
console.log(a + b); // 안녕하세요
```

## 04. 조건문

조건문을 사용하면 특정 조건이 만족됐을 때 특정 코드를 실행할 수 있습니다.

### if 문

가장 기본적인 조건문은 if 문입니다.

if문은, "~~하다면 ~~를 해라" 를 의미합니다.

예시 코드를 한번 봅시다.

```javascript
const a = 1;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다.");
}
```

결과는, "a + 1 이 2 입니다." 이 출력됩니다.

하지만, 만약에 여기서 a 를 0 으로 바꾼다면 어떨까요?

```javascript
const a = 0;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다.");
}
```

결과는, 아무것도 출력되지 않습니다.

if문을 사용하면, 이렇게 특정 조건이 만족 될 때에만 특정 코드를 실행 시킬 수 있습니다.

```javascript
if (조건) {
  코드;
}
```

조건이 만족됐을 때 실행시킬 코드가 `{ }` 로 감싸져있는데요, 이를 코드 블록이라고 합니다.

만약에 조건이 true 가 된다면 우리가 지정한 코드가 실행되는 것이고, false 가 된다면 코드가 실행되지 않습니다.

우리가 이전에 `let` 과 `const` 를 배울 때, 다른 블록 범위에서는 똑같은 이름으로 선언 할 수도 있다고 배웠었습니다.

다음 코드를 한번 실행해보세요.

```javascript
const a = 1;
if (true) {
  const a = 2;
  console.log("if문 안의 a 값은 " + a);
}
console.log("if문 밖의 a 값은 " + a);
```

위 코드에서는 if문에 조건을 true 로 설정했기 때문에 코드 블록 내부의 코드가 무조건 실행이 됩니다.

결과는 다음과 같습니다

```
"if문의 안의 a 값은 2"
"if문 밖의 a 값은 1"
```

### if-else 문

if-else문은 "~~하다면 ~~하고, 그렇지 않다면 ~~해라." 를 의미합니다.

예시 코드를 볼까요?

```javascript
const a = 10;
if (a > 15) {
  console.log("a 가 15 큽니다.");
} else {
  console.log("a 가 15보다 크지 않습니다.");
}
```

위 코드의 결과는 다음과 같습니다.

```
"a 가 10보다 크지 않습니다."
```

만약에 특정 조건이 만족할 때와 만족하지 않을 때 서로 다른 코드를 실행해야 된다면 if-else 구문을 사용 할 수 있습니다.

### if-else if 문

if-else if 문은 여러 조건에 따라 다른 작업을 해야 할 때 사용합니다.

예시 코드를 따라 적어보세요.

```javascript
const a = 10;
if (a === 5) {
  console.log("5입니다!");
} else if (a === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}
```

결과는 다음과 같습니다.

```
"10입니다!"
```

한번 a 값을 5로 바꾸고 실행해보고, 7 로 바꾸고 실행해보세요.

```
a = 5 -> "5입니다!"
a = 7 -> "5도 아니고 10도 아닙니다."
```

### switch/case 문

switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용합니다.

다음 예시 코드를 실행해보세요.

```javascript
const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요..");
}
```

device 값을 'iphone', 'ipad', 'galaxy note', 'macbook' 으로 순서대로 바꿔가면서 코드를 실행해보세요.

device 값에 따라서 다른 결과가 출력되고 있나요?

switch/case 문은 이와 같이 특정 값이 무엇이냐에 따라 다른 작업을 수행 할 수 있게 해줍니다.

switch/case 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 `break;` 를 해주어야 합니다. break 를 하지 않으면 그 다음 case 의 코드까지 실행해버립니다.

그리고, 맨 아래의 `default:` 는 device 값이 우리가 case 로 준비하지 않은 값일 경우를 의미합니다.

## 05. 함수

함수는, 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능입니다.

예를 들어서, 우리가 특정 값들의 합을 구하고 싶을 때는 다음과 같이 코드를 작성합니다.

```javascript
const a = 1;
const b = 2;
const sum = a + b;
```

한번, 이 작업을 함수로 만들어보겠습니다.

```javascript
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);
```

결과는 3이 됩니다.

함수를 만들 때는 `function` 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부릅니다.

함수 내부에서 `return` 키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다.

추가적으로, `return` 을 하게 되면 함수가 끝납니다. 만약 다음과 같이 코드가 작성된다면, return 아래의 코드는 호출이 안됩니다.

```javascript
function add(a, b) {
  return a + b;
  console.log("호출이 되지 않는 코드!");
}

const sum = add(1, 2);
console.log(sum);
```

### 연습

함수 사용을 연습해봅시다.

#### Hello, name!

name 이라는 파라미터를 넣으면 콘솔에 'Hello name!' 이라는 결과를 출력하는 코드를 작성해봅시다.

```javascript
function hello(name) {
  console.log("Hello, " + name + "!");
}
hello("velopert");
```

결과물은 다음과 같습니다.

```
"Hello, velopert!"
```

console.log 를 하게 될 때 우리는 문자열을 조합하기 위해서 `+` 연산자를 사용했습니다. 이렇게 문자열을 조합 할 때 `+` 를 사용해도 큰 문제는 없지만, 더욱 편하게 조합을 하는 방법이 있습니다. 바로, ES6 의 템플릿 리터럴 (Template Literal)이라는 문법을 사용하는 것 입니다.

> **ES6 가 뭔가요?**
>
> ES6 는 ECMAScript6 를 의미하며, 자바스크립트의 버전을 가르킵니다. ES6는 2015년에 도입이 되었습니다. ES6 는 ES2015 라고 불리기도 합니다. 그리고 2015년 이후에 계속해서 새로운 자바스크립트 버전이 나오고 있습니다. ES7(ES2016) ES8(ES2017) ES9(ES2018) ES10(ES2019).. 새로운 자바스크립트 버전이 나올때마다 새로운 문법이 소개됩니다.
>
> 브라우저 버전에 따라 지원되는 자바스크립트 버전이 다릅니다. 하지만, 보통 웹 개발을 할 때에는 Babel 이라는 도구를 사용하여 최신 버전의 자바스크립트가 구버전의 브라우저에서도 실행되도록 할 수 있습니다. (정확히는, 최신버전 자바스크립트를 구버전 형태로 변환하는 작업을 거칩니다.)

템플릿 리터럴을 사용하여 구현을 해봅시다.

```javascript
function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello("velopert");
```

#### 점수를 성적등급으로 변환하기

이번에는 점수가 주어졌을 때 A, B, C, D, F 등급을 반환하는 함수를 만들어봅시다.

```javascript
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const grade = getGrade(90);
console.log(grade);
```

grade 가 90 일 때에는 결과가 A 가 됩니다.

### 화살표 함수

함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용 하는 것 입니다.

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
```

`function` 키워드 대신에 `=>` 문자를 사용해서 함수를 구현했는데요, 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어옵니다.

그런데, 만약에 위와 같이 코드 블록 내부에서 바로 return 을 하는 경우는 다음과 같이 줄여서 쓸 수도 있습니다.

```javascript
const add = (a, b) => a + b;
console.log(add(1, 2));
```

아까 만들었던 getGrade 함수처럼 여러 줄로 구성되어있는 경우에는 코드 블록을 만들어야합니다.

```javascript
const getGrade = (score) => {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};
const grade = getGrade(90);
console.log(grade);
```

화살표 함수와 일반 function 으로 만든 함수와의 주요 차이점은 화살표 함수에서 가르키는 this 와 function 에서 가르키는 this 가 서로 다르다는 건데요, 이에 대한 자세한 내용은 나중에 알아보도록 하겠습니다.

## 06. 객체

객체는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줍니다.

```javascript
const dog = {
  name: "멍멍이",
  age: 2,
};

console.log(dog.name);
console.log(dog.age);
```

결과물은 다음과 같습니다.

```
멍멍이
2
```

객체를 선언 할 때에는 이렇게 `{ }` 문자 안에 원하는 값들을 넣어주면 됩니다. 값을 집어 넣을 때에는

```
키: 원하는 값
```

형태로 넣으며, 키에 해당하는 부분은 공백이 없어야합니다. 만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 됩니다.

```javascript
const sample = {
  "key with space": true,
};
```

한번 영화 어벤져스의 캐릭터 아이언맨과 캡틴 아메리카의 정보를 객체안에 집어넣어봅시다.

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

console.log(ironMan);
console.log(captainAmerica);
```

![](https://i.imgur.com/Uf7PElf.png)

결과물이 잘 출력 됐나요?

### 함수에서 객체를 파라미터로 받기

함수를 새로 만들어서 방금 만든 객체를 파라미터로 받아와서 사용해봅시다.

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

결과물이 다음과 같이 나타나나요?

```
아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.
```

위 코드에서는 줄이 너무 길어지는것을 방지하기 위하여 `${hero.actor}` 가 사용되는 부분에서 새 줄이 입력되었습니다. 이는 없어도 무방합니다만, 코드 샌드박스에서 저장시 자동으로 새 줄을 입력하게 됩니다. 이러한 기능을 방지하고 싶다면, 코드샌드박스 좌측의 설정 아이콘을 누르고 .prettierrc 를 열어서 PrintWidth 를 120 정도로 늘리시면 됩니다.

### 객체 비구조화 할당

print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 `hero.` 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다.

> 이 문법은 "객체 구조 분해" 라고 불리기도 합니다.

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

똑같은 결과가 나타났나요?

```javascript
const { alias, name, actor } = hero;
```

이 코드가 객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것 입니다.

여기서 더 나아가면, 파라미터 단계에서 객체 비구조화 할당을 할 수도 있습니다.

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

어떤가요? 코드가 처음보다 훨씬 깔끔해졌지요?

### 객체 안에 함수 넣기

객체 안에 함수를 넣을 수도 있습니다. 한번 다음 코드를 실행해보세요.

```javascript
const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function say() {
    console.log(this.sound);
  },
};

dog.say();
```

결과는 다음과 같습니다.

```
멍멍!
```

함수가 객체안에 들어가게 되면, `this` 는 자신이 속해있는 객체를 가르키게 됩니다.

함수를 선언 할 때에는 이름이 없어도 됩니다.

```javascript
const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function () {
    console.log(this.sound);
  },
};

dog.say();
```

이전과 똑같이 작동 할 것입니다.

객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않습니다.

![](https://i.imgur.com/PwZCeOp.png)

이유는, function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문입니다.

## Getter 함수와 Setter 함수

객체 안에 Getter 함수와 Setter 함수를 설정하는 방법을 알아봅시다. 객체를 만들고 나면, 다음과 같이 객체안의 값을 수정 할 수도 있는데요,

```javascript
const numbers = {
  a: 1,
  b: 2,
};

numbers.a = 5;
console.log(numbers);
```

![](https://i.imgur.com/gpIrp0H.png)

Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있습니다.

다음 코드를 따라 적어보세요.

```javascript
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다!");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
```

![](https://i.imgur.com/fWkED8a.png)

우리는 `numbers.sum()` 을 한 것이 아니라 `number.sum` 을 조회했을 뿐인데, 함수가 실행되고 그 결과값이 출력되었습니다.

이런식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.

이번에는 Setter 함수를 사용해봅시다.

```javascript
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
```

![](https://i.imgur.com/sz8gG6Y.png)

Setter 함수를 설정 할 때에는 함수의 앞부분에 `set` 키워드를 붙입니다.

Setter 함수를 설정하고 나면, `numbers.a = 5` 이렇게 값을 설정했을 때 5 를 함수의 파라미터로 받아오게 됩니다. 위 코드에서는 객체 안에 \_a, \_b 라는 숫자를 선언해주고, 이 값들을 위한 Getter 와 Setter 함수를 설정해주었습니다.

아까 전에는 만든 객체에서는 numbers.sum 이 조회 될 때마다 덧셈이 이루어졌었지만, 이제는 a 혹은 b 값이 바뀔 때마다 sum 값을 연산합니다.

## 07. 배열

이번에는 배열을 배워봅시다. 이전에 배운 객체는 한 변수 혹은 상수에 여러가지 정보를 담기 위함이였다면, 배열은 여러개의 항목들이 들어있는 리스트와 같습니다.

예를 들어서 숫자 배열을 선언해봅시다.

```javascript
const array = [1, 2, 3, 4, 5];
```

배열을 선언 할 때에는 이렇게 `[ ]` 안에 감싸주시면 됩니다.

배열 안에는 어떤 값이던지 넣을 수 있습니다.

예를 들어서, 객체 배열을 만들어볼까요?

```javascript
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];
```

배열을 선언하고 나서, n 번째 항목을 조회하고 싶을 땐 다음과 같이 할 수 있습니다.

```javascript
objects[n];
```

한번 다음 코드를 입력해보세요.

```javascript
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);
```

![](https://i.imgur.com/SlGd9Eg.png)

여기서 주의하실 점은, 첫번째 항목이 `objects[1]` 이 아니라 `objects[0]` 이라는 것 입니다.

여기서 `objects[1]` 이 두번째 항목입니다.

### 배열에 새 항목 추가하기

배열에 새로운 항목을 추가 할 때에는 배열이 지니고있는 내장 함수인 `push` 함수를 사용합니다.

다음 코드를 실행해보세요.

```javascript
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

objects.push({
  name: "멍뭉이",
});

console.log(objects);
```

![](https://i.imgur.com/6LxRfMz.png)

잘 추가 됐나요?

### 배열의 크기 알아내기

배열의 크기를 알아낼 때에는 배열의 `length` 값을 확인합니다.

```javascript
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

console.log(objects.length);

objects.push({
  name: "멍뭉이",
});

console.log(objects.length);
```

![](https://i.imgur.com/DarnroZ.png)

length 가 2에서 3으로 올라갔나요?

배열이 push 와 length 말고도 다양한 기능을 가지고 있습니다. 이에 대해선 나중에 다시 알아보겠습니다.

## 08. 반복문

반복문은 특정 작업을 반복적으로 할 때 사용할 수 있는 구문입니다.

### for

for 문은 가장 기본적인 반복문입니다. 특정 값에 변화를 주어가면서 우리가 정한 조건이 만족된다면 계속 반복합니다.

한번 다음 코드를 따라 적어보세요.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

![](https://i.imgur.com/oLVt44l.png)

결과가 0부터 9까지 잘 나타났나요?

for 문을 다음과 같이 사용합니다.

```javascript
for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}
```

for 문을 사용 할 때 보통 `i++` 를 해서 1씩 증감하는 형태로 사용합니다. 그런데, 1씩 빼는 형태도 가능합니다. 다음 코드를 한번 실행해보세요.

```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```

![](https://i.imgur.com/59mYcGp.png)

10부터 1까지 결과가 잘 나타났나요?

for 문은 이렇게 숫자에 변화를 주어가면서 반복적으로 작업을 실행합니다.

#### 배열과 for

이번에는 우리가 이전에 배운 배열과 for 문을 함꼐 활용해보겠습니다. 다음 코드를 작성해보세요.

```javascript
const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

이렇게 하면 names 배열 안에있는 원소들을 하나하나 나열 할 수 있습니다.

![](https://i.imgur.com/XcBZTli.png)

### while

while문은 특정 조건이 참이라면 계속해서 반복하는 반복문입니다. for 문은 특정 숫자를 가지고 숫자의 값을 비교하고, 증감해주면서 반복을 한다면, while문은 조건을 확인만 하면서 반복을 합니다. 때문에, 조건문 내부에서 변화를 직접 주어야 합니다.

우리가 가장 처음 작성했던 0 부터 9 까지 콘솔에 출력을하는 반복문을 while 문으로 구현해보겠습니다.

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

while 문을 사용 할 때에는 조건문이 언젠간 false 가 되도록 신경쓰셔야 합니다. 만약에 언젠간 false 로 전환이 되지 않는다면 반복문이 끝나지 않고 영원히 반복됩니다.

### for...of

`for...of`문은 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문입니다.

> 사실 이 구문은 배워놔도 사용 할 일이 별로 없습니다. 보통 배열을 반복할때에는 배열의 내장함수를 많이 사용합니다. 그래도 알아는 둡시다.

```javascript
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
```

![](https://i.imgur.com/IVuAtm1.png)

### 객체를 위한 반복문 for...in

객체를 위한 반복문을 알아보기 전에, 객체의 정보를 배열 형태로 받아올 수 있는 함수 몇가지를 알아보겠습니다.

```javascript
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
```

![](https://i.imgur.com/CUhSfvA.png)

각 함수의 역할은 다음과 같습니다.

- `Object.entries`: `[[키, 값], [키, 값]]` 형태의 배열로 변환
- `Object.keys`: `[키, 키, 키]` 형태의 배열로 변환
- `Object.values`: `[값, 값, 값]` 형태의 배열로 변환

객체가 지니고 있는 값에 대하여 반복을 하고 싶다면 위 함수들을 사용하셔도 되고, `for...in` 구문을 사용하셔도 됩니다.

```javascript
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
```

![](https://i.imgur.com/rJPZwu3.png)

### break 와 continue

반복문 안에서는 `break` 와 `continue` 를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있습니다.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}
```

i 가 2 일땐 `continue` 를 하여 원래 console.log 를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어갑니다.

i 가 5 일땐 `break` 를하여 반복문을 종료시킵니다.

![](https://i.imgur.com/UmWM0tA.png)

### 연습

numbers 라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어봅시다.

```javascript
function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
```

결과는 15 입니다.

### 퀴즈

숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

```javascript
function biggerThanThree(numbers) {
  /* 구현해보세요 */
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
```

다음 링크를 열어서 문제를 풀어보세요.

[![Edit x3lkzz0m4p](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/x3lkzz0m4p?fontsize=14)

![](https://i.imgur.com/veffzGB.png)

페이지에 들어가면 우측에 Test 탭을 누르면 테스트가 실패했다는 것을 보여줍니다. 해당 함수를 구현하고 나면 다음과 같이 통과가 됩니다.

![](https://i.imgur.com/FcS7aZO.png)

[정답](https://codesandbox.io/s/lro75070q7?fontsize=14)

## 09. 배열 내장함수

이번에는 배열을 다룰 때 알고있으면 너무나 유용한 다양한 내장 함수들에 대하여 알아보겠습니다.

### forEach

`forEach` 는 가장 쉬운 배열 내장함수입니다. 기존에 우리가 배웠던 for 문을 대체 시킬 수 있습니다. 예를 들어서 다음과 같은 텍스트 배열이 있다고 가정해봅시다.

```javascript
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
```

만약, 배열 안에 있는 모든 원소들을 모두 출력해야 한다면 for 문을 사용하여 다음과 같이 구현 할 수 있는데요,

```javascript
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
```

배열의 forEach 함수를 사용하면 다음과 같이 구현 할 수 있습니다.

```javascript
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

superheroes.forEach((hero) => {
  console.log(hero);
});
```

forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다. 이 함수의 파라미터 hero는 각 원소를 가르키게 됩니다.

이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부릅니다. 함수를 등록해주면, forEach 가 실행을 해주는 거죠.

### map

`map` 은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.

예를 들어서 다음과 같은 배열이 있다고 가정해봅시다.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];
```

만약에 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면 어떻게 해야 할까요? map 함수를 사용하지 않고 우리가 지금까지 배운 지식들을 활용하면 다음과 같이 구현 할 수 있습니다.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);
```

또는 방금 배운 forEach 를 쓰면 다음과 같이 구현 할 수도 있겠죠

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

array.forEach((n) => {
  squared.push(n * n);
});

console.log(squared);
```

결과는 다음과 같습니다.

```
[1, 4, 9, 16, 25, 36, 49, 64];
```

만약 map 을 사용하면 이를 더 짧은 코드를 사용하여 구현 할 수 있습니다.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = (n) => n * n;
const squared = array.map(square);
console.log(squared);
```

똑같은 결과가 나타났나요?

map 함수의 파라미터로는 변화를 주는 함수를 전달해줍니다. 이를 변화함수라고 부르도록 하겠습니다.

현재 우리의 변화함수 square 는 파라미터 n 을 받아와서 이를 제곱해줍니다.

array.map 함수를 사용 할 때 square 를 변화함수로 사용함으로서, 내부의 모든 값에 대하여 제곱을 해서 새로운 배열을 생성하였습니다.

변화 함수를 꼭 이름을 붙여서 선언 할 필요는 없습니다. 코드를 다음과 같이 작성해도 됩니다.

```javascript
const squared = array.map((n) => n * n);
console.log(squared);
```

### indexOf

`indexOf` 는 원하는 항목이 몇번째 원소인지 찾아주는 함수입니다.

예를 들어서 다음과 같은 배열이 있을 때

```javascript
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
```

토르가 몇번째 항목인지 알고싶다고 가정해봅시다.

그렇다면, 이렇게 입력 할 수 있습니다.

```javascript
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
const index = superheroes.indexOf("토르");
console.log(index);
```

결과는 2가 나타납니다.

index 값은 0 부터 시작하기 때문에
0: 아이언맨
1: 캡틴 아메리카
2: 토르

이렇게 돼서 2라는 값이 나타나는 것 입니다.

### findIndex

만약에 배열 안에 있는 값이 숫자, 문자열, 또는 불리언이라면 찾고자하는 항목이 몇번째 원소인지 알아내려면 indexOf 를 사용하면 됩니다. 하지만, 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없습니다.

예를 들어서 다음과 같은 배열이 있다고 가정해봅시다.

```javascript
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];
```

여기서 만약 id 가 3 인 객체가 몇번째인지 찾으러면, `findIndex` 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있습니다.

```javascript
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const index = todos.findIndex((todo) => todo.id === 3);
console.log(index);
```

결과는 2가 나타납니다.

### find

`find` 함수는 `findIndex` 랑 비슷한데, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환합니다.

```javascript
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const todo = todos.find((todo) => todo.id === 3);
console.log(todo);
```

결과는 다음과 같습니다.

```javascript
{id: 3, text: "객체와 배열 배우기", done: true}
```

### filter

`filter` 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다. 예를 들어서, 우리가 방금 만들었던 todos 배열에서 done 값이 false 인 항목들만 따로 추출해서 새로운 배열을 만들어봅시다.

```javascript
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);
```

결과는 다음과 같습니다.

```javascript
[
  {
    id: 4,
    text: "배열 내장 함수 배우기",
    done: false,
  },
];
```

filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며, 이 함수의 파라미터로 각 원소의 값을 받아오게 됩니다.

방금 우리가 작성한 코드는 이렇게 입력 할 수도 있습니다.

```javascript
const tasksNotDone = todos.filter((todo) => !todo.done);
```

filter 에 넣어준 함수에서 true 를 반환하면 새로운 배열에 따로 추출을 해주는데요, 만약 todo.done 값이 false 라면, !false 가 되고 이 값은 true 이기 때문에, 이전의 todo.done === false 와 똑같이 작동하게 됩니다.

### splice

splice 는 배열에서 특정 항목을 제거할 때 사용합니다.

```javascript
const numbers = [10, 20, 30, 40];
```

위 배열에서 30 을 지운다고 가정해봅시다. 그러면, 30이 몇번째 index 인지 알아낸 이후, 이를 splice 를 통해 지워줄 수 있습니다.

```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);
```

결과는 다음과 같습니다.

```
[10, 20, 40]
```

splice 를 사용 할 때 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미합니다.

### slice

slice 는 splice 랑 조금 비슷한데요, 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는 다는 것입니다.

```javascript
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
```

slice 에는 두개의 파라미터를 넣게 되는데 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지 를 의미합니다.

### shift 와 pop

`shift` 와 `pop` 은 비슷하지만, 다릅니다.

`shift` 는 첫번째 원소를 배열에서 추출해줍니다. (추출하는 과정에서 배열에서 해당 원소는 사라집니다.)

```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value);
console.log(numbers);
```

결과는 다음과 같습니다.

```
10
[20, 30, 40]
```

이번엔 `pop` 을 해볼까요?

```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.log(numbers);
```

결과는 다음과 같습니다.

```
40
[10, 20, 30]
```

`pop` 은 `push` 의 반대로 생각하시면 됩니다. `push` 는 배열의 맨 마지막에 새 항목을 추가하고, `pop` 은 맨 마지막 항목을 추출합니다.

### unshift

`unshift` 는 `shift` 의 반대입니다.

배열의 맨 앞에 새 원소를 추가합니다.

```javascript
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);
```

결과는 다음과 같습니다.

```
[5, 10, 20, 30, 40]
```

### concat

`concat` 은 여러개의 배열을 하나의 배열로 합쳐줍니다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);
```

결과는 다음과 같습니다.

```javascript
[1, 2, 3, 4, 5, 6];
```

`concat` 함수는 arr1 과 arr2 에 변화를 주지 않습니다.

### join

`join` 은 배열 안의 값들을 문자열 형태로 합쳐줍니다.

```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(" ")); // 1 2 3 4 5
console.log(array.join(", ")); // 1, 2, 3, 4, 5
```

### reduce

`reduce` 함수는 잘 사용 할 줄 알면 정말 유용한 내장 함수입니다. 만약 여러분이 주어진 배열에 대하여 총합을 구해야 하는 상황이 왔다고 가정해봅시다.

이렇게 구현을 할 수 있을텐데요

```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach((n) => {
  sum += n;
});
console.log(sum);
```

(결과는 15가 됩니다)

여기서 sum 을 계산하기 위해서 사전에 sum 을 선언하고, forEach 를 통하여 계속해서 덧셈을 해주었는데요,

`reduce` 라는 함수를 사용하면 다음과 같이 구현 할 수 있습니다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```

reduce 함수에는 두개의 파라미터를 전달합니다. 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수이구요, 두번째 파라미터는 reduce 함수에서 사용 할 초깃값입니다.

여기서 accumulator 는 누적된 값을 의미합니다.

방금 작성한 함수를 다음과 같이 수정해보세요.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
```

이 코드의 실행 결과는 다음과 같습니다.

![](https://i.imgur.com/NhagmTP.png)

배열을 처음부터 끝까지 반복하면서 우리가 전달한 콜백 함수가 호출이 되는데요, 가장 처음엔 accumulator 값이 0 입니다. 이 값이 0인 이유는 우리가 두번째 파라미터인 초깃값으로 0을 설정했기 때문입니다.

처음 콜백 함수가 호출되면, 0 + 1 을 해서 1이 반환됩니다. 이렇게 1일 반환되면 그 다음 번에 콜백함수가 호출 될 때 accumulator 값으로 사용됩니다.

콜백함수가 두번째로 호출 될 땐 1 + 2 를 해서 3이되고, 이 값이 세번째로 호출될 때의 accumulator 가 됩니다.

그래서 쭉- 누적돼서 결과물 15가 나타나는 것 입니다.

reduce 를 사용해서 평균도 계산 할 수 있습니다. 평균을 계산하려면, 가장 마지막 숫자를 더하고 나서 배열의 length 로 나누어주어야 합니다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);
```

결과는 3이 됩니다.

위 코드의 reduce 에서 사용한 콜백함수에서는 추가 파라미터로 index 와 array 를 받아왔습니다. index 는 현재 처리하고 있는 항목이 몇번째인지 가르키고, array 는 현재 처리하고 있는 배열 자신을 의미합니다.

### 퀴즈

이제 지금까지 배운 것들을 활용하여 퀴즈를 풀어봅시다!

숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

```javascript
function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
```

[![Edit j33q4wm9z5](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/j33q4wm9z5?fontsize=14)

위 버튼을 클릭하여 코드를 작성해서 Test를 통과시키세요.

이 문제는 우리가 배운 내장 함수들 중에서 여러 종류를 사용하여 다른 방식으로 구현 할 수 있습니다.

- [정답1](https://codesandbox.io/s/5w3971pkzp)
- [정답2](https://codesandbox.io/s/zkzoqv298l)
- [정답3](https://codesandbox.io/s/v3rl89wv8y)

## 10. 프로토타입과 클래스

### 객체 생성자

프로토타입과 클래스에 대해서 알아보기 전에 우선 객체 생성자라는 것을 알아봅시다. 객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해줍니다.

다음 코드를 입력해보세요.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log(this.sound);
  };
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();
```

결과물은 다음과 같습니다.

```
멍멍
야옹
```

객체 생성자를 사용 할 때는 보통 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는 `new` 키워드를 앞에 붙여주어야 합니다.

지금 위 코드를 보시면, dog 가 가지고 있는 say 함수와 cat 이 가지고 있는 수행하는 코드가 똑같음에도 불구하고 객체가 생성 될 때 마다 함수도 새로 만들어져서 this.say 로 설정이 되고 있습니다.

같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는데 바로 프로토타입입니다.

### 프로토타입

프로토타입은 다음과 같이 객체 생성자 함수 아래에 `.prototype.[원하는키] =` 코드를 입력하여 설정 할 수 있습니다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
```

결과는 다음과 같습니다.

```
멍멍
야옹
1
1
```

### 객체 생성자 상속받기

예를 들어서 우리가 Cat 과 Dog 라는 새로운 객체 생성자를 만든다고 가정해봅시다. 그리고, 해당 객체 생성자들에서 Animal 의 기능을 재사용한다고 가정해봅시다. 그렇다면, 이렇게 구현 할 수 있습니다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();
```

새로 만든 Dog 와 Cat 함수에서 `Animal.call` 을 호출해주고 있는데요, 여기서 첫번째 인자에는 this 를 넣어주어야 하고, 그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 합니다.

추가적으로 prototype 을 공유해야 하기 때문에 상속받은 객체 생성자 함수를 만들고 나서 prototype 값을 Animal.prototype 으로 설정해주었습니다.

### 클래스

클래스라는 기능은 C++, Java, C#, PHP 등의 다른 프로그래밍 언어에는 있는 기능인데 자바스크립트에는 없었기 때문에 예전 자바스크립트 (ES5) 에서는 클래스 문법이 따로 없었기 때문에 위에서 작성한 코드처럼 객체 생성자 함수를 사용하여 비슷한 작업을 구현해왔습니다.

ES6 에서부터는 `class` 라는 문법이 추가되었는데요, 우리가 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 할 수 있게 해줍니다. 추가적으로, 상속도 훨씬 쉽게 해줄 수 있습니다.

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();
```

여기서 우리가 say 라는 함수를 클래스 내부에 선언하였는데요, 클래스 내부의 함수를 '메서드'라고 부릅니다. 이렇게 메서드를 만들면 자동으로 prototype 으로 등록이 됩니다.

결과는 다음과 같습니다.

```
멍멍
야옹
```

`class` 를 사용했을때에는, 다른 클래스를 쉽게 상속 할 수 있습니다.

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();
```

결과물은 다음과 같습니다.

```
멍멍
야옹
```

상속을 할 때는 `extends` 키워드를 사용하며, constructor에서 사용하는 `super()` 함수가 상속받은 클래스의 생성자를 가르킵니다.

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const dog2 = new Dog("왈왈이", "왈왈");
const cat = new Cat("야옹이", "야옹");
const cat2 = new Cat("냐옹이", "냐옹");

dog.say();
dog2.say();
cat.say();
cat2.say();
```

### 연습

연습삼아 다음 클래스도 만들어보세요.

```javascript
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을/를 파는 음식점들:`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노 피자");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();
```

이런식으로, 클래스를 만들어서 사용하면 같은 형태를 지닌 객체들을 만들때 객체들이 지닌 값과 함수를 보기 좋은 형태로 쉽게 관리 할 수 있습니다.

# 알고있으면 유용한 자바스크립트 문법

이번에는 알고있으면 유용한 다양한 자바스크립트 문법을 알아보게됩니다!
이번에 소개 할 대부분의 문법은 ES6 이상 버전에서 사용 할 수 있는 문법들입니다.
그리고, ES6 가 아닌 문법들도 은근히 있습니다.

시작해볼까요?

## 01. 삼항 연산자

첫번째로 배울 문법은, 삼항 연산자입니다. 이 문법은 ES6 문법은 아닙니다.

```javascript
const array = [];
let text = "";
if (array.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}
console.log(text);
```

예를 들어 위와 같이 특정 조건에 따라 text 값이 달라야 하는 상황이 있다고 가정해봅시다.

그런 경우에는 다음과 같이 코드를 작성 할 수 있습니다.

```javascript
const array = [];
let text =
  array.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다.";

console.log(text);
```

삼항 연산자의 사용법은 다음과 같습니다.

```javascript
조건 ? true일때 : false일때;
```

라인의 길이가 너묵 길어진다면 다음과 같이 작성하기도 합니다.

```javascript
const array = [];
let text =
  array.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다.";

console.log(text);
```

다음과 같이 삼항 연산자를 중첩해서 쓸 수도 있는데요

```javascript
const condition1 = false;
const condition2 = false;

const value = condition1 ? "와우!" : condition2 ? "blabla" : "foo";

console.log(value);
```

가독성이 그렇게 좋지 않으니 이러한 코드는 피하시는 것이 좋습니다. 이런 상황에는 차라리 if문으로 처리하는게 오히려 코드를 읽기가 쉬워질 수도 있습니다.

## 02. Truthy and Falsy

이것은 자바스크립트 문법까지는 아니지만, 알아둬야 하는 개념입니다.

Truthy: true 같은거...
Falsy: false 같은거...

라고 이해를 하면 되는데요, 예를 들어서 다음과 같은 함수가 있다고 가정해봅시다.

```javascript
function print(person) {
  console.log(person.name);
}

const person = {
  name: "John",
};

print(person);
```

만약에 이러한 상황에서, 만약 print 함수가 다음과 같이 파라미터가 비어진 채로 실행됐다고 가정해봅시다.

```javascript
function print(person) {
  console.log(person.name);
}

const person = {
  name: "John",
};

print();
```

이 코드는 다음과 같은 에러를 생성해냅니다.

```
TypeError: Cannot read property 'name' of undefined
```

이러한 상황에서, 만약에 print 함수에서 만약에 object 가 주어지지 않았다면, 문제가 있다고 콘솔에 출력해야 한다면 다음과 같이 구현 할 수 있습니다.

```javascript
function print(person) {
  if (person === undefined) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John",
};

print();
```

그런데 만약에 다음과 같이 print 에 null 값이 파라미터로 전달되면 어떨까요?

```javascript
function print(person) {
  if (person === undefined) {
    console.log("person이 없네요");
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);
```

그러면 또 오류가 발생하게 됩니다.

```
TypeError: Cannot read property 'name' of null
```

그러면 또.. print 함수에 조건을 추가해줘야합니다.

```javascript
function print(person) {
  if (person === undefined || person === null) {
    console.log("person이 없네요");
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);
```

이렇게 person 이 undefined 이거나, null 인 상황을 대비하려면 위와 같이 코드를 작성해야하는데요, 여기서 위 코드는 다음과 같이 축약해서 작성 할 수 있답니다.

```javascript
function print(person) {
  if (!person) {
    console.log("person이 없네요");
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);
```

이게 작동하는 이유는, undefined 와 null 은 Falsy 한 값입니다. Falsy 한 값 앞에 느낌표를 붙여주면 true 로전환됩니다.

다음 코드를 입력해보세요.

```javascript
console.log(!undefined);
console.log(!null);
```

Falsy 한 값은 이 외에도 몇개 더 있습니다.

```javascript
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
```

이 값은 모두 true 가 됩니다.

여기서 NaN 이란 값은 조금 생소하지요, 이 값은 Not A Number 라는 의미를 가지고 있는데요, 보통 NaN 은 문자열을 숫자로 변환하는 자바스크립트 기본함수 parseInt 라는 함수를 사용하게 될 때 볼 수 있습니다.

```javascript
const num = parseInt("15", 10); // 10진수 15를 숫자로 변환하겠다는 의미
console.log(num); // 10
const notnum = parseInt("야호~", 10);
console.log(notnum); // NaN
```

다시 본론으로 돌아와서, Falsy 한 값은 아까 나열한 다섯가지 입니다.

그리고, 그 외의 값은 모두! Truthy 한 값입니다.

한번, 이렇게 코드를 적어보세요.

```javascript
console.log(!3);
console.log(!"hello");
console.log(!["array?"]);
console.log(![]);
console.log(!{ value: 1 });
```

이번에는 아까와는 반대로 모든 값이 false 가 됩니다.

Truthy 한 값과 Falsy 한 값은 if 문에서도 사용 할 수있습니다.

```javascript
const value = { a: 1 };
if (value) {
  console.log("value 가 Truthy 하네요.");
}
```

value 가 Truthy 한 값이기 때문에, 콘솔에 메시지가 출력 될 것입니다. 반면, value 가 null, undefined, 0, '', NaN 중 하나라면, 나타나지 않을 것입니다.

그래서 이렇게, Truthy 한 값과 Falsy 한 값을 잘 알아놓으면 조건문을 작성할 때 편할 것입니다.

추가적으로, 알아두면 유용한 팁 하나를 드리겠습니다.

만약에, 특정 값이 Truthy 한 값이라면 true, 그렇지 않다면 false 로 값을 표현하는 것을 구현해보겠습니다.

```javascript
const value = { a: 1 };

const truthy = value ? true : false;
```

우리가 이전에 배운 삼항연산자를 사용하면 쉽게 value 값의 존재 유무에 따라 쉽게 true 및 false 로 전환이 가능합니다. 그런데, 이를 더 쉽게 할 수도 있습니다.

```javascript
const value = { a: 1 };
const truthy = !!value;
```

!value 는 false 가 되고, 여기에 !false 는 true 가 되어서, 결과는 true 가 됩니다.

## 03. 단축 평가 (short-circuit evaluation) 논리 계산법

이번에는 논리 연산자를 조금 더 유용하게 사용하는 방법에 대해서 배워보겠습니다.

우리가 이전에 연산자를 배울때, 다음과 사항을 잘 숙지하셨을겁니다.

```javascript
true && true; // true
true && false; // false
true || false; // true
false || true; // true
```

논리 연산자를 사용 할 때에는 무조건 우리가 true 혹은 false 값을 사용해야 되는 것은 아닙니다. 문자열이나 숫자, 객체를 사용 할 수도 있고, 해당 값이 Truthy 하냐 Falsy 하냐에 따라 결과가 달라집니다.

예를 들어서 다음과 같은 코드가 있다고 가정해보겠습니다.

```javascript
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
```

그런데 만약, getName 의 파라미터에 제대로된 객체가 주어지지 않으면 어떻게 될까요?

```javascript
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal.name;
}

const name = getName();
console.log(name);
```

![](https://i.imgur.com/SHJP2MU.png)

animal 객체가 undefined 이기 때문에, undefined 에서 name 값을 조회 할 수 없어서 이렇게 에러가 발생하게 됩니다.

그렇다면, 만약 함수에서 animal 값이 제대로 주어졌을 때만 name 을 조회하고, 그렇지 않을때는 그냥 undefined 를 반환하게 하고 싶으면 어떻게 해야 할까요?

```javascript
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
```

이렇게 하면 animal 값이 주어지지 않아도, 에러가 발생하지 않게 됩니다. 이러한 코드를 논리 연산자를 사용하면 코드를 단축시킬 수 있습니다.

### && 연산자로 코드 단축시키기

이렇게 코드를 작성해보세요.

```javascript
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined
```

아까 코드와 이 코드는 완벽히 똑같이 작동하는 코드입니다. 한번 다음과 같이 파라미터를 넣어서 호출도 해보세요.

```javascript
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
```

이게 작동하는 이유는, A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다. 반면, A 가 Falsy 한 값이라면 결과는 A 가 됩니다.

다음 예시를 한번 살펴보세요.

```javascript
console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1
```

이러한 속성을 잘 알아두면, 특정 값이 유효할때에만 어떤 값을 조회하는 작업을 해야 할 때 매우 유용합니다.

### || 연산자로 코드 단축시키기

|| 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 할 수 있습니다.

예를 들어서 다음과 같은 코드가 있다고 가정해봅시다.

```javascript
const namelessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return "이름이 없는 동물입니다";
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

위 코드는 || 연산자를 사용하면 다음과 같이 단축시킬 수 있습니다.

```javascript
const namelessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다.";
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

A || B 는 만약 A 가 Truthy 할경우 결과는 A 가 됩니다. 반면, A 가 Falsy 하다면 결과는 B 가 됩니다.

## 04. 함수의 기본 파라미터

이번에는 함수의 기본 파라미터를 설정하는 방법에 대해서 알아보겠습니다.

한번, 우리가 원의 넓이를 구하는 함수를 만들어보겠습니다.

```javascript
function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669
```

여기서 Math.PI 는 원주율 파이(π) 값을 가르킵니다.

만약 우리가 이 함수에 r 값을 넣어주지 않으면 어떤 결과가 나타날까요?

```javascript
function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // NaN
```

결과는 NaN 이 나옵니다. Not a Number 라는 의미로, 우리가 undefined \* undefined 이렇게 숫자가 아닌 값에 곱셈을 하니까 이상한 결과물이 나와버렸습니다.

이 함수에서 만약에 r 값이 주어지지 않았다면 기본 값을 1을 사용하도록 설정해봅시다.

우리가 지금까지 배운 것들을 활용하면 이렇게 작성 할 수 있습니다.

```javascript
function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

ES5 시절엔 위와 같이 하는게 최선이였는데, ES6 에선 다음과 같이 할 수 있게 되었습니다.

```javascript
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

훨씬 깔끔하죠?

함수의 기본 파라미터 문법은 화살표 함수에서도 사용 할 수 있습니다.

```javascript
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

## 05. 조건문 더 스마트하게 쓰기

이번에는 조건문을 조금 더 스마트하게 쓰는 방법에 대해서 알아보겠습니다.

### 특정 값이 여러 값중 하나인지 확인해야 할 때

만약, 여러분이 특정 값이 여러 값 중 하나인지 확인을 해야 하는 상황이 생겼다고 해봅시다.

그러면, 이러한 시도를 할 수도 있을 것입니다.

```javascript
function isAnimal(text) {
  return (
    text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
  );
}

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false
```

비교해야 할 값이 많아질 수록 코드는 길어집니다.

이러한 코드를 간단하게 해결 할 수 있는방법은, 배열을 만들고 배열의 includes 함수를 사용하는 것 입니다.

```javascript
function isAnimal(name) {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(name);
}

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false
```

어떤가요? 훨씬 깔끔하죠?

원한다면, animals 배열을 선언하는 것도 생략하고, 화살표 함수로 작성할 수도 있습니다.

```javascript
const isAnimal = (name) => ["고양이", "개", "거북이", "너구리"].includes(name);

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false
```

물론, 코드가 짧다고 해서 무조건 좋은것은 아닙니다. 단, 코드가 짧으면서도 읽었을 때 어떤 역할을 하는지 잘 이해가 될 수 있어야 비로소 좋은 코드 입니다.

### 값에 따라 다른 결과물을 반환 해야 할 때

이번에는 주어진 값에 따라 다른 결과물을 반환해야 할 때 사용 할 수 있는 유용한 팁을 알아보겠습니다.

예를 들어서, 동물 이름을 받아오면, 동물의 소리를 반환하는 함수를 만들고 싶다고 가정해보겠습니다.

```javascript
function getSound(animal) {
  if (animal === "개") return "멍멍!";
  if (animal === "고양이") return "야옹~";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구 구 구";
  return "...?";
}

console.log(getSound("개")); // 멍멍!
console.log(getSound("비둘기")); // 구구 구 구
```

> if 문의 코드 블록이 한줄짜리라면 { } 를 생략 할 수도 있습니다.

만약 여기서 우리가 배운 switch case 문을 사용하여 다음과 같이 구현 할 수도 있습니다.

```javascript
function getSound(animal) {
  switch (animal) {
    case "개":
      return "멍멍!";
    case "고양이":
      return "야옹~";
    case "참새":
      return "짹짹";
    case "비둘기":
      return "구구 구 구";
    default:
      return "...?";
  }
}

console.log(getSound("개")); // 멍멍!
console.log(getSound("비둘기")); // 구구 구 구
```

참고로 switch 문에서 return 을 할 때에는 break 를 생략해도 됩니다.

우리가 방금 구현한 코드는 큰 문제는 없지만, 이걸 깔끔하게 해결 할 방법을 알고 나면 좀 맘에 들지 않는 코드의 형태입니다.

이 코드를 더욱 깔끔하게 작성하는 방법을 알려드리겠습니다.

```javascript
function getSound(animal) {
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~",
    참새: "짹짹",
    비둘기: "구구 구 구",
  };
  return sounds[animal] || "...?";
}

console.log(getSound("개")); // 멍멍!
console.log(getSound("비둘기")); // 구구 구 구
```

훨씬 더 간략하고 가독성도 좋지요? 이렇게 특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지 있을 때는 객체를 활용하면 좋습니다.

반면, 값에 따라 실행해야 하는 코드 구문이 다를 때는 어떻게 해야 할까요?

그럴 떄는 객체에 함수를 넣으면 됩니다.

```javascript
function makeSound(animal) {
  const tasks = {
    개() {
      console.log("멍멍");
    },
    고양이() {
      console.log("고양이");
    },
    비둘기() {
      console.log("구구 구 구");
    },
  };
  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  tasks[animal]();
}

getSound("개");
getSound("비둘기");
```

이것을 잘 알아두면, 앞으로 매우 쓸모 있을 것입니다.

## 06. 비구조화 할당 (구조분해) 문법

이번에는 1장 섹션 6 에서도 배웠던 [비구조화 할당](https://learnjs.vlpt.us/basics/06-object.html#%EA%B0%9D%EC%B2%B4-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9) 문법을 잘 활용하는 방법에 대해서 알아보겠습니다.

이전에 배웠던것을 복습해보자면, 비구조화 할당 문법을 사용하면 다음과 같이 객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언해 줄 수있었죠?

```javascript
const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2
```

그리고, 함수의 파라미터에서도 비구조화 할당을 할 수 있는것도 배웠습니다.

```javascript
const object = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
```

그런데 여기서 만약 b 값이 주어지지 않았다고 가정해봅시다.

```javascript
const object = { a: 1 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// undefined
```

두번째 출력에서 undefined가 나타날 것입니다.

### 비구조화 할당시 기본값 설정

이러한 상황에 b 값에 기본 값을 주고 싶다면 이렇게 해줄 수 있습니다.

```javascript
const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// 2
```

이는 꼭 함수의 파라미터에서만 할 수 있는 것은 아닙니다.

```javascript
const object = { a: 1 };

const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2
```

### 비구조화 할당시 이름 바꾸기

이번에는, 비구조화 할당을 하는 과정에서 선언 할 값의 이름을 바꾸는 방법을 알아보겠습니다.

예를 들어서 다음과 같은 코드가 있다고 가정해봅시다.

```javascript
const animal = {
  name: "멍멍이",
  type: "개",
};

const nickname = animal.name;

console.log(nickname); // 멍멍이
```

위 코드에서는 animal.name 값을 nickname 값에 담고 있는데요, 이름이 같다면 그냥 우리가 이전에 배웠던 대로 비구조화 할당을 쓰면 되는데 지금은 이름이 서로 다릅니다.

이러한 상황에서는 : 문자를 사용해서 이름을 바꿔줄 수 있습니다.

```javascript
const animal = {
  name: "멍멍이",
  type: "개",
};

const { name: nickname } = animal;
console.log(nickname);
```

위 코드는 'animal 객체 안에 있는 name 을 nickname 이라고 선언하겠다.' 라는 의미입니다.

### 배열 비구조화 할당

비구조화 할당은 객체에만 할 수 있는 것이 아닙니다. 배열에서 할 수 있어요.

예시 코드를 봅시다.

```javascript
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
```

이 문법은 배열 안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용하면 매우 유용합니다.

객체 비구조화 할당과 마찬가지로, 기본값 지정이 가능합니다.

```javascript
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
```

### 깊은 값 비구조화 할당

객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법을 알아봅시다.

예를들어서 다음과 같은 객체가 있다고 가정해봅시다.

```javascript
const deepObject = {
  state: {
    information: {
      name: "velopert",
      languages: ["korean", "english", "chinese"],
    },
  },
  value: 5,
};
```

여기서, name, languages, value 값들을 밖으로 꺼내주고 싶다면 어떻게 해야 할까요? 이럴땐 두가지 해결 방법이 있는데요, 첫번째는 비구조화 할당 문법을 두번 사용하는 것입니다.

```javascript
const deepObject = {
  state: {
    information: {
      name: "velopert",
      languages: ["korean", "english", "chinese"],
    },
  },
  value: 5,
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value,
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
```

그런데 잠깐! 지금 extracted 객체를 선언 할 때 이런식으로 했는데요

```javascript
const extracted = {
  name,
  languages,
  value,
};
```

이 코드는 다음 코드와 똑같습니다.

```javascript
const extracted = {
  name: name,
  languages: languages,
  value: value,
};
```

만약에 key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜주는 문법입니다. 이 문법은 ES6 의 object-shorthand 문법이라고 부릅니다. (이름은 굳이 알아둘 필요는 없습니다..!)

다시 본론으로 돌아와서, 아까 deepObject 객체에서 names, languages, value 를 추출하는 과정에서 비구조화 할당을 두번 했었죠?

이번엔 두번째 방법, 한번에 모두 추출하는 방법을 알아보겠습니다.

```javascript
const deepObject = {
  state: {
    information: {
      name: "velopert",
      languages: ["korean", "english", "chinese"],
    },
  },
  value: 5,
};

const {
  state: {
    information: { name, languages },
  },
  value,
} = deepObject;

const extracted = {
  name,
  languages,
  value,
};

console.log(extracted);
```

이렇게 하면 깊숙히 안에 들어있는 값도 객체에서 바로 추출 할 수 있답니다.

![](https://i.imgur.com/npMktDb.png)

위 이미지에서 주황색으로 나타난 값들이 추출 된 것입니다. 반면, 빨간색으로 나타난 값들은 따로 추출되지 않으니 참고하세요.

이렇게 깊숙한 객체안에 있는 값을 추출하는 방법을 알아보았는데요, 사람들마다 성향이 다르겠지만, 저는 개인적으로 한번에 다 추출하는 것 보다는 여러번에 걸쳐서 추출하는 것이 더욱 코드가 깔끔하다고 생각합니다. 정해진 답은 없으니 여러분이 편한 방식을 택해서 하세요.

## 07. spread 와 rest

이번에는 ES6 에서 도입된 spread 와 rest 문법에 대해서 알아보겠습니다. 서로 완전히 다른 문법인데요, 은근히 좀 비슷합니다.

### spread

일단 spread 문법부터 알아봅시다. spread 라는 단어가 가지고 있는 의미는 펼치다, 퍼뜨리다 입니다. 이 문법을 사용하면, 객체 혹은 배열을 펼칠수있습니다.

예를 들어서 다음과 같은 객체들이 있다고 가정해봅시다.

```javascript
const slime = {
  name: "슬라임",
};

const cuteSlime = {
  name: "슬라임",
  attribute: "cute",
};

const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

![](https://i.imgur.com/XeRXMXb.png)

이 코드에서는 먼저 slime 이라는 객체를 선언했습니다. 그리고 cuteSlime 이라는 객체를 만들었는데요, 기존에 선언한 slime 을 건들이지 않고 새로운 객체를 만들어서 slime 이 가지고 있는 값을 그대로 사용하였습니다.

그 다음에는 purpleCuteSlime 이라는 객체를 만들었는데요, 이 객체는 cuteSlime 이 가지고 있는 속성을 그대로 사용하면서 추가적으로 color 가 추가되었습니다.

위 코드에서의 핵심은, 기존의 것을 건들이지 않고, 새로운 객체를 만든다는 것 인데요, 이러한 상황에 사용 할 수 있는 유용한 문법이 spread 입니다.

아까 코드는 spread 문법을 사용하면 다음과 같이 작성 할 수 있습니다.

```javascript
const slime = {
  name: "슬라임",
};

const cuteSlime = {
  ...slime,
  attribute: "cute",
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: "purple",
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

여기서 사용한 ... 문자가 바로 spread 연산자입니다.

spread 연산자는 배열에서도 사용 할 수 있습니다.

```javascript
const animals = ["개", "고양이", "참새"];
const anotherAnimals = [...animals, "비둘기"];
console.log(animals);
console.log(anotherAnimals);
```

![](https://i.imgur.com/Z8t1wEt.png)

기존의 animals 는 건드리지 않으면서, 새로운 anotherAnimals 배열에 animals 가 가지고 있는 내용을 모두 집어넣고, '비둘기' 라는 항목을 추가적으로 넣었습니다.

배열에서 spread 연산자를 여러번 사용 할 수도 있습니다.

```javascript
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
```

### rest

rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다릅니다.

rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.

#### 객체에서의 rest

우선 객체에서의 예시를 알아볼까요?

```javascript
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);
```

![](https://i.imgur.com/XYg74q3.png)

rest 안에 name 값을 제외한 값이 들어있습니다.

rest 는 객체와 배열에서 사용 할 때는 이렇게 비구조화 할당 문법과 함께 사용됩니다. 주로 사용 할때는 위와 같이 rest 라는 키워드를 사용하게 되는데요, 추출한 값의 이름이 꼭 rest 일 필요는 없습니다.

```javascript
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);
```

이렇게 해도 무방합니다.

이어서, attribute 까지 없앤 새로운 객체를 만들고 싶다면 이렇게 해주면 되겠죠.

```javascript
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);
```

![](https://i.imgur.com/ejvAHKJ.png)

#### 배열에서의 rest

다음, 배열에서의 사용 예시를 알아봅시다.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);
```

![](https://i.imgur.com/tEpTlMQ.png)

배열 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣었습니다.

반면 이렇게 할 수는 없답니다.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers;
```

![](https://i.imgur.com/E9dyzir.png)

#### 함수 파라미터에서의 rest

rest 를 함수파라미터에서 사용 할 수도 있습니다. 예를 들어서 우리가 파라미터로 넣어준 모든 값들을 합해주는 함수를 만들어주고 싶다고 가정해봅시다.

```javascript
function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```

위에서의 sum 함수는 7개의 파라미터를 받아오는데, 아래에서 사용 할때에는 6개만 넣어줬습니다. 그러면, g 값이 undefined 가 되기 때문에 sum 에 더하는 과정에서 += undefined 를 하게 되면 결과는 NaN 이 되버립니다. 그렇기 때문에 함수에서 하나하나 유효한 값인지 확인을 해줬지요.

함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 매우 유용합니다. 코드를 다음과 같이 수정해보세요.

```javascript
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```

![](https://i.imgur.com/Pvm0tha.png)

result 가 가르키고 있는 것은 함수에서 받아온 파라미터들로 이루어진 배열입니다. 우리가 이제 파라미터들이 들어가있는 배열을 받았으니, 그냥 모두 더해주면 되겠죠?

```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21
```

여기서 reduce 함수가 사용 됐는데, reduce 를 잘 모르겠으면 [1장 섹션 9](https://learnjs.vlpt.us/basics/09-array-functions.html#reduce)를 복습하고 오세요.

### 함수 인자와 spread

이번에는, 다시 아까 배웠던 spread 로 돌아와서 한가지를 더 가르쳐드리겠습니다. 바로 함수의 인자와 spread 인데요, 만약 프로그래밍을 처음 배우신다면 파라미터와 인자가 좀 헷갈릴 수 있습니다. 이에 대해서 간단하게 설명 드려볼게요.

```javascript
const myFunction(a) { // 여기서 a 는 파라미터
  console.log(a); // 여기서 a 는 인자
}

myFunction('hello world'); // 여기서 'hello world' 는 인자
```

함수에서 값을 읽을때, 그 값들은 파라미터라고 부릅니다.
그리고 함수에서 값을 넣어줄 때, 그 값들은 인자라고 부릅니다.

인자가 무엇인지 이해를 하셨다면 이제 함수인자와 spread 문법을 사용하는 것에 대하여 알아볼게요.

우리가 방금 함수파라미터와 rest 를 사용한 것과 비슷한데, 반대의 역할입니다. 예를 들어서, 우리가 배열 안에 있는 원소들을 모두 파라미터로 넣어주고 싶다고 가정해보겠습니다.

```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
  numbers[0],
  numbers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
);
console.log(result);
```

굉장히 불편하죠? 만약에 sum함수를 사용 할 때 인자 부분에서 spread 를 사용하면 다음과 같이 표현이 가능합니다.

```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result);
```

어떤가요? 정말 편하죠?

이렇게, spread 와 rest 를 잘 사용하면 앞으로 보기 깔끔한 코드를 작성하는 것에 큰 도움을 줄 것입니다.

### 퀴즈

함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.

```javascript
function max() {
  return 0;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
```

[![Edit gifted-davinci-qxqzn](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/gifted-davinci-qxqzn?fontsize=14)

위 CodeSandbox 링크에서 우측에 뜨는 Tests 를 통과시키시면 됩니다.

[정답](https://codesandbox.io/s/silly-napier-pippm)

## 08. 자바스크립트의 Scope 에 대한 이해

이번에는 자바스크립트의 Scope 에 대해서 알아봅시다. Scope 란, 우리가 변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위를 의미합니다. Scope 는 총 3가지 종류가있습니다.

1. **Global (전역) Scope**: 코드의 모든 범위에서 사용이 가능합니다.
2. **Function (함수) Scope**: 함수 안에서만 사용이 가능합니다.
3. **Block (블록) Scope**: if, for, switch 등 특정 블록 내부에서만 사용이 가능합니다.

### 예시를 통한 Scope 이해

한번, 예시 코드를 보고 Scope 를 이해해봅시다.

```javascript
const value = "hello!";

function myFunction() {
  console.log("myFunction: ");
  console.log(value);
}

function otherFunction() {
  console.log("otherFunction: ");
  const value = "bye!";
  console.log(value);
}

myFunction();
otherFunction();

console.log("global scope: ");
console.log(value);
```

위 코드의 결과는 다음과 같습니다.

![](https://i.imgur.com/8pSTR1B.png)

코드의 맨 윗줄에서 선언된 `value` 값은 Global Scope 로 선언된 값입니다. Global Scope 로 선언된 값은 어디서든지 사용이 가능합니다. `myFunction` 에서 바로 사용을 할 수 있었지요?

`otherFunction` 에서는 함수 내부에서 `value` 값을 `'bye!'` 로 새로 선언을 해주었습니다. 이렇게 되면, value 라는 값은 Function Scope 로 지정이 되서 해당 값은 `otherFunction` 내부에서만 유효한 값이 됩니다. 이렇게 값을 설정한다고 해서 기존에 Global Scope 로 선언된 `value` 값이 바뀌지 않습니다.

또 다른 예시를 확인해봅시다.

```javascript
const value = "hello!";

function myFunction() {
  const value = "bye!";
  const anotherValue = "world";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

myFunction();
console.log("global scope: ");
console.log(value);
console.log(anotherValue);
```

![](https://i.imgur.com/LWAlKxY.png)

`myFunction` 내부에 `anotherValue` 라는 새로운 값을 선언했고, `functionInside` 라는 함수도 선언을 했습니다. `functionInside` 함수에서는 `myFunction` 에서 선언한 `value` 값과 `anotherValue` 값을 조회 할 수 있습니다.

반면, `myFunction` 밖에서는 `anotherValue` 를 조회 할 수 없습니다.

이제, 또 다른 예시를 알아봅시다.

```javascript
const value = "hello!";

function myFunction() {
  const value = "bye!";
  if (true) {
    const value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}

myFunction();
console.log("global scope: ");
console.log(value);
```

![](https://i.imgur.com/wz0uA9I.png)

`const` 로 선언한 값은 Block Scope 로 선언이 됩니다. 따라서, if 문 같은 블록 내에서 새로운 변수/상수를 선언하게 된다면, 해당 블록 내부에서만 사용이 가능하며, 블록 밖의 범위에서 똑같은 이름을 가진 값이 있다고 해도 영향을 주지 않습니다.

`let` 또한 마찬가지 입니다.

하지만 `var` 는 어떨까요?

```javascript
var value = "hello!";

function myFunction() {
  var value = "bye!";
  if (true) {
    var value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}

myFunction();
console.log("global scope: ");
console.log(value);
```

`var` 는 Function Scope 로 선언이 되므로, if 문 블록 내부에서 선언한 value 값이 블록 밖의 value 에도 영향을 미치게 됩니다.

![](https://i.imgur.com/uHKGfKO.png)

### Hoisting 이해하기

Hoisting 이란, 자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미합니다.

다음 코드를 확인해보세요.

```javascript
myFunction();

function myFunction() {
  console.log("hello world!");
}
```

위 코드에서는 `myFunction` 함수를 선언하기 전에, `myFunction()` 을 호출해주었습니다. 함수가 아직 선언되지 않았음에도 불구하고 코드는 정상적으로 작동하게 됩니다.

이게 잘 작동하는 이유는, 자바스크립트 엔진이 위 코드를 해석하는 과정에서, 다음과 같이 받아들이게 되기 때문입니다.

```javascript
function myFunction() {
  console.log("hello world!");
}

myFunction();
```

이러한 현상을, Hoisting 이라고 부릅니다.

변수 또한 Hoisting 됩니다.

예를 들어서, 다음과 같은 코드를 실행한다면,

```javascript
console.log(number);
```

![](https://i.imgur.com/SQjmfQR.png)

이런 오류가 발생합니다.

그렇지만, 다음과 같은 코드는

```javascript
console.log(number);
var number = 2;
```

![](https://i.imgur.com/TIwGkJL.png)

`undefined` 가 출력됩니다.

자바스크립트 엔진이 위 코드를 해석 할 때는 다음과 같이 받아들이게 됩니다.

```javascript
var number;
console.log(number);
number = 2;
```

반면, `const` 와 `let` 은 hoisting 이 발생하지 않고, 에러가 발생하게 됩니다. Codesandbox 에서는 자바스크립트가 Babel 이라는 도구에 의하여 `const` 와 `let` 이 `var` 로 변환되기 때문에 오류가 발생하지 않습니다. Chrome 개발자 도구의 콘솔에서 다음 코드를 실행해보세요. (혹은 Codesandbox 의 설정에서 .babelrc 를 비워도 됩니다.

```javascript
function fn() {
  console.log(a);
  let a = 2;
}
fn();
```

![](https://i.imgur.com/sHIevmg.png)

Hoisting 은 자바스크립트 엔진이 갖고 있는 성질이며, Hoisting 을 일부러 할 필요는 없지만, 방지하는 것이 좋습니다. 왜냐하면 Hoisting 이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 힘들어지고 의도치 않는 결과물이 나타나기 쉽기 때문입니다.

Hoisting 을 방지하기 위해서, 함수의 경우 꼭 선언 후에 호출을 하도록 주의를 하시고, `var` 대신 `const`, `let` 을 위주로 사용하세요. 추가적으로, 나중에 자바스크립트 개발을 본격적으로 하게 될 때에는 ESLint 라는것을 사용하여 Hoisting 이 발생하는 코드는 에디터상에서 쉽게 발견해낼 수 있습니다.

# 3장. 자바스크립트에서 비동기 처리 다루기

자바스크립트의 동기적 처리와 비동기 처리에 대해서 알아봅시다.

![](https://i.imgur.com/hh3Mawr.png)

만약 작업을 동기적으로 처리한다면 작업이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없습니다. 그리고 작업이 끝나야 비로소 그 다음 예정된 작업을 할 수 있죠. 하지만 이를 비동기적으로 처리를 한다면 흐름이 멈추지 않기 때문에 동시에 여러 가지 작업을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.

그러면, 한번 코드를 보고 이해해봅시다.

연산량이 많은 작업을 처리하는 함수를 만들어보겠습니다.

우선, Codesandbox 의 설정에서 sandbox.config.json 을 열어서 Infinite Loop Protection 이라는 속성을 비활성화하세요.

![](https://i.imgur.com/nejYC6f.png)

그 다음에, index.js 를 다음과 같이 수정해보세요.

```javascript
function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + "ms");
}

work();
console.log("다음 작업");
```

여기서 Date.now 는 현재 시간을 숫자 형태로 가져오는 자바스크립트 내장 함수입니다. 위 work 함수는, 1,000,000,000 번 루프를 돌고, 이 작업이 얼마나 걸렸는지 알려줍니다.

![](https://i.imgur.com/jLvBqG8.png)

지금은 `work()` 함수가 호출되면, for 문이 돌아갈 때는 다른 작업은 처리하지 않고 온전히 for 문만 실행하고 있습니다.

만약 이 작업이 진행되는 동안 다른 작업도 하고 싶다면 함수를 비동기 형태로 전환을 해주어야하는데요, 그렇게 하기 위해서는 `setTimeout` 이라는 함수를 사용해주어야합니다.

코드를 다음과 같이 수정해보세요.

```javascript
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0);
}

console.log("작업 시작!");
work();
console.log("다음 작업");
```

`setTimeout` 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms 단위)이 흐른 후 호출해줍니다. 지금은 두번째 파라미터에 0을 넣었습니다. 따라서, 이 함수는 바로 실행이 됩니다. 0ms 이후에 실행한다는 의미이지만 실제로는 4ms 이후에 실행됩니다 [(참고)](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified). 이렇게 `setTimeout` 을 사용하면 우리가 정한 작업이 백그라운드에서 수행되기 때문에 기존의 코드 흐름을 막지 않고 동시에 다른 작업들을 진행 할 수 있습니다.

![](https://i.imgur.com/F6wmvsg.png)

결과물을 보면, 작업이 시작 되고 나서, for 루프가 돌아가는 동안 다음 작업도 실행되고, for 루프가 끝나고 나서 몇 ms 걸렸는지 나타나고 있습니다.

그렇다면, 만약에 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면 어떻게 해야 할까요? 이럴 땐, 콜백 함수를 파라미터로 전달해주면 됩니다. 콜백 함수란, 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미합니다.

```javascript
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback();
  }, 0);
}

console.log("작업 시작!");
work(() => {
  console.log("작업이 끝났어요!");
});
console.log("다음 작업");
```

![](https://i.imgur.com/3rvXGzS.png)

다음과 같은 작업들은 주로 비동기적으로 처리하게 됩니다.

- **Ajax Web API 요청**: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.
- **파일 읽기**: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.
- **암호화/복호화**: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.
- **작업 예약**: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.

비동기 작업을 다룰 때에는 callback 함수 외에도 Promise, 그리고 async/await 라는 문법을 사용하여 처리 할 수 있습니다. 이번 챕터에서는 이에 대하여 알아보게 됩니다.

## 01. Promise

프로미스는 비동기 작업을 조금 더 편하게 처리 할 수 있도록 ES6 에 도입된 기능입니다. 이전에는 비동기 작업을 처리 할 때에는 콜백 함수로 처리를 해야 했었는데요, 콜백 함수로 처리를 하게 된다면 비동기 작업이 많아질 경우 코드가 쉽게 난잡해지게 되었습니다.

한번 숫자 n 을 파라미터로 받아와서 다섯번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을 setTimeout 으로 구현해봅시다.

```javascript
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("끝!");
        });
      });
    });
  });
});
```

코드 읽기가 복잡하죠? 이런 식의 코드를 Callback Hell (콜백지옥) 이라고 부릅니다.

![](https://i.imgur.com/FDzn5s0.png)

비동기적으로 처리해야 하는 일이 많아질수록, 코드의 깊이가 계속 깊어지는 현상이 있는데요, Promise 를 사용하면 이렇게 코드의 깊이가 깊어지는 현상을 방지 할 수 있습니다.

### Promise 만들기

Promise 는 다음과 같이 만듭니다.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 구현..
});
```

Promise 는 성공 할 수도 있고, 실패 할 수도 있습니다. 성공 할 때에는 resolve 를 호출해주면 되고, 실패할 때에는 reject 를 호출해주면 됩니다. 지금 당장은 실패하는 상황은 고려하지 않고, 1초 뒤에 성공시키는 상황에 대해서만 구현을 해보겠습니다.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then((n) => {
  console.log(n);
});
```

resolve 를 호출 할 때 특정 값을 파라미터로 넣어주면, 이 값을 작업이 끝나고 나서 사용 할 수 있습니다. 작업이 끝나고 나서 또 다른 작업을 해야 할 때에는 Promise 뒤에 `.then(...)` 을 붙여서 사용하면 됩니다.

이번에는, 1초뒤에 실패되게끔 해봅시다.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
});

myPromise
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error);
  });
```

실패하는 상황에서는 `reject` 를 사용하고, `.catch` 를 통하여 실패했을시 수행 할 작업을 설정 할 수 있습니다.

이제, Promise 를 만드는 함수를 작성해봅시다.

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0).then((n) => {
  console.log("result: ", n);
});
```

![](https://i.imgur.com/S4bDqHz.png)

여기까지만 보면, 결국 함수를 전달하는건데, 뭐가 다르지 싶을수도 있습니다. 하지만, Promise 의 속성 중에는, 만약 then 내부에 넣은 함수에서 또 Promise 를 리턴하게 된다면, 연달아서 사용 할 수 있습니다. 다음과 같이 말이죠.

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.error(e);
  });
```

![](https://i.imgur.com/526Xcue.png)

위 코드는 이렇게 정리를 할 수 있습니다.

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch((e) => {
    console.error(e);
  });
```

Promise 를 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 됩니다.

하지만, 이것도 불편한점이 있긴 합니다. 에러를 잡을 때 몇번째에서 발생했는지 알아내기도 어렵고 특정 조건에 따라 분기를 나누는 작업도 어렵고, 특정 값을 공유해가면서 작업을 처리하기도 까다롭습니다. 다음 섹션에서 배울 async/await 을 사용하면, 이러한 문제점을 깔끔하게 해결 할 수 있습니다.

## 02. async/await

async/await 문법은 ES8에 해당하는 문법으로서, Promise 를 더욱 쉽게 사용 할 수 있게 해줍니다.

기본적인 사용법을 알아봅시다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!");
  await sleep(1000); // 1초쉬고
  console.log("반갑습니다!");
}

process();
```

async/await 문법을 사용할 때에는, 함수를 선언 할 때 함수의 앞부분에 `async` 키워드를 붙여주세요. 그리고 Promise 의 앞부분에 `await` 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다.

위 코드에서는 `sleep` 이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise 를 만들고, 이를 `process` 함수에서 사용해주었습니다.

함수에서 `async` 를 사용하면, 해당 함수는 결과값으로 Promise 를 반환하게 됩니다. 따라서 다음과 같이 코드를 작성 할 수 있습니다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!");
  await sleep(1000); // 1초쉬고
  console.log("반갑습니다!");
}

process().then(() => {
  console.log("작업이 끝났어요!");
});
```

`async` 함수에서 에러를 발생 시킬때에는 `throw` 를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용합니다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

![](https://i.imgur.com/5HndlIW.png)

이번에는, 비동기 함수를 몇개 더 만들어보겠습니다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

process();
```

현재 위 코드에서는 `getDog` 는 1초, `getRabbit` 은 0.5초, `getTurtle` 은 3초가 걸리고 있습니다. 이 함수들을 `process` 함수에서 연달아서 사용하게 되면서, `process` 함수가 실행되는 총 시간은 4.5초가 됩니다.

지금은 `getDog` -> `getRabbit` -> `getTurtle` 순서대로 실행이 되고 있는데요, 하나가 끝나야 다음 작업이 시작하고 있는데, 동시에 작업을 시작하고 싶다면, 다음과 같이 `Promise.all` 을 사용해야합니다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
}

process();
```

![](https://i.imgur.com/cQtv48g.png)

만약에 여기서 배열 비구조화 할당 문법을 사용한다면 각 결과값을 따로 따로 추출해서 조회 할 수 있습니다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle(),
  ]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}

process();
```

`Promise.all` 를 사용 할 때에는, 등록한 프로미스 중 하나라도 실패하면, 모든게 실패 한 것으로 간주합니다.

이번에는 `Promise.race` 라는 것에 대해서 알아봅시다. 이 함수는 `Promise.all` 과 달리, 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 가져옵니다.

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process();
```

`Promise.race` 의 경우엔 가장 다른 Promise 가 먼저 성공하기 전에 가장 먼저 끝난 Promise 가 실패하면 이를 실패로 간주합니다. 따라서, 현재 위의 코드에서 `getRabbit` 에서 에러를 발생시킨다면 에러를 잡아낼 수 있지만, `getTurtle` 이나 `getDog` 에서 발생한 에러는 무시됩니다.

# 4장. HTML 과 JavaScript 연동하기

HTML 을 사용하면 브라우저에서 우리가 보여주고 싶은 UI (유저 인터페이스) 를 보여줄 수 있습니다. 만약에 사용자의 인터랙션 (상호작용) 에 따라 동적으로 UI 를 업데이트하고 싶다면, JavaScript 를 연동해주어야 합니다.

보통 인터랙션이 많은 경우에는 Vanilla JavaScript (별도의 라이브러리/프레임워크를 사용하지 않는 형태) 를 사용해서 하기에는 코드의 양도 많아지고 코드 관리도 어려운 편이라 보통 React, Vue, Angular 등의 도구를 사용합니다.

그래도, 해당 도구 없이 하는 기본적인 방법 또한 이해를 해둬야 앞으로 라이브러리/프레임워크를 공부하게 될 때 이해에 도움을 주므로, 간단한 예제 몇가지를 함께 만들어보겠습니다.

## 01. 카운터

첫번째로 만들어볼것은, 버튼을 클릭하면 숫자가 올라가거나 내려가는 카운터입니다. CodeSandbox 에서 새로운 Vanilla 샌드박스를 만들고, index.js 파일 내용은 비우고, index.html 을 다음과 같이 수정해보세요.

### UI 만들기

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h2 id="number">0</h2>
    <div>
      <button id="increase">+1</button>
      <button id="decrease">-1</button>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>
```

![](https://i.imgur.com/pD4FYbQ.png)

위와 같은 결과물이 나타났나요? 우리가 보여준 `h2` 와 `button` 태그에 `id` 값을 설정해주었는데요, 이렇게 `id` 값을 설정해주면 JavaScript 에서 쉽게 해당 DOM 을 선택 할 수 있습니다. 여기서 DOM 이란, 각 태그에 대한 정보를 지니고 있는 JavaScript 객체입니다.

### DOM 선택하기

우선, DOM 을 선택해봅시다. index.js 를 다음과 같이 수정해보세요.

```javascript
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number);
console.log(increase);
console.log(decrease);
```

![](https://i.imgur.com/8hqsuiZ.png)

각 DOM 에 내장되어있는 기능들은 [정말 다양하지만](https://developer.mozilla.org/en-US/docs/Web/API/Element) 그 중에서 중요한것 몇가지만 사용해보겠습니다.

```javascript
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number.innerText); // 내용
console.log(increase.offsetTop); // top 위치
console.log(decrease.id); // id
```

![](https://i.imgur.com/54OuPQB.png)

### 이벤트 설정하기

이제 DOM 이벤트를 설정해봅시다. 버튼들이 클릭 됐을 때 콘솔에 텍스트를 출력하는 이벤트를 설정해보겠습니다.

```javascript
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  console.log("increase 가 클릭됨");
};

decrease.onclick = () => {
  console.log("decrease 가 클릭됨");
};
```

버튼들을 클릭했을 때 콘솔에 우리가 설정한 텍스트들이 출력되는지 확인해보세요.

DOM 에 이벤트를 설정 할 때에는 `on이벤트이름` 값에 함수를 설정해주면 됩니다. DOM 이벤트의 종류는 정말 [다양](https://developer.mozilla.org/ko/docs/Web/Events)합니다.

그럼 이제, 버튼들이 클릭될 때 숫자값을 올리거나 내려보겠습니다.

```javascript
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
```

`parseInt` 는 문자열을 숫자로 변환해주는 함수입니다. 두번째 10을 넣어준 것은, 10진수로 숫자를 받아오겠다는 의미입니다.

![](https://i.imgur.com/ssFSKEx.gif)

잘 작동하나요?

[![Edit cool-ramanujan-tqdvh](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cool-ramanujan-tqdvh?fontsize=14)

## 02. 모달 만들기

모달이란, 다음 이미지와 같이 기존의 내용을 가리고 나타나는 메시지박스 같은 형태의 UI 를 의미합니다.

![](https://i.imgur.com/FRt5Agc.png)

이번에는 이런 UI 를 HTML 과 JavaScript 를 사용하여 만들어보겠습니다.

우선, Codesandbox 에서 새로운 Vanilla Sandbox 를 만드세요.

그리고, index.js 를 열고 맨 위 `import "./styles.css";` 하단의 코드를 지워주세요. 이번에 우리는 스타일링을 할 것이기 때문에 css 를 불러와야 합니다.

그 다음에, index.html 을 열어서 다음과 같이 수정해보세요.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button>버튼 열기</button>
    <script src="src/index.js"></script>
  </body>
</html>
```

![](https://i.imgur.com/q6IowoG.png)

이렇게 화면이 나타났나요?

그 다음엔, 버튼 아래에 다음 내용을 보여주세요.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button>버튼 열기</button>
    <div class="modal-wrapper">
      <div class="modal">
        <div class="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div class="close-wrapper">
          <button>닫기</button>
        </div>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
```

그러면 다음과 같이 보여질텐데요

![](https://i.imgur.com/H05agKs.png)

여기에 CSS 로 스타일링을 해보겠습니다.

src 디렉터리 안에 들어있는 styles.css 파일을 열어서 다음과 같이 수정해보세요.

```css
body {
  font-family: sans-serif;
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 24px 16px;
  border-radius: 4px;
  width: 320px;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
}

.modal p {
  font-size: 16px;
}

.close-wrapper {
  text-align: right;
}
```

그럼 다음과 같이 나타날 것입니다.

![](https://i.imgur.com/FRt5Agc.png)

### display 스타일을 사용하여 모달 열고 닫기

이제 모달을 열고 닫는 기능을 구현해보겠습니다. 방법은 굉장히 간단한데요, 바로 `display` 스타일을 사용하는 것 입니다. index.html 을 다음과 같이 수정해보세요. .modal-wrapper 쪽에는 인라인 스타일이 추가되었고, 각 버튼에 `id` 가 붙었습니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button id="open">버튼 열기</button>
    <div class="modal-wrapper" style="display: none;">
      <div class="modal">
        <div class="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div class="close-wrapper">
          <button id="close">닫기</button>
        </div>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
```

`display: none;` 스타일을 사용하게 되면 해당 엘리먼트는 화면에서 숨겨지게됩니다.

이제, index.js 를 열어서 버튼과 모달의 DOM 을 선택해주고, 클릭 이벤트를 설정해주세요

```javascript
import "./styles.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
```

`id` 가 아닌 클래스로 DOM을 선택하고 싶을땐 `document.getElementsByClassName` 또는 `document.querySelector` 를 사용하면 됩니다. `document.querySelector` 를 사용하여 class 값으로 DOM 을 선택 할 때에는 텍스트 앞에 `.` 을 붙여주어야 합니다.

이제 버튼들을 눌러보세요. 잘 작동하나요?

![](https://i.imgur.com/0MqEVWr.gif)

[![Edit vigorous-shadow-dx22s](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vigorous-shadow-dx22s?fontsize=14)
