# This Is What I've Learnt

## 2022-10-27

### 카카오 2018 기출 1 - 비트 연산자

`00-basic\Technical-Interviews-and-Algo\3)코딩테스트기출문제.md`  
**비밀지도 문제**

1. 인풋 받기 - 함수 표현식을 이용한 화살표 함수로 리턴을 할 수 있음.
2. Number에 비트연산을 진행할 수 있으며, Number.prototype.toString(2)을 통해 숫자형을 2진수로 변경할 수 있음.
3. String.prototype.padStart(목표길이Number, 채우는문자String)를 통해 문자열의 길이를 맞출 수 있음.
4. 정규표현식은 `/패턴/플래그` 형식으로 작성할 수 있으며, 문자열 메서드에 사용됨.

### 면접 대비 - 프로세스와 스레드

`00-basic\Technical-Interviews-and-Algo\1)기술면접기본질문.md` - 1번 문제

1. 프로세스는 프로그램의 실행 단위이다.
2. 스레드는 프로세스보다도 작은 실행단위의 최소로, 여러 개의 스레드는 공유되는 데이터를 가질 수 잇다.
3. 멀티 스레딩은 preemptive scheduling을 사용하는 만큼 경쟁 조건과 상호 배제의 문제가 발생할 수 있음.

### Vue JS

`04-MINI-PROJECT\Vue-with-a-cup-of-coffee` ~166p

1. 환경 설정
2. CSS 초기화
3. 컴포넌트 폴더를 만들고 모듈 export, import
4. 하나의 뷰 컴포넌트는 `<templete>`, `<script>`, `<style>`를 하나의 파일로 지원함.

## 2022-10-28

### 면접 대비 - 데몬

### 면접 대비 - 메모리

1. 메모리의 구조는 레지스터, 캐시, 메모리(주기억장치), 저장장치(보조기억장치) 로 구성되어 있다.
2. 캐싱 : 느린 저장장치에서 빠른 저장장치로 저장하는 것. 캐싱을 위한 알고리즘이 있으며, 기본적으로 지역성의 원리(공간 지역성과 시간 지역성)
3. 가상 메모리의 스와핑
4. 메모리 할당의 페이지네이션

### 카카오 2018 기출 2 - 문자열 처리, 강제형변환

`00-basic\Technical-Interviews-and-Algo\3)코딩테스트기출문제.md`  
**다트 게임**

1. `eval(문자열)` : 문자열을 평가하여 값을 반환한다. 보안 문제가 있어 비권장.
2. `String.prototype.match(/[A-Z]/g)` : 문자열이 정규 표현식에 매칭되는지를 확인한다. /g 플래그를 사용하는 경우 배열로 반환한다.
3. `isNaN(문자열)` : 문자열을 숫자로 강제 형변환을 시도한 후 NaN인지를 평가한다. 숫자인 경우 false를 반환한다.
4. `Number.prototype.isNaN(문자열)` : 문자열에 강제 형변환을 하지 않고 NaN인 경우에만 true를 반환한다. 나머지 경우에는 false를 반환하므로 유의한다.
   일반적인 경우 isNaN을 사용하여 숫자를 판별할 수 있지만, 일관적이지 않다는 점에 유의.
   따라서 문자열에 `-0`을 하여 자동형변환을 시도해보면 일관적인 결과를 얻을 수 있다.

```js
function IsNumeric(input) {
  input = input.trim(); //공백문자인 경우 length를 0으로 바꾸기
  return input - 0 == input && input.length > 0;
  // -0으로 강제형변환을 했는데,
  // 형변환 전과 모양이 같고,
  // 문자열 길이가 0 이상이면 숫자.
}
```

## 2022-10-31
### Vue.js 메모 어플리케이션 만들기
`04-MINI-PROJECT\VUE2-with-a-cup-of-coffee\memo-application`
1. `v-model`디렉티브는 양방향 바인딩을 지원한다. 이벤트를 통해 데이터르 변경할 때 사용된다. 
2. 이벤트에밋(`$emit`)은 자식에서 부모로 데이터를 전달할 때 사용한다. 부모 노드는 이벤트 핸들러를 통해 해당 데이터를 payload받는다. 
3. vue에서 CRUD를 구현할 때에는 자바스크립트의 Array.memos.splice(시작 인덱스, 삭제할 갯수, 삽입할 값)와 Array.prototype.findIndex(콜백함수)를 이용한다.
4. 자식 요소에서 $emit으로 부모노드에게 id를 넘겨주면, 부모 노드는 해당 id값을 payload받아 findIndex한다. 해당 인덱스를 splice값에 넣어 CRUD를 구현할 수 있다.  
5. Vue에서는 `<template>`라는 태그가 자주 사용된다. 해당 태그는 자바스크립트를 통해 컨트롤 될 수 있으며, `<div>`태그 등은 비어있는 요소일 때에도 여백을 갖는 경우가 있지만, `<template>`는 비어있는 경우 아에 마운트되지 않는다.
6. 태그에 `ref="content"`값을 준 경우, 데이터 및 메서드에서 `this.$refs.content`로 접근할 수 있다.
7. 메서드에서 data를 변경한 후 리렌더링를 원하는 경우 리렌더링이 안되는 경우가 있다.(자바스크립트에서 데이터의 조작과 DOM트리의 업데이트는 비동기적으로 이루어진다.) 리렌더링으로 처리할 내용들을 this.$nextTick(콜백함수)안에 담아주면 이를 우회할 수 있다.

## 2022-11-01
### 면접 대비 - 데이터 베이스
`00-basic\Technical-Interviews-and-Algo\1)기술면접기본질문.md`
1. 엔터티 : 어트리뷰트를 갖는 명사.
2. 릴레이션 : 하나의 엔터티에 관한 데이터를 담는 것. '테이블' 혹은 '컬렉션' 이라고도 부른다.  
3. 속성과 도메인 : 속성(어트리뷰트)에 들어갈 수 있는 범위를 도메인('남', '녀' 등)
4. 필드와 레코드 : 필드는 칼럼(열), 레코드(행)
5. 정규화 : PK를 기준으로 나누자. 정규화가 무조건 성능을 보장하지는 않는다. 필요한 경우 비정규화. 
6. 인덱스 : 리프노트가 늘어가는 속도에 비해 계층이 늘어나는 속도가 4배 적다. 하지만 인덱싱은 그 자체로 비용이 발생할 수 있다.
7. 조인 : 내부조인, 왼쪽조인, 오른쪽 조인, 합집합 조인.

### 자바스크립트 딥다이브 16장 프로퍼티 어트리뷰트
1. 내부 슬롯, 내부 메서드
    `[[ ]]`로 감싸진 메서드와 프로퍼티는 자바스크립트엔진에서 동작하지만 개발자가 직접 접근할 수는 없다. 예외적으로 Prototype 등의 일부 내부 슬롯은 간접적으로 접근할 수 있다.   
2. 프로퍼티 어트리뷰트
   객체 내부에 프로퍼티를 정의할 때에, `[[Value]], [[Writable]], [[Enumerable]], [[Configurable]]`의 내부 슬롯을 자동으로 정의한다. 기본값은 true이다.   
3. 프로퍼티 디스크럽터
   Object.getOwnPropertyDescriptor(객체명, '프로퍼티 키값') 메서드를 호출하면 `{프로퍼티 디스크립터}`를 반환한다.
   Object.getOwnPropertyDescriptors(객체명)은 객체의 모든 프로퍼티에 대한 프로퍼티 디스크립터를 `키값: {프로퍼티 디스크립터}`를 반환한다.

4. 데이터 프로퍼티와 접근자 프로퍼티
   firstName, lastName이라는 데이터 프로퍼티가 있고, fullName이라는 접근자 프로퍼티가 있는 person 객체가 있다. 
```js
const person = {
    firstName: 'steve',
    lastName: 'jobs',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    get fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person.full)
// steve jobs
```

데이터 프로퍼티의 예시는 아래와 같다
```js
Object.getOwnPropertyDescriptor(person, 'firstName');
// {value: "steve", writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(person, 'fullName');
// {get: f, set: f, enumerable: true, configurable: true}
```
접근자 프로퍼티는 getter 혹은 setter를 가질 수 있다.  

prototype도 getOwnPropertyDescriptor를 통해 확인해보자. 
아래와 같이 객체의 __proto__는 접근자 프로퍼티이며, 함수의 prototype은 데이터 프로퍼티이다. 함수의 prototype 객체는 Constructor()가 작동할 때에 프로토타입을 넘겨주기 위해 사용된다.  
```js
Object.getOwnPropertyDescriptor(person, 'firstName');
// {value: "steve", writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(person, 'fullName');
// {get: f, set: f, enumerable: true, configurable: true}
```

5. 프로퍼티 정의
`Object.defineProperty(person, '프로퍼티명', {프로퍼티 디스크립터})`를 통해 프로퍼티를 재정의할 수 있다.   
`Object.defineProperties(person, {프로퍼티명: {프로퍼티 디스크립터}})`의 형태로 여러개의 프로퍼티를 동시에 정의할 수도 있다.  
이때 프로퍼티 디스크립터에 전달되지 않은 프로퍼티 value, get, set은 undefined를 기본값으로 정의되며, writable, enumerable, configurable은 false를 기본값으로 정의된다. 특히 configurable이 false인 경우 재정의가 불가능하여 삭제 및 프로퍼티 어트리뷰트 값의 변경이 금지됨에 유의(단, writable이 true인 경우 value값을 변경하거나 writable을 false로 바꾸는 것은 가능). 프로퍼티가 최초로 생성될 때 이들은 true로 초기화되는 것과는 상반된다.  

```js
Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`
    },
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// {get: f, set: undefined, enumerable: true, configurable: false}

delete person.fullName;
// Uncaught TypeError: Cannat redefine property: lastName
```

6. 객체 변경 금지
객체는 mutable하므로 값에 직접 접근하여 변경 및 삭제하거나 Object.defineProperty를 이용해 프로퍼티 어트리뷰트를 재정의할 수도 있다. 이를 방지하기 위해 아래의 메서드를 재공한다.  
객체 변경 금지 메서드로 금지된 행위는 무시되며, strict mode에서는 에러 메세지를 내보낸다.

|구분|메서드|check|프로퍼티 추가|삭제|프로퍼티 값 읽기|쓰기|프로퍼티 어트리뷰트 재정의|
|---|---|---|---|---|---|---|---|
|객체 확장 금지|Object.preventExtensions(객체명)|Object.isExtensible(객체명)|x|o|o|o|o|
|객체 밀봉|Object.seal(객체명)|Object.isSealed(객체명)|x|x|o|o|x|
|객체 동결|Object.freeze(객체명)|Object.isFrozen(객체명)|x|x|o|x|x|

```js
Object.freeze(person);

delete person.fullName;
console.log(person.fullName) // steve jobs
```

해당 변경금지 메서드는 얕은 금지만 가능하다. 중첩된 객체에도 적용하기 위해서는 재귀적으로 실행해야 한다. 아래의 재귀함수는  
1-target이 존재하며
2-target이 오브젝트이며
3-target이 Frozen상태가 아닌 경우
target을 freeze하고 target의 자식요소에 대해 재귀적으로 1~3을 반복하며 동결되지 않은 자식 객체들을 동결한다.  

```js
function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target; //처리된 타겟을 리턴하며 함수종료
}
```
이때 typeof 연산자는 피연산자의 평가전 자료형을 문자열 형태로 반환한다.  

## 2022-11-02
### 면접 대비 - 자료구조
1. 시간 복잡도

|자료 구조|접근(O(평균) \ O(최악))| 탐색 | 삽입 | 삭제 |
|---|---|---|---|---|
|Array|1 \ n|n \ n | n \ n | n \ n |
|Stack|n \ n|n \ n | 1 \ 1 | 1 \ 1 |
|Queue|n \ n|n \ n | 1 \ 1 | 1 \ 1 |
|Doubly Linked List|n \ n|n \ n | 1 \ 1 | 1 \ 1 |
|Hash Table|1 \ n|1 \ n | 1 \ n | 1 \ n |
|Binary Search Tree|logn \ n|logn \ n | logn \ n | logn \ n |
|Adelson-Velsty and Landis Tree|logn \ logn|logn \ logn | logn \ logn | logn \ logn |
|Red-black Tree|logn \ logn|logn \ logn | logn \ logn | logn \ logn |

2. 선형 자료 구조
- 연결 리스트 : 노드를 데이터로 감싸고, 포인터로 다음 노드를 가르킴.
  - 싱글 연결 리스트 : next 포인터만 있음.
  - 이중 연결 리스트 : next 포인터와 prev 포인터를 가짐.
  - 원형 이중 연결 리스트 : 마지막 포인터의 prev가 헤드 노드(연결 리스트의 가장 앞 노드)를 가리킴

- 배열 : 같은 타입의 변수들로 이루어진, 크기가 정해진, 인접한 메모리의 데이터 집합. 
  - 연결 리스트와의 차이 : 연결 리스트는 데이터의 추가와 삭제가 자유롭지만, 랜덤 접근에 O(n)만큼의 시간 복잡도. 반면 배열은 랜덤 접근은 O(1)만큼의 시간복잡도, 데이터의 추가와 삭제는 O(n)만큼의 시간 복잡도. 

- 벡터 : 동적으로 요소를 할당할 수 있는 동적 배열(정해진 크긱 없음).
  - push_back() : 가장 뒤에 데이터를 주가한다. 데이터의 갯수n이 2^k + 1개가 될 때마다 배열의 크기를 2배 늘린다. 해당 연산이 3n만큼의 시간이 걸리고, 이를 데이터의 갯수n으로 나누면(amortized) 총 3만큼의 시간이 든다. 즉 O(1)이라는 amortized 시간복잡도를 갖는다.

- 스택 : 재귀함수, 웹 브라우저 방문기록 등.
- 큐 :  CPU의 프로세스 큐, 네트워크, 너비우선 탐색 등


3. 비선형 자료 구조
- 그래프 : 정점(vertex)이 간선(edge)으로 다른 정점에 연결됨. 이때 정점의 입장에서 나가는 간선들을 outdegree, 들어오는 간선들을 indegree라고 하며, outdegreed, indegree를 가지고 서로 연결되어 있는가에 따라 단방향, 양방향이 결정됨.

- 트리
  - 루트는 트리당 하나 : 루트 노드가 같으면 같은 노드임.
  - 리프 노드는 자식이 없는 노드.
  - 최소한의 간선 갯수로 연결 됨. 따라서 (간선 수) = (노드 수 - 1)
  - 깊이 : 루트 노드부터 목표한 노드까지의 최단거리
  - 레벨 : 일반적으로 루트 노드의 레벨을 0으로 두어 깊이와 같은 의미. 루트 노드의 레벨을 1로 두는 경우도 있음.  

- 이진 트리 : 자식 노드가 최대 2개
- 정이진 트리 : 자식 노드가 0 또는 2개
- 완전 이진 트리 : 왼쪽부터 채워지는 이진트리. 모두 채워져 있고 마지막 레벨은 왼쪽부터 채워진다.
- 변질 이진 트리 : 자식 노드가 1개
- 포화 이진 트리 : 모든 노드가 꽉 차서 마지막 레벨까지 꽉 찬 이진 트리.
- 균형 이진 트리 : 왼쪽과 오른쪽 노드의 높이 차이가 1 이하인 이진트리. 

- 이진 탐색 트리
부모 노드에 비해 왼쪽 자식노드는 작고 오른쪽 자식노드는 크게 배치.  
이때 삽입 순서에 따라 트리 구조가 무너질 수 있어 '균형 이진 트리' 형태를 만드는 'Adelson-Velsty and Landis Tree', 'Red-black Tree'를 만든다. AVL Tree는 데이터가 삽입될 따마다 트리의 일부를 회전시키며 균형을 잡는다. Red-black Tree는 '어떤 빨간 노드의 자식으로는 무조건 검은 노드가 두 개 온다' 등의 규칙이 있다.  

- 힙
트리 구조를 응용. 최소힙과 최대힙 등이 있다. 
힙은 삽입, 삭제 시 logN의 시간 복잡도를 갖는다.  
힙을 이용해 우선순위 큐를 구현한다.  

- 맵
키와 값의 조합. 이때 키는 문자열. 순서의 유무에 따라 ordered_map과 unordered_map으로 구분됨. 해시 테이블을 만들 때 사용.

- 해시 테이블
무한의 데이터를 유한의 해시 값으로 매핑한 테이블. unordered_map이 사용되며 평균적으로 O(1)의 삽입, 삭제, 탐색 시간을 가짐.

- 셋
집합. 순서 및 중복이 없는 컨테이너. 


### https://www.greatfrontend.com/
프론트 엔드 문제 

### Vue.js Axios의 이해
`04-MINI-PROJECT\VUE2-with-a-cup-of-coffee\memo-application`  
1. Promise란 비동기적으로 처리되는 연산의 결과값을 담는 객체이다. pending, resolve, reject의 값을 갖는다.
2. async는 함수 앞에 사용하며, async f()가 반환하는 값은 항상 promise이다.
3. await는 async f() 안에서만 사용할 수 있으며, promise를 처리한 결과 값을 반환한다.
4. async-await 구분은 주로 try-catch 구분을 통해 사용한다. `async function f(){ try { await g(response){ 응답 처리 } } catch(error) { 에러 처리 } finally { 예외 처리 }}`
5. Axios는 서버의 응답을 처리하여 promise를 반환하는 모듈이다. 해당 반환값을 이용해서 try-catch 등을 처리한다.
Axios의 메서드 예시
```js
`axios.get(url[, config])` - config는 설정을 의미한다.   
`axios.post(url[, data, config])`  
`axios.put(url,data[, config])`  
`axios.patch(url, data[, config])`  
`axios.delete(url[, config])`  
```

Axios를 통해 만들어지는 promise의 결과값 response 객체 예시 
```js
{
  data: {},
  status: 200,
  statueText: 'OK',
  config: {}, //서버로 요청을 보냈을 때 어떤 설정을 가지고 있었는지를 의미
  request: {},
}
```
6. import 된 Axios모듈은 axios.defaults, axios.create() 등을 이용하여 옵션을 수정할 수 있다.  

#### 서버 실행하기
`...VUE2-with-a-cup-of-coffee\RESTful-api-server-master` 폴더에 예제 RESTful-api-server를 NodeJS로 구축해두었다.    
`cd ./RESTful-api-server-master`  
`npm install`  
`npm run dev`  

## 2022-11-03
### 자바스크립트 딥다이브 17장 생성자 함수에 의한 객체 생성
생성자 함수는 `const person = new Object();`와 같은 방식으로 객체를 생성하는 것을 의미한다.  
객체 리터럴은 
```js
const person = {
  name: 'james',
  sayHello() {
    return '안녕하세요';
  }
};
```
와 같이 생성하는 방식이다. 

객체 리터럴은 여러개의 프로퍼티를 반복적으로 기술해야 하는 문제점을 가지고 있다. 

#### 생성자 함수를 통한 객체의 생성
함수는 다음의 특징을 갖는다.
1. 함수도 객체이다. 객체의 내부 슬롯과 내부 메서드를 가지고 있다.
2. 추가로 함수는 `[[Call]]`, `[[Construct]]`와 같은 내부 메서드를 가지고 있다.
3. 이를 이용하여 함수를 호출하면 Call이 실행되고, new라는 키워드와 함께 함수를 호출하면 Construct가 호출된다.

`new f()`는 다음의 순서로 진행된다.
1. this가 바인딩 된다. (바인딩이란, 어떠한 식별자가 값에 연결되는 것을 의미한다. this란 암묵적인 식별자이며, 이것이 바인딩되는 것을 의미한다. 
일반 함수를 호출하면 this는 전역 객체를 의미하며,  
메서드로 호출하면 this는 메서드를 가진 객체를 의미하며,  
생성자 함수를 호출하면 this는 **생성자 함수가 생성할 인스턴스**를 의미한다.)
2. 인스턴스를 개발자가 초기화한다. 가령 `function Cicle(radius) { this.radius = radius; }`와 같은 방식으로 받아준다.
3. `New f()`는 **생성된 인스턴스를 반환한다**. 이때 특정 값을 return하면 인스턴스가 리턴되지 않고 해당 값이 반환된다. 따라서 **생성자 함수에는 return을 관습적으로 생략한다.**

#### constructor와 non-constructor
- constructor : 함수 선언문, 함수 표현식, 클래스
- non-constructor: 메서드(ES6의 메서드 축약표현), 화살표 함수
여기서 메서드란
```js
//1 메서드
const obj = {
  x(){}
}

//2. 메서드가 아닌 일반 함수로 인식됨
const obj2 = {
  x: function () {}
}
```

즉 ES6에서 추가된 메서드 축약표현과 화살표함수는 non-constructor로 분류된다.  


#### new.target 부분 추가 바람!!


### 자바스크립트 딥다이브 17장 생성자 함수에 의한 객체 생성
