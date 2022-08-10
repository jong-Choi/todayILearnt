https://www.w3schools.com/js/js_htmldom.asp  
https://velog.io/@johnque/JavaScript-HTML-DOM  
https://www.youtube.com/watch?v=XGKdimCHzw8  
https://yung-developer.tistory.com/m/79  

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
`ul.textContent = '<li> 영어로 인사 해 </li>'`
```html
<ul id="testUl">
    <li> 영어로 인사 해 </li>
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
    <li> 인사 나 할까? </li>
    <li> hello world! </li>
</ul>
```
