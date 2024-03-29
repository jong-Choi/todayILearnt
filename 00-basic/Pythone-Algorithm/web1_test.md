# Web1
## Web이란?
### 웹 사이트의 구성 요소  
웹 사이트란 브라우저를 통해서 접속하는 웹 페이지들의 구성 요소.  
다른 웹 페이지로 이동하는 '링크'.  
웹사이트: 링크로 웹 페이지를 연결한 것  

HTML = 구조  
CSS = 표현  
Javascript = 동작  

### 웹 표준과 크로스 브라우징
웹 표준 : 웹에서 표준적으로 적용되는 기술이나 규칙  
W3C: 팀 버니스 리(하이퍼텍스트 시스템을 고안한 사람)을 중심으로 1994년 10월 설립된 컨소시엄. 437개 회원사  
WHATWG : 웹 하이퍼텍스트 애플리케이션 테크놀로지 워킹 그룹. 2004년 개인들에 의해서 설립. HTML5 등의 개발에 관여하였다.  

### 개발 환경 설정
크롬 개발자 도구 주요 기능
Elements - DOM 탐색 및 CSS 확인 및 변경  
    Styles - 요소에 적용된 CSS 확인  
    Computed - 스타일이 계산된 최종 결과  
    Event Listeners - 해당 요소에 적용된 이벤트(js)  
Sources, Network, Performance, Application, Security, Audits 등  

## HTML
Hyper Text Markup Language  

하이퍼 텍스트: 참조(하이퍼링크)를 통해 사용자가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트.  
마크업 랭퀴지: 태그 등을 이용하여 문서나 데이터의 구조를 명시하는 언어  

HTML : 웹 페이지를 작성(구조화)하기 위한 언어    

확장자는 .html  
들여쓰기는 2Spaces  


### HTML 기본 구조
`<html>` 문서의 최상위(Root) 요소   
`<head>` 문서 메타데이터 요소 (인코딩, 문서제목, 일반적으로 브라우저에 나타나지 않는 내용)   
`<body>` 문서 본문 요소 - 실제 화면 구성과 관련된 내용  

```
    <html>
        <title>
        <meta>
        <link> - 외부 리소스 연결, css, 파비콘 등
        <script>
        <style>
```

Open Graph Protocol : 메타데이터를 통해 문서의 정보를 전달  
`<meta name="og:description" content="Google 뉴스가 전 세계 매체로부터 종합한 최신 뉴스">`
등의 형식으로 제목, 설명 등을 쓸 수 있도록 정의.   


**요소(element)**
시작 태그와 종료 태그, 그리고 그 사이에 위치한 내용(content)  
  
태그로 감싸 정보의 성격과 의미를 정의  
  
내용이 없는(닫는 태그가 없는) 태그들도 있음  
`<br>, <hr>, <img>, <input>, <link>, <meta>`  
  

요소는 중첩(nested) 가능
    여는 태그와 닫는 태그의 쌍을 잘 확인할 것. 오류가 발생하지 않고 그냥 레이아웃만 깨짐.

**속성(attribute)** 
속성은 = 양 옆에 공백 없이 작성하며, 속성값은 쌍따옴표를 사용한다.  
`<a href="https://google.com"></a>`  
  
속성을 통해 태그의 부가적인 정보를 설정함.  
요소는 속성을 가질 수 있으며, 경로나 크기 등의 부가적인 정보를 제공  
요소의 시작태그에 작성하며, 보통 이름="값"의 구조.  
태그의 종류에 따라 속성이 다르며, 태그와 상관없이 사용 가능한 HTML Global Attribute들도 있음.  

```
HTML Global Attribute
id : 고유한 식별자 지정
class : 공백으로 구분하여 클래스 목록 생성
data-* : 페이지에 개인 사용자 데이터를 저장
style : 인라인 스타일
title : 요소에 대한 추가정보 지정
tabindex : 요소의 탭 순서
```

**시맨틱 태그**
HTML 태그가 특정 목적, 역할, 의미적 가치(semantic value)를 가지는 것.  

non semantic : div, span  

HTML5에서 div태그를 대체하기 위하여 의미론적 요소를 담은 태그들이 추가됨

```
semantic tag 목록
header : 문서 전체나 섹션의 머릿말 부분
nav : 내비게이션
aside : 사이드에 위치한 공간, 메인 콘텐츠와 관련성이 적은 컨텐츠
section : 문서의 일반적인 구분, 컨텐츠 그룹 표현
article : 문서 페이지, 사이트 안에서 독립적으로 구분되는 영역
footer : 문서 전체나 섹션의 마지막 푸터
```

**시맨틱 태그를 사용해야 하는 이유**
개발자의 사용 뿐 아니라 검색엔진 등에 의미있는 정보의 그룹을 태그로 표현  
단순히 구역을 나누는 것 뿐만 아니라 의미를 가지는 태그들을 활용하기 위한 노력  
요소의 의미가 명확해지기 때문에 코드의 가독성을 높이고 유지 보수를 쉽게 함.  
검색 엔진 최적화를 위해서 메타태그, 시맨틱 태그를 통한 마크업을 효과적으로 활용 해야함.  


렌더링 : 웹 사이트 코드를 사용자가 보게 되는 사이트로 바꾸는 과정

DOM(Document Object Model) 트리  
브라우저를 렌더링하기 위한 구조.  
    HTML 문서에 대한 모델을 구성함. 
    각 요소에 접근/수정에 필요한 프로퍼티와 메서드를 제공함.  

### HTML 문서 구조화
인라인 요소: 글자처럼 취급. 오른쪽에서 왼쪽으로 스택.
블록 요소: 한 줄을 모두 사용. 위에서 아래로 스택.

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

**form**
<>

## CSS
### CSS Selectors
### CSS 단위
### Selectors 심화
### Box Model
### Display
### Position

