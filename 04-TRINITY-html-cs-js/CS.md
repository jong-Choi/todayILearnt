# CSS
렌더링의 방법을 결정하는 언어이다.
https://poiemaweb.com/css3-syntax 의 내용을 따라 정리한다.

## 1 기본 문법
![기본문법](../src/css-syntax.png)

### 선택자(selector)
```
* : 전체
이름 : 유형선택자라 불리며 <input>을 선택하려면 input이라 이름짓는다.
.클래스명
#아이디명
특성 선택자: [어트리뷰트=값]. 가령 [autoplay]는 autoplay특성을 가진 모든 요소를 선택

선택자1, 선택자2 : 그룹선택자는 여러 선택자를 쉼표로 나누어 한번에 선택한다.

ul > li : 자식결합자 >로 바로 아래의 자식을 선택한다

p ~ span : 일반 형제 결합자 ~로 같은 부모를 공유하는 형제 요소를 선택한다

h2 + p : 인접형제 선택자 +로 같은 부모를 공유하는 인접한 형제를 선택한다.

col || td : 열 결합자 ||로 col과 같은 열인 요소를 선택한다.

선택요소:가상클래스 : 가상클래스 혹은 의사클래스는 요소의 상태에 따라 선택한다. (https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes) 'botton:hover' 'textarea:active' 등