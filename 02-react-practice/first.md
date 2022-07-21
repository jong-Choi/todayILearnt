# React 2022 개정판 - 생활코딩
[React 2022 개정판](https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7)은 기존 버전에서 예시를 가다듬고 10개의 강좌로 통합한 버전이다. 또한 기존 버전과 달리 최신 트렌드에 맞게 함수형 프로그래밍을 진행한다. 클래스를 이용한 객체지향 프로그래밍을 원한다면 [기존 React 강좌](https://www.youtube.com/watch?v=XMb0w3KMw00&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)를 공부하자.

## 1. 수업 소개
리액트는 복잡한 태그를 모듈화하여 사용자정의 태그를 만드는 데에 특화되어 있다. 타인이 많은 사용자 정의태그를 퍼올 수 있다는 점에서 리액트가 라이브러리로서 가진 확장성은 뛰어나다.

## 2. 실습 환경 구축
리액트 실습환경 구축이 어렵다면 [리액트 공식문서](https://ko.reactjs.org/docs/getting-started.html)의 [코드 블리츠](https://stackblitz.com/edit/react-q17tec)를 이용하자.  
노드JS가 설치되어 있다면 터미널에 `npx create-react-app my-app`을 입력하면 my-app이라는 프로젝트 폴더가 생성된다.  
'react'라는 이름을 제외한 이름으로 디렉토리를 만들고, 디렉토리의 경로 상에 한글이나 특수문자가 없도록 한다.  
`npx create-react-app .`을 입력하여 터미널이 호출된 경로 내부에 creat-react-app을 설치하다.

`npm start`로 입력하면 리액트 개발환경이 시작된다.
`control + c`를 입력하면 리액트가 종료된다.

## 3. 소스 코드 수정
src의 `index.js` 프로젝트가 시작되는 파일이다.
`index.js`의 `<App />`은 ``<./App.js>`에서부터 받았다.
`/App.js`와 웹 브라우저상 개발자도구의 'Elements'에서의 `<div Class="App">`를 비교하면 같은 코드를 가지고 있음을 알 수 있다.

'Elements'에서 Class="app"을 감싸는 <div id="root">태그가 있다. 해당 태그는 /App.js의 'render( document.getElementById('root'))'로 생성되었다. 해당 'root'는 `public/iedex.html`이라는 파일을 의미한다.