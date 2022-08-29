https://www.w3schools.com/js/js_htmldom.asp  
https://velog.io/@johnque/JavaScript-HTML-DOM  
https://www.youtube.com/watch?v=XGKdimCHzw8  
https://yung-developer.tistory.com/m/79  
[[JavaScript] 자주 사용하는 DOM API 정리](https://seokzin.tistory.com/entry/JavaScript-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-DOM-API-%EC%A0%95%EB%A6%AC)

# HTML DOM

## DOM이란?
DOM : 브라우저가 생성하는 문서 객체 모델. HTML의 모든 요소(태그를 이루는 그 녀석들, 여는 태그 안에 들어가는 그 속성들, 태그로 감싸져 있는 그 텍스트들)(객체)를 트리 구조로 만듬.

**DOM Tree의 요소**  
![돔트리](/src/images_johnque_post_360715d7-c9d9-4fb9-bf31-71db04375ea0_image.png)

**Document** : 최상위 요소  

**Root element** : 최상위 부모요소 (`<html>`)  
Element(요소) : 태그로 만든 그놈들 (`<head>`, `<article>` 등)  

**Attribute(속성)** : 여는 태그 안에 들어간 그놈들. (`"href"`)   

**Text** : 태그로 둘러 쌓인 그 콘텐츠. DOM은 텍스트만 인식하여 요소(엘리먼트)로 취급함.  


이때 DOM Tree를 구성하는 모든 객체들을 node라 할 수 있으며,  `<a>, href, "네이버"`

태그를 만드는 놈들만 칭할 땐 Element라 한다. `<a>`


## 메서드와 프로퍼티
**메서드** : 자바 스크립트가 HTML의 요소에 취할 수 있는 뭐시기Action.   

**프로퍼티** : HTML 요소 속 바꾸거나 설정할 수 있는 값Values들.  
  
<BR>
<BR>

### 메서드와 프로퍼티 예시
`getElementById()` : 요소를 선택하는 가장 흔한 방법.   
`innerHTML` : 요소의 컨텐츠를 의미하는 프로퍼티.  

```HTML
<body>
  <p id="demo"></p>
  
  <script>
    document.getElementById("demo").innerHTML = "Hello World!";
  <script>
</body>
```
위 예시에서

1. `document` 객체의 `getElementById()`메서드로 `<p>` 엘리먼트를 불러옴.  
2. `<p>` 엘리먼트의 `innerHTML`이라는 프로퍼티에 접근해서 값으로 "Hello World!"를 주었음.

따라서 자바스크립트로 `<p id="demo"></p>` 라는 요소를 `<p id="demo">Hello World!</p>`로 바꾸었음.  

`window.document.getElementById("demo").innerHTML = "Hello World!";`  
`우리엄마window딸document아 주전자element가져와서.get() 안에다가.property 물value 좀 채워`






## 메서드
### 요소 찾기 document.메서드()
```
document.getElementById("id명")
document.getElementsByTagName("태그명")
document.getElementsByClassName("클래스명")
```

<br>
<br>

### 요소 수정하기 element.프로퍼티
```
element.innerHTML = 새로운 HTML 내용
태그안의 내용물을 바꿔줍니다.

element.attribute = new value
요소의 attribute를 바꿔줍니다.

element.style.property = new style
요소의 스타일을 바꿔줍니다.

element.setAttribute(attribute, value)
요소의 attribute를 value로 설정해줍니다.
```

### 요소 추가/삭제 document.프로퍼티
```
document.createElement(element)
새로운 HTML 요소를 생성합니다.

document.removeChild(element)
기존의 HTML 요소를 삭제합니다.

document.appendChild(element)
HTML 요소를 더해줍니다. create로 만들고, append를 통해 적용합니다.

document.replaceChild(new, old)
HTML 요소를 replace 해줍니다.

document.write(text)
HTML 아웃풋 스트림을 통해 출력합니다.
```

### 요소, 노드 선택하는 element.프로퍼티 정리

| |모든 노드| 요소 노드 (element)|
|---|---|---|
|부모|parentNode|parentElement|
|자식|childNodes <br> firstChild <br> lastChild|children <br> firstChild <br> lastChild|
|형제|previousSibling <br> nextSibling | previousElementSibling <br> nextElementSibling|
||document.querySelector(cssSelector)||

모든 노드를 선택하면 NodeList를 반환한다.   
Element를 선택하면 HTMLCollection을 반환한다.   

**NodeList** : querySelectorAll 등의 메서드가 반환하는 NodeList 객체는 노드 객체의 상태 변화를 반영하지 않는 non-live DOM 컬렉션 객체입니다. 하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollection 객체와 같이 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작합니다. 유사배열객체로서 .forEach() 메서드와 .item(idx)메서드를 지원한다.  

**HTMLCollection** : getElementsByTagname, getElementsByClassName 메서드가 반환하는 HTMLCollection 객체는 노드 객체의 상태 변화를 실시간으로 반영하는 살아있는 live DOM 컬렉션 객체입니다.   

**배열로 반환하기**
NodeList가 유사배열 객체이긴 하지만, NodeList와 HTMLCollection 모두 배열로 반환하여 사용하는 것이 좋다. Array.from(); 메서드를 사용한다.  

`let arr = Array.from(document.querySelectorAll('h1'));`



### 노드 생성, 추가, 복제, 삭제 실습

```html
<ul id="testUl">
    <li> 인사 나 할까? </li>
</ul>
```
텍스트를 수정해보자.
```js
const ul = document.getElementById('testUl');
ul.textContent = 'xxxx'
```
```html
<ul id="testUl">
    xxxx
</ul>
```
통째로 바뀌어 버렸다. 태그를 같이 넣어주자.  
`ul.textContent = '<li id='speak'> 영어로 인사 해 </li>'`
```html
<ul id="testUl">
    <li id='speak'> 영어로 인사 해 </li>
</ul>
```

<br>
이제 리스트 요소를 추가하는 법을 알아보자.   
<br>  




```js
// (1) 우선 객체를 하나 만든다. // <li></li>
const newLi = document.createElement('li');

// (2) 객체의 프로퍼티에 밸류를 추가한다. // <li>hello world!<li>
nweLi.innerHTML = "hello world!"

//(3) 해당 객체를 append한다.
const ul = document.getElementById('testUl');
ul.appendChild(newLi);
```
```html
<ul id="testUl">
    <li id='speak'> 영어로 인사 해 </li>
    <li> hello world! </li>
</ul>
```

<br>
<br>


**insertBefore(삽입할 요소, 기준이 될 요소)**를 통해 특정 위치에 삽입하거나 특정 위치로 옮길 수 있다.

```js
const speak = document.getElementById('speak');
insertBefore(newLi, speak)
```
```html
<ul id="testUl">
    <li> hello world! </li>
    <li id='speak'> 영어로 인사 해 </li>
</ul>
```
speak 엘리먼트의 위로 자리가 옮겨졌다.   

노드를 복사할 때에는 **.cloneNode(True)**;  
<br>
`const cloneNewLi = newLi.cloneNode();`  
그냥 복사하면 `<li></li>`로 엘리먼트만 복사된다.  
<br>

`const newCloneNewLi = newLi.cloneNode(True);`  
?deep 값에 True를 넣어 `<li> hello world! </li>` 딥카피가 완료됐다.  

<br>
<br>

제거를 할 때에는 **.removeChild(요소명)**
`ul.removeChild(speak);`
<br>

```html
<ul id="testUl">
    <li> hello world! </li>
</ul>
```
<br>

`ul.removeChild(ul.lsatElementChild);`
```html
<ul id="testUl">
</ul>
```

### 스타일 제어하기
.style에 접근하여 프로퍼티와 값을 줄 수 있다.  
이때 스타일의 프로퍼티명이 backgorund-color이 아닌 backgroundColor와 같은 카멜케이스인 점에 유의.    
```js
ul.style.backgroundColor = 'red';
ul.style.color = '#fff';
```

아래와 같이 class어트리뷰트의 값을 변경하는 것도 CSS라이브러리를 쓸 때 용이하다.  
```js
box.className = 'bg-red mt-3'
```

classList에 접근하여 add를 하는 것도 가능하다.
```js
box.classList; //DOMTokenList(2) ['bg-red', 'mt-3', value: 'bg-red mt-3]
box.classList.add('txt-white');
box.classList.remove('mt-3');
box.classList.replace('bg-red', 'bg-blue');
box.classList.toggle('bg-blud'); // toggle은 특정 토큰을 비활성화/활성화 한다. 이벤트에 주로 쓰인다.
```


## 이벤트
### 이벤트 핸들러
html의 이벤트는 on와 함께 이벤트를 적었다.  

```html
  <button onclick="alert('클릭했습니다.')"> 클릭할건가요? </button>
```

이를 자바스크립트에서 이벤트 객체에 접근하여 이용할 수 있다.

```js
    document.getElementById("btn").onclick = alert("클릭했습니다");
```

하지만 이벤트리스너를 이용하면 콜백함수와 연결할 수 있다.  
`ELEMENT.addEventListner("이벤트명", sayHello);`  

`onclick`이 아닌 `"click"`임에 주의하자.  

```js
    document.getElementById("btn").addEventListner("click", () -> { 
        alert('클릭했습니다')
    });
```
매개변수가 없는 익명함수로 위와 같이 처리했다. 

[왜 자바스크립트는 콜백 합수를 쓸까](https://hi-zini.tistory.com/entry/%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%EB%B0%A9%EC%8B%9D-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EB%B2%95-Callback-Promise-async-await)? 비동기적 프로그래밍(동시적 실행)을 지원하기 위해.   
자바스크립트는 싱글프로세스 기반이다.  
기존의 프로세스를 중단하지 않고 비동기 API 처리를 진행하기 위해 Web API(웹 브라우저)에서 이벤트 루프(Listner)를 작동한다.  
이벤트 루프로 콜백 함수가 작동되면 어쩌구 저쩌구 해서 Call Stack에서 Pop된다.  

```js
    document.getElementById("btn").removeEventListner("click", () -> { 
        alert('클릭했습니다')
    });
```
`EventTarget.removeEventListener("이벤트명", 콜백함수)`를 실행할 때에도 이벤트명과 삭제할 함수를 기입해야 한다.  


#### EventListner의 종류
```
window 관련 ui 이벤트
UI 이벤트 – 사용자가 웹페이지가 아닌 브라우저의 UI와 상호작용할 때 발생
이벤트	설명
load	웹 페이지의 로드가 완료되었을 때
unload	웹 페이지가 언로드 될 때(새로운 페이지를 요청한 경우 )
error	브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 없는 경우
resize	브라우저의 창 크기를 조정했을 때
scroll	사용자가 페이지를 위아래로 스크롤 할 때

키보드 이벤트
keydown	사용자가 키를 처음 눌렀을 때
keyup	키를 땔 때
keypress	사용자가 눌렀던 키의 문자가 입력되었을 때

마우스 이벤트
click	사용자가 동일한 요소 위에서 마우스 버튼을 눌렀다 땔 때
dbclick	두 번 눌렀다 땔 때
mousedown	마우스를 누르고 있을 때
mouseup	눌렀던 마우스 버튼을 땔 때
mousemove	마우스를 움직였을 때
mouseover	요소 위로 마우스를 움직였을 때
mouseout	요소 바깥으로 마우스를 움직였을 때

포커스 이벤트
focus	요소가 포커스를 얻었을 때
focusin	 
blur	요소가 포커스를 잃었을 때
focusout	 

폼 이벤트
input	<input>,<textarea>요소 값이 변경되었을 때
change	선택 상자, 체크박스, 라디오 버튼의 상태가 변경되었을 때
submit	사용자가 버튼키를 이용하여 폼을 제출할 때
reset	리셋 버튼을 클릭할 때
cut	폼 필드의 콘텐츠를 잘라내기 했을 때
copy	폼 필드의 콘텐츠를 복사했을 때
paste	폼 필드의 콘텐츠를 붙여넣을 때
select	텍스트를 선택했을 때
```

#### 이벤트 객체별 프로퍼티
```
윈도우 이벤트
Window.fullScreen
Window.innerHeight 컨텐츠 영역에 대한 높이
Window.innerWidth
Window.location 문서의 위치 
Window.screenX 
Window.screenY


키보드 이벤트
KeyboardEvent.key
KeyboardEvent.altKey (옵션키 포함)
KeyboardEvent.ctrlKey

마우스 이벤트
MouseEvent.button (en-US)
MouseEvent.clientX DOM 객체에서의 위치
MouseEvent.clientY 
MouseEvent.screenX 전체 스크린에서의 위치
MouseEvent.screenY 
```


## 이벤트 버블링과 위임(delegation)

### 이벤트 버블링
자식노드에서 이벤트가 발생하면 부모노드로 이벤트가 버블링 됨.  

![이벤트버블링](..\src\event-bubbling.PNG)
가령 위 사진에서 `<li>Red</li>`를 클릭하면 모든 박스에 'click'이벤트가 발생함.  

### 이벤트 버블링이 발생하지 않는 이벤트
|버블링 x | 버블링 O|
|---|---|
|focus <br> blur<br> mouseenter<br> mouseleave| focusin <br> focusout<br> mouseover<br> mouseout|


### 이벤트 핸들러와 위임
앞서 이벤트 리스너는 콜백 함수를 받는다고 하였다. 이 콜백 함수를 '이벤트 핸들러'라고 부른다. 이벤트 핸들러를 이용해 부모 요소에게 이벤트를 위임해보자.

```html
<div id="box">
  <ul id="ul">
    <li id="one" class="on"> one </li>
    <li id="two"> two </li>
    <li id="three"> three </li>
    <li id="four"> four </li>
  </ul>
</div>
```
위와 같은 태그가 있다.

<br>

이를 아래와 같이 이벤트 핸들러를 만든다.

```js
const ul = document.getElementById("ul")
const nums = ul.children;

function clickHandler(event) {
    for ( num of nums) {
        num.classList.remove("on");
    }
    event.target.classList.add("on");
}
```

이벤트가 발생하면 `<li>` 요소들에서 'on'이라는 클래스를 제거하고, 이벤트가 발생한 `<li>` 요소에 'on'을 추가하는 핸들러를 만들었다.

```js
document.getElementById("one").addEventListner("click", clickHandler);
document.getElementById("two").addEventListner("click", clickHandler);
document.getElementById("three").addEventListner("click", clickHandler);
document.getElementById("four").addEventListner("click", clickHandler);
```
ul의 자식요소들에 이벤트리스너를 추가했다. 이를 아래와 같이 부모 요소에 위임할 수 있다.  

```js
document.getElementById("ul").addEventListner("click", clickHandler);
```

자식 요소에 발생한 이벤트는 부모요소로 버블링되므로 이와 같이 위임이 가능하다.

  
### target과 currentTarget 
이벤트가 발생한 요소를 target. 이벤트 핸들러가 적용된 요소를 currentTarget이라 한다.  
자식에게 발생된 이벤트가 버블링되어 부모 요소의 이벤트 핸들러가 작동되는 경우가 있다.


```html
<div id="box">
  <ul id="ul">
    <li id="one" class="on"><a href="#"> </a></li>
    <li id="two"><a href="#"> two </a></li>
    <li id="three"><a href="#"> three </a></li>
    <li id="four"><a href="#"> four </a></li>
  </ul>
</div>
```
li태그의 자식요소 a태그를 생성했다. 

a 태그를 눌렀을 때   
event.target : a tag   
event.currentTarget : ul tag

a tag가 ul tag에 이벤트를 위임한 것처럼 동작한다.    
  
아래와 같이 자식요소의 이벤트를 부모요소로 수정할 수 있다.  

```js
function clickHandler(event) {
    let target = event.target;
    if (event.target.tagName === "A") {
        event.target = target.parentElement;
    }

    for ( num of nums) {
        num.classList.remove("on");
    }
    event.target.classList.add("on");
}
```

또한 ul tag에 이벤트를 위임하였기에 ul tag를 클릭할 때에도 이벤트가 발생한다. 이벤트가 발생하지 않도록 return으로 이벤트 핸들러를 종료하자.

```js
function clickHandler(event) {
    let target = event.target;
    if (event.target.tagName === "A") {
        event.target = target.parentElement;
    } else if(target === event.currentTarget){
        return
    }

    for ( num of nums) {
        num.classList.remove("on");
    }
    event.target.classList.add("on");
}
```

한편 EVENT.stopPropagation();을 통해 이벤트 버블링을 중단시킬 수 있다.  

[이벤트 버블링 예제](https://blog.naver.com/PostView.naver?blogId=alas0213&logNo=222299236654&parentCategoryNo=&categoryNo=32&viewDate=&isShowPopularPosts=true&from=search)

```js
const form = document.getElementById('form');
form.addEventListener('focusin', (event) => {
    event.target.style.background = 'pink';
});
form.addEventListener('focusout', (event) => {
    event.target.style.background = '';
});
```

input 태그를 포커스 했을 때에 input태그의 배경색이 분홍이 되도록 짠 코드이다.


이벤트 버블링이 일어나지 않는 focus, blur를 쓰거나 EVENT.stopPropagation();을 하면 위임한 이벤트가 발생하지 않아 배경색이 안 변한다.


```js
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});
form.addEventListener('focusout', (event) => {
    event.stopPropagation()
    event.target.style.background = '';
})
```

event.stopPropagation()으로 버블링을 무작정 막기보다는  
event.target과 event.currentTarget을 적절히 바꾸고 이벤트 핸들링 함수를 수정하면서 버블링의 범위를 조절하며 버블링을 활용하는 것이 바람직한 이벤트 핸들링이라 할 수 있겠다. 