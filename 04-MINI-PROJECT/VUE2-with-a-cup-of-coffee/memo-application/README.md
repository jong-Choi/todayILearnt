### 환경 설정

Vue 설치하기 `npm install vue-cli -g`  
프로젝트 설치하기 `vue init webpack-simple memo-application`  
vue init 실행 시 설정창이 뜨며, 엔터를 치면 기본값으로 설정된다.  
프로젝트 폴더로 이동 `cd memo-application/`  
package.json 설치하기 `npm i`  
서버 실행하기 `npm run dev`
익스텐션에서 `Vue 3 Snippets`, `Vetur`, `Auto Close Tag(필요 시에..없는게 더 편한듯)` 설치



Git Clone 이후 실행이 안될 때에는 아래를 입력할 것
[참조](https://github.com/symfony/webpack-encore/issues/914)
```
yarn add webpack@4 
yarn add webpack-cli
yarn add @rails/webpacker
bundle exec rails webpacker:install
```

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

MemoApp, MemoForm, Memo 컴포넌트를 생성한다.   
`memo-application/src/components (master)$ touch MemoApp.vue MemoForm.vue Memo.vue`  
vue는 단방향으로 데이터가 흐르기 때문에 부모 컴포넌트인 MemoApp을 만들어 Memo, MemoFrom에 데이터를 전달한다.  

템플릿의 기본 구조는 

```js
<template>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
```
이며, vue3 스니펫으로는  

```js
<template> html.vue | .html

<script> javascript.vue | .js

<style> css-scoped.vue | .css
``` 
로 입력할 수 있다.  


created() 메서드를 이용해 완셩한 MemoApp.vue의 코드이다.  
```html
<template>
    <div class="memo-app">
        <memo-form/>
        <memo />
    </div>
</template>
<script>
import Memo from './Memo.vue';
import MemoForm from './MemoForm.vue';

  // src폴더의 컴포넌트에서 모듈을 불러온다.
export default {
    name: 'MemoApp',
    data () {
        return {
            memos: [],  //할 일 목록 데이터를 빈 배열로 초기화 한 후
        };
    },
    created () { 
        // localStorage에 할 일 목록이 있는 경우 이를 JSON 형식으로 불러온다.
        // 실행 초기 외부로부터 데이터가 필요한 경우에는 이와 같이 create() 메서드를 이용하여 불러온다.
        this.memos = localStorage.memos? JSON.parse(localStorage.memos) : [];  
    },
      components: {
        Memo,
        MemoForm
    }
}
</script>
```

컴포넌트가 렌더링되기 전에 데이터를 불러올 때에는 created() 훅을 사용한다.  
컴포넌트가 렌더링 된 후에(DOM 객체가 만들어진 후에) 데이터를 불러와야 할 때에는 mounted() 훅을 사용한다.  


MemoForm.vue 컴포넌트를 작성한다.   
```html
<!-- src\components\MemoForm.vue -->
<template>
    <div class="memo-form">
        <form>
            <fieldset>
                <div>
                    <input class="memo-form__title-form" type="text" placeholder="메모의 제목을 입력해주세요." .>
                    <textarea class="memo-form__content-form" placeholder="메모의 내용을 입력해주세요."/>

                    <!-- 태그에 폰트 어썸의 클래스명을 입력하여 추가해줌 -->
                    <button type="reset"><i class="fas fa-sync-alt"></i></button>
                </div>
                <button type="submit">등록하기</button>
            </fieldset>            
        </form>
    </div>
</template>

<script>
export default {
    //컴포넌트 이름 변경
    name:"MemoForm"
}
</script>

<style scoped>
    /* 생략 */
</style>
```

App.vue 컴포넌트의 템플릿에 `<memo-app/>`을 자동완성으로 추가한다.  
(자동완성으로 추가시 `<script>`에 import되고 conponents 프로퍼티에 등록된다.)  
```html
<!-- src\App.vue -->
<template>
  <div id="app">
    <app-header/>
    <memo-app/>
  </div>
</template>
```
