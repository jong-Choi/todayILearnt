### 환경 설정

Vue 설치하기 `npm install vue-cli -g`  
프로젝트 설치하기 `vue init webpack-simple memo-application`  
vue init 실행 시 설정창이 뜨며, 엔터를 치면 기본값으로 설정된다.  
프로젝트 폴더로 이동 `cd memo-application/`  
package.json 설치하기 `npm i`  
서버 실행하기 `npm run dev`

### css초기화

`src\styles\reset.css`  
브라우저별로 패딩, 마진, 보더 등에 대한 처리가 다를 수 있음. 이를 초기화 시킴.  
import에 fontawesome을 추가로 적용함.

```js
//src\App.vue
<style>
  @import './styles/reset.css';
  #app {
    width: 560px;
    margin: 0 auto;
  }
</style>
```

### 헤더 컴포넌트 생성하기

```js
<template>
  <div class="app-header">
    <h1>메모 어플리케이션</h1>
  </div>
</template>

//export default는 모듈을 내보내는데 쓰이는 명령어
<script>
export default {
  name: "AppHeader",
};
</script>

//scoped를 통해 해당 컴포넌트에만 지정
<style scoped>
.app-header {
  overflow: hidden;
  padding: 52px 0 27px;
}
.app-header h1 {
  float: left;
  font-size: 24px;
  text-align: center;
}
</style>
```

생성된 컴포넌트를 App.vue에서 components에 등록한다.

```js
//src\App.vue
<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>
```

생성된 컴포넌트를 템플릿에 삽입한다.  
이때 html은 대소문자를 구분하지 않으며, 일반적으로 케밥케이스를 사용한다.

```js
//src\App.vue
<template>
  <div id="app">
    <app-header />
  </div>
</template>
```
