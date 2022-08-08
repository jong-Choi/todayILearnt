```
웹 표준 : 웹에서 표준적으로 적용되는 기술이나 규칙  
W3C: 팀 버니스 리(하이퍼텍스트 시스템을 고안한 사람)을 중심으로 1994년 10월 설립된 컨소시엄. 437개 회원사  
WHATWG : 웹 하이퍼텍스트 애플리케이션 테크놀로지 워킹 그룹. 2004년 개인들에 의해서 설립. HTML5 등의 개발에 관여하였다.  


HTML

한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 이 기능을 하이퍼링크(hyper link)라 한다.  

HTML (HyperText Markup Language)은 웹페이지를 기술하기 위한 마크업 언어이다. 조금 더 자세히 말하면 웹페이지의 내용(content)과 구조(structure)을 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것이다  




웹페이지의 구성하는 기본 태그  

1. 문서 형식 정의 tag
<!DOCTYPE html>

2. html tag
<html>
html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 단 하나만 존재한다.

3. head tag
head 요소는 메타데이터를 포함하기 위한 요소이며 웹페이지에 단 하나만 존재한다. 메타데이터는 HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다.

title tag
style tag
link tag 외부 CSS 파일을 연계에 사용된다
script tag
meta tag meta 요소는 description, keywords, author, 기타 메타데이터 정의에 사용된다. 메타데이터는 브라우저, 검색엔진(keywords) 등에 의해 사용된다. charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의한다.


4. body tag
웹페이지를 구성하는 대부분의 요소가 body 요소 내에 기술된다.



<!DOCTYPE html>
<html>
  <head>
    <title>Hellow!</title>
    <meta charset="utf-8">
    <link href="style.css" rel="stylesheet">
    <script src="js.js"></script>
    <style> 
        p{
            color: black;
        }
    </style>
  </head>
  <body>
    <script>
    </script>
  </body>
</html>




Open Graph Protocol
오픈 그래프 프로토콜은 어떠한 인터넷 웹사이트의 HTML 문서에서 head -> meta 태그 중 "og:XXX"가 있는 태그들을 찾아내어 보여주는 프로토콜이다.


HTML 요소는 시작 태그(start tag)와 종료 태그(end tag) 그리고 태그 사이에 위치한 content로 구성된다.
요소의 중첩 (Nested Element)

빈 태그
<br> <img> <meta> <link> <input> <hr>

어트리뷰트(Attribute 속성)
어트리뷰트는 요소에 추가적 정보(예를 들어 이미지 파일의 경로, 크기 등)를 제공한다
여는 태그에 공백 없이 큰따옴표로
<img src="html.png">

글로벌 어트리뷰트 (HTML Global Attribute)
id	유일한 식별자(id)를 요소에 지정한다. 중복 지정이 불가하다.
class	스타일시트에 정의된 class를 요소에 지정한다. 중복 지정이 가능하다.
hidden	css의 hidden과는 다르게 의미상으로도 브라우저에 노출되지 않게 된다.
lang	지정된 요소의 언어를 지정한다. 검색엔진의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다.
style	요소에 인라인 스타일을 지정한다.
tabindex	사용자가 키보드로 페이지를 내비게이션 시 이동 순서를 지정한다.
title	요소에 관한 제목을 지정한다.
data-* 사용자 정의 데이터를 저장하기 위해 사용


시맨틱 요소
header	헤더를 의미한다
nav	내비게이션을 의미한다
aside	사이드에 위치하는 공간을 의미한다
section	본문의 여러 내용(article)을 포함하는 공간을 의미한다
article	분문의 주내용이 들어가는 공간을 의미한다
footer	푸터를 의미한다



개발자가 의도한 요소의 의미가 명확히 드러나고 있다.이것은 코드의 가독성을 높이고 유지보수를 쉽게한다.
시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다. 

시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.

DOM (Document Object Model)
텍스트 파일로 만들어져 있는 웹 문서를 브라우저에 렌더링하려면 웹 문서를 브라우저가 이해할 수 있는 구조로 메모리에 올려야 한다. 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다. 즉 모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계를 표현할 수 있는 트리 구조로 구성한 것이 DOM이다.


**텍스트 요소**  
`<a></a>` href 속성을 활용하여 다른 URL로 연결하는 하이퍼 링크 생성 

`<b></b>` 볼드체    
`<strong></strong>` 볼드체 (시멘틱함)    

`<i></i>` 이탤릭체    
`<em></em>` 이탤릭체(시멘틱함, emphasized)    

`<br>` 줄바꿈  
`<img>` src속성을 활용하여 이미지 표현  
`<span></span>` 인라인 컨테이너  

**그룹 컨텐츠**
`<p></p>` 하나의 문단(paragraph)    
`<hr>` 문단 레벨 요소에서의 주제의 분리를 의미하며 수평선으로 표현 됨.  
`<ol></ol>` 순서가 있는 리스트  
`<ul></ul>` 순서가 없는 리스트  
`<pre></pre>` HTML에 작성한 내용을 그대로 표현, 보통 고정폭 글꼴이 사용되고 공백 문자를 유지  
`<blockquote></blockquote>` 주로 들여쓰기를 한 것처럼 표현됨  
`<div></div>` 의미 없는 블록 레벨 컨테이너.

form
데이터를 제출하기 위해 사용하는 태그
어트리뷰트: 
action="URL" 입력 데이터(form data)가 전송될 URL 지정
method="get|post" 입력 데이터(form data) 전달 방식 지정(HTTP메서드)

<form enctype="value">
    application/x-www-form-urlencoded
    multipart/form-data    This value is necessary if the user will upload a file through the form


예시
    <form action="http://jsonplaceholder.typicode.com/users" method="get">
      ID: <input type="text" name="id" value="1"><br>
      username: <input type="text" name="username" value="Bret"><br>
      <input type="submit" value="Submit">
    </form>


input 태그 
text button checkbox color month submit email
text	텍스트 입력 form 생성
password	password 입력 form 생성
email	이메일 입력 form 생성. subumit 시 자동 검증한다.
number	숫자 입력 form 생성
file	파일 선택 form 생성

checkbox	checkbox 생성 다중선택
radio	radio button 생성

color	컬러 선택 생성
date	date control (년월일) 생성
hidden	감추어진 입력 form 생성



<label> 요소는 for 속성을 사용하여 다른 요소와 결합할 수 있으며, 이때 <label> 요소의 for 속성값은 결합하고자 하는 요소의 id 속성값과 같아야 합니다.

<input type="radio" name="ages" id="teen" value="teenage">
<label for="teen">10대</label><br>
<input type="radio" name="ages" id="twenty" value="twenties">
<label for="twenty">20대</label><br>
<input type="radio" name="ages" id="thirty" value="thirties">
<label for="thirty">30대</label><br>


CSS

Inline style
  <body>
    <h1 style="color: red">Hello World</h1>
    <p style="background: aqua">This is a web page.</p>
  </body>

내부참조 Embedding style
  <head>
    <style>
      h1 { color: red; }
      p  { background: aqua; }
    </style>
  </head>

외부참조  Link style
  <head>
    <link rel="stylesheet" href="css/style.css">
  </head>


HTML과 CSS는 서로 역할이 다르므로 다른 파일로 구분되어 작성하고 관리되는 것이 바람직하다.

Type Selector
태그명	지정된 태그명을 가지는 요소를 선택한다.

Class Selector
.class 어트리뷰트 값	class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. class 어트리뷰트 값은 중복될 수 있다.  


ID Selector  
#id 어트리뷰트 값	id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. id 어트리뷰트 값은 중복될 수 없는 유일한 값이다.  


- 명시도에 따른 중요소  
!important > 인라인 스타일 > 아이디 선택자 > 클래스/어트리뷰트/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성    

- 선언순서    
나중에 선언된 스타일이 우선 적용된다.  

상속(Inheritance)  
visibility opacity font color line-height text-align  

px은 절대값이고 em, %는 상대값이다.  

em은 배수(倍數) 단위로 상대 단위이다. 요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다. 예를 들어 1em은 요소에 지정된 사이즈와 같고 2em은 요소에 지정된 사이즈의 2배이다.  

rem은 최상위 요소(html)의 사이즈를 기준으로 삼는다. rem의 r은 root를 의미한다.


vw	viewport 너비의 1/100
vh	viewport 높이의 1/100
vmin	viewport 너비 또는 높이 중 작은 쪽의 1/100
vmax	viewport 너비 또는 높이 중 큰 쪽의 1/100


단위	
사용예
HEX 코드 단위 (Hexadecimal Colors)	
#000000
RGB (Red, Green, Blue)	
rgb(255, 255, 0)
RGBA (Red, Green, Blue, Alpha/투명도)	
rgba(255, 255, 0, 1)
HSL (Hue/색상, Saturation/채도, Lightness/명도)	
hsl(0, 100%, 25%)
HSLA (Hue, Saturation, Lightness, Alpha)	
hsla(60, 100%, 50%, 1)


자손결합자(공백)
자식결합자(>)
일반형제결합자(~)
인접형제결합자(+)

-top, -right, -bottom, -left 4방향의 프로퍼티를 각각 지정하지 않고 margin, padding 1개의 프로퍼티만으로 4방향의 프로퍼티를 한번에 지정할 수 있다.
margin: 25px 50px 75px 100px;
margin-top: 25px;
margin-right: 50px;
margin-bottom: 75px;
margin-left: 100px;

box-sizing: border-box;
 width, height 프로퍼티 값은 content 영역, padding, border가 포함된 값을 의미한다.

border 프로퍼티는 border-width, border-style, border-color를 한번에 설정하기 위한 shorthand 프로퍼티이다.
border: border-width border-style border-color;


1. display 프로퍼티
display 프로퍼티는 layout 정의에 자주 사용되는 중요한 프로퍼티이다.

프로퍼티값 키워드	설명
block	block 특성을 가지는 요소(block 레벨 요소)로 지정
inline	inline 특성을 가지는 요소(inline 레벨 요소)로 지정
inline-block	inline-block 특성을 가지는 요소(inline-block 레벨 요소)로 지정
none	해당 요소를 화면에 표시하지 않는다 (공간조차 사라진다)

block 특성을 가지는 요소(block 레벨 요소 또는 block 요소)는 아래와 같은 특징을 갖는다.

항상 새로운 라인에서 시작한다.

화면 크기 전체의 가로폭을 차지한다. (width: 100%)

width, height, margin, padding 프로퍼티 지정이 가능하다.

block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다

div

h1 ~ h6

p

ol

ul

li

hr

table

form




inline 특성을 가지는 요소(inline 레벨 요소 또는 inline 요소)는 아래와 같은 특징을 갖는다.

새로운 라인에서 시작하지 않으며 문장의 중간에 들어갈 수 있다. 즉, 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치한다.

content의 너비만큼 가로폭을 차지한다.

width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다. 상, 하 여백은 line-height로 지정한다.

span

a

strong

img

br

input

select

textarea

button


수평 정렬(Horizontal Align)

inline/inline-block 요소
정렬 대상 요소(텍스트 또는 링크 등의 inline 레벨 요소 또는 inline-block 레벨 요소)의 부모 요소에 text-align: center;를 지정한다.
text-align: left;
text-align: right;
text-align: center;

block 요소
 margin-right와 margin-left 프로퍼티에 auto를 지정한다.
 정렬 대상 요소에 너비를 명시적으로 지정하지 않으면 너비는 full width가 되므로 중앙 정렬이 필요없다.

position 프로퍼티

static (기본위치)
static은 position 프로퍼티의 기본값으로 position 프로퍼티를 지정하지 않았을 때와 같다.

기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다.

position: relative;
 기본 위치를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킨다. 노말플로우 유지(차지하는 위치는 static 기준임 ㅇㅇ 렌더링 되는 위치만 좌표를 따름 )

.aa {
position: relative;
top: 50px; left: 50px;
}

absolute (절대위치) : 특정영역 위에 존재
즉, relative, absolute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로  좌표 프로퍼티(top, bottom, left, right)만큼 이동한다.

relative 프로퍼티와 absolute 프로퍼티의 차이점은 아래와 같다.

relative 프로퍼티는 기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)을 사용하여 위치를 이동시킨다. 따라서 무조건 부모를 기준으로 위치하게 된다.

absolute 프로퍼티는 부모에 static 이외의 position 프로퍼티가 지정되어 있을 경우에만 부모를 기준으로 위치하게 된다. 만일 부모, 조상이 모두 static 프로퍼티인 경우, document body를 기준으로 위치하게 된다.

따라서 absolute 프로퍼티 요소는 부모 요소의 영역을 벗어나 자유롭게 어디든지 위치할 수 있다.


fixed (고정위치)
부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표프로퍼티(top, bottom, left, right)을 사용하여 위치를 이동시킨다.

스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.

sticky 속성
 sticky 영역의 x 또는 y 위치값이 설정한 위치에 도달하기 전까지는 static, 도달 이후에는 fixed처럼 행동하게 됩니다.

CSS 원칙
1, 2.
노말 플로우. display 프로퍼티로 크기와 배치 지정

3. 
Position으로 위치의 기준 변경



개발자 도구
Elements - dom탐색 및 css 확인 및 변경
styles - 요소에 적용된 css 확인
computed - 스타일이 계산된 최종 결과
event listners - 해당 요소에 적용된 이벤트


float 프로퍼티는 해당 요소를 다음 요소 위에 떠 있게(부유하게) 한다. 여기서 떠 있다(float)는 의미는 요소가 기본 레이아웃 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽에 이동하는 것이다. float 프로퍼티를 사용할 때 요소의 위치를 고정시키는 position 프로퍼티의 absolute를 사용하면 안된다.
프로퍼티값	Description
none	요소를 떠 있게 하지 않는다. (기본값)
right	요소를 오른쪽으로 이동시킨다
left	요소를 왼쪽으로 이동시킨다.


inline/inline-block 요소
정렬 대상 요소(텍스트 또는 링크 등의 inline 레벨 요소 또는 inline-block 레벨 요소)의 부모 요소에 text-align: center;를 지정한다.
text-align: left;
text-align: right;
text-align: center;

플렉스 박스 레이아웃
컨테이너: display 속성을 flex, inline-flex로 지정


수평 정렬하려면 자식요소(flex-item)를 inline-block으로 지정하거나 float 프로퍼티를 지정한다.


flex-direction
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;


flex-wrap
flex-wrap: nowrap;
flex-wrap: wrap;

flex-flow
flex-flow: <flex-direction> || <flex-wrap>;



justify-content  flex item을 수평 정렬한다.
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
첫번째와 마지막 flex item은 좌우 측면에 정렬되고 나머지와 균등한 간격으로 정렬된다.
justify-content: space-around;
모든 flex item은 균등한 간격으로 정렬된다.



align-content  cross axis를 기준으로 flex item을 수직 정렬한다.
align-content: stretch;
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;





align-items  한 줄의 flex item을 flex container의 수직 방향(cross axis)으로 정렬한다.
align-items: stretch;
align-items: flex-start;
align-items: flex-end;
align-items: center; 
align-items: baseline; - 컨텐츠의 베이스라인

align-self align-items 속성(flex container속성으로 flex item을 flex container의 수직 방향(cross axis)으로 정렬한다.)보다 우선하여 개별 flex item을 정렬한다. 기본값은 auto이다.
align-self: auto | flex-start | flex-end | center | baseline | stretch;






align-content: 는 아이템이 여러줄일때 여러줄의 아이템들의 수직정렬을 의미한다(만약 flex-start 값을 주면 여러줄의 아이템들은 각 줄의 윗쪽에 배치될거고, center로 값을 주면 각 줄의 center로 배치된다)

aling-items: 는 한 줄의 아이템들의 수직 정렬을 의미한다. 딱 한줄 내에 아이템들이 위에,중간에,아래에 정렬될건지를 설정함.


flex-grow: 남은 영역을 분배
order : 배치 순서

세로 두줄 카드배치 예시

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;


가로 두줄 카드배치 예시
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;


부트스트랩:

CDN content delivery network
외부 서버를 활용해서 본인 서버의 부화가 적어짐


SPACING

mt-3
마진탑 to spacer라는 의미.
root는 16px, spacer는 16px
m-1 은 0.25rem -> 4px
m-2 0.5rem 8px
m3 1rem 16px
m4 1.5rem 24px
m5 3rem 48px

방향은
t, e, b, s
x, y,
blank(all 4sides)

.mx-auto{
    margin-right: auto;
    margin-left: auto;
}
즉, 가운데 정렬


TEXT
text-start
text-center
text-end

text-decoration-none
fw-bold
fw-normal
fw-light
fst-italic


DISPLAY
d-inline
d-block
d-sm-none
d-md-none


BOX
box fixed-top
box fixed-bottom

컴포넌트
dropdown
form-control
navbar
carousel
modal

FLEX BOX
d-flex justify-content-start
d-flex align-items-start
d-flex
    align-self-start

grid card


반응형 웹이란?
웹 디자인에 대한 접근 방식

GRID SYSTEM
flexbox를 기반으로 제작
12개의 칼럼
6개의 중단점 
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);


<div class="continer>









그리드는 flex box를 기초로 한다.   
수직 정렬은 아래와 같다.  
```css
<div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  ```

align은 자식요소에도 셀프로 적용이 된다.
```css
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
```

수평정렬은 아래와 같다.
```css
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
```
`justify-content-start||justify-content-center||justify-content-end||justify-content-around||justify-content-between||justify-content-evenly`

### 오프셋
`offset-`은 제어자로 지정한 칸 만큼 오른쪽으로 이동한다.
```css
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4 offset-md-4"></div>
  </div>
```

float의 형태를 만들 수도 있다. 이때 글씨 크기가 그림보다 적은 경우에 clearfix를 쓴다.
```css
<div class="clearfix">
  <img src="..." class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">

  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
```

### 여백 주기
m은 마진, p는 패딩을 의미한다.  
이후 바로 뒤의 글자는 방향을 의미한다.  
(t, b, s, e, x, y)   
제어자는 `$spacer`에 대한 크기를 비율로 받는다.