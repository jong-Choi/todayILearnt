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

MemoForm에 v-model을 등록한다

```html
<template>
  <div class="memo-form">
    <form @submit.prevent="addMemo">
      <fieldset>
        <div>
          <input class="memo-form__title-form" type="text" v-model="title" placeholder="메모의 제목을 입력해주세요.">
          <textarea class="memo-form__content-form" v-model="content" placeholder="메모의 내용을 입력해주세요." />
...
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
...
  data() {
    return {
      title: '',
      content: ''
    }
  },
    methods : {
      addMemo() {
        const {title, content} = this;
        const id = new Date().getTime();

        const isEmpty = title.length <= 0 || content.length <=0;
        if (isEmpty) {
          return false;
        }

        this.$emit('addMemo', {id, title, content});
      }

    }
}
</script>
```
`v-model` directive는 양방향 데이터 바인딩이다. 즉 해당 엘리먼트의 초기 value로 컴포넌트의 데이터를 가져오며, 이벤트가 발생할 시, 컴포넌트의 데이터를 해당 이벤트의 value로 변경한다.  

form에 prevent defaulf로 submit 이벤트를 등록하고, 메서드명은 addMemo로 한다.  
addMemo는 제목이나 컨텐츠가 입력되지 않으면 false를 반환한다.

만일 둘 다 있다면, 이벤트 $emit를 통해  ('key', value)를 전달한다. 이벤트 emit은 자식에서 부모로 데이터를 전달할 때 사용되며, 
부모 컴포넌트는 
```js
data() {
  return {
    value: "",
  }
}
methods: {
  key(value) {
    this.value = value;
  }
}
``` 
와 같은 형식으로 데이터를 받을 수 있다. 

MemoApp.vue의 템플릿에서 v-on을 통해 addMemo 메서드를 받아온다. 해당 메서드의 인자는 MemoForm에서 넘겨준 데이터가 될 것이다. (이때 v:on이벤트명=이벤트핸들러는 아래와 같이 @이벤트명=이벤트핸들러 로 표현된다. )

```js
<MemoForm @addMemo="addMemo" />
```
```js
export default {
    name: 'MemoApp',
    data () {
        return {
            memos: [],
        };
    },
...
    methods: {
        // MemoForm에서 받은 데이터를 payload로 받는다.
        // 해당 데이터는 기존 내부 데이터에 push한다.
        addMemo (payload) {
            this.memos.push(payload)
            this.storeMemo()
        },
        //이후 해당 데이터를 JSON 문자열로 변환하여, localStorage에서 setItem하여 저장한다.
        storeMemo(){
            const memosToString = JSON.stringify(this.memos);
            localStorage.setItem('memos', memosToString);
        }
    }
} 
</script>
```
잘 작동하고 있는지는 개발자 도구 -> Application -> Local Storage에서 확인할 수 있다.   

이후 MemoForm.vue에 리셋 기능을 넣어준다.   
MemoForm의 data를 초기값으로 초기화하는 메서드이다.  
```js
      resetFields(){
        this.title = ''
        this.content = ''
      },
      addMemo() {
        ...
        this.resetFields();
      }
```

#### 메모 데이터 노출하기 (Memo.vue)
```html
<!-- Memo.vue -->
<template>
  <li class="memo-item"></li>
</template>
```

```html
<!-- MemoApp.vue -->
<template>
    <div class="memo-app">
        <MemoForm @addMemo="addMemo" />
        <ul class="memo-list">
            <Memo />
        </ul>
    </div>
</template>

<script>...</script>

<style scoped>
    .memo-list {
        padding: 20px 0;
        margin: 0;
    }
</style>
```
Memo.vue에 리스트로 템플릿을 작성하고,  
MemoApp.vue 에 ul태그로 감싸 삽입한다. 

```js
<template>
    <div class="memo-app">
        <MemoForm @addMemo="addMemo" />
        <ul class="memo-list">
            <Memo v-for="memo in memos" :key="memo.id" :memo="memo"/>
        </ul>
    </div>
</template>
```
v-for를 이용해 반복한다.  
v-for는 v-bind:key 를 삽입해주어야 한다.   

이제 :memo="memo"로 Memo.vue에 프롭스를 넘겨준다.
Memo.vue에서 아래와 같이 프롭스를 받는다.
```js
<script>
export default {
  name: "Memo",
  props: {
    memo: {
      type: Object
    },
  }

}
</script>
```
해당 프로퍼티를 이용해 템플릿을 작성한다.
```js
<template>
  <li class="memo-item">
    <strong>{{memo.title}}</strong>
    <p>{{memo.content}}</p>
    <button type="button"><i class="fas fa-times"></i></button>
  </li>
</template>
```



##### 삭제 구현하기
삭제 구현을 위해서는 Memo.vue에서 온클릭 이벤트 리스너로 이벤트 타겟의 id를 받아와야 한다. 
1. Memo컴포넌트에서 이벤트 타겟의 아이디를 MemoApp컴포넌트로 넘겨준다. 
2. MemoApp컴포넌트는 데이터를 직접적으로 삭제하는 deleteMemo 메서드를 만든 후, 이를 Memo컴포넌트의 이벤트 리스너로 등록하여 자식으로부터 bind된 값을 받는다. 
3. MemoApp컴포넌트에서 삭제 후 리렌더링이 이루어진다. 




Memo.vue에 deleteMemo온클릭 이벤트 핸들러를 만들어 이벤트emit으로 부모 요소에게 id를 넘겨준다.
```js
<template>
    <button type="button" @click="deleteMemo">
    ...
</template>

<script>
  export default {
  ...
  methods: {
      deleteMemo(){
        const id = this.memo.id;
        this.$emit('deleteMemo', id);
      }
    }

}
</script>
```

MemoApp.vue에서 이벤트 핸들러를 통해 Memo.vue의 에밋을 받는다.

```js
<template>
...
            <Memo ...
            @deleteMemo="deleteMemo"/>
...
</template>
```

```js
...
        deleteMemo (id) {
            const targetIndex = this.memos.findIndex(v => v.id === id);
            this.memos.splice(targetIndex, 1);
            this.storeMemo();
        }
    }
} 
</script>
```
todos는 다음과 같이 객체 리스트로 저장된다.
```
[{id: 1667187298584, title: "fdfs", content: "asd"}, 
{id: 1667197501705, title: "dfsgs", content: "dfsdgasdfasd"}]
```

deleteMemo 메서드는 해당 리스트 내부의 객체를 'v'로 받아 id값을 비교한다.  
해당 아이디 값이 true인 값의 인덱스를 찾기 위해 해당 조건식을 Array.prototype.findIndex 메서드 안에 넣는다.    

찾은 인덱스를 이용해 Array.memos.splice(시작 인덱스, 삭제할 갯수, 삽입할 값)을 사용한다. splice는 시작 인덱스에서 기존 요소를 삭제 또는 추가하여 배열의 내용을 '변경'한다.  

이렇게 변경된 배열을 storeMemo()메서드로 로컬 스토리지에 저장한다. (기존 작성한 storeMemo()메서드는 window.localStorage.setItem()를 이용하여 memos 배열을 덮어씌워버린다. )  

##### 수정하기
먼저 MemoApp에 @updateMemo메서드를 작성한다.    
해당 메서드는 자식으로부터 id와 content를 받은 후,  
Array.prototype.findIndex()를 통해 해당하는 targetIndex를 찾고,  
splice를 이용해 해당하는 값만 지운 후 새로 삽입해준다.  

```js
<template>
    <div class="memo-app">
        ...
        <ul class="memo-list">
            <Memo 
            ...
            @updateMemo="updateMemo"/>
        </ul>
    </div>
</template>
...
<script>
  ...
    methods: {
      ...
        updateMemo(payload) {
            const {id, content} = payload;
            const targetIndex = this.memos.findIndex(v => v.id === id);
            const targetMemo = this.memos[targetIndex];
            this.memos.splice(targetIndex, 1, {...targetMemo, content});
            this.storeMemo();
        }
    }
} 
</script>
```

이제 Memo.vue에 memoComponent에서 수정을 위한 input 필드를 추가하여 준다.  




```html
<template>
  ...
      <!-- <p>{{memo.content}}</p> -->
    <p>
      <template>{{memo.content}}</template>
      <input type="text" ref="content" :value="memo.content">
    </p>
  ...
</template>
...
<style>
...
  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    border: 1px solid #999;
  }
</style>
```

ref는 dom에 직접 접근하기 위해 사용되며, 프로퍼티로는 ref.value 딱 하나만 갖는다.  
`<template>`태그는 자바스크립트를 통해 추가되거나 삭제될 수 있는 dom 요소를 의미한다. vueJS에서 `<template>` 태그는 돔 트리에 나타나지 않는다는 점에서 자식 요소를 감싸는 데에 중요한 역할을 한다. [출처: 스택오버플로우](https://stackoverflow.com/questions/51995815/vuejs-template-vs-div-or-related-for-grouping-elements-for-conditional-rend) 특히 v-if:false가 떴을 때에 div태그는 비어있는 돔 요소로 인해 마진이 발생할 수 있으나, template태그는 완전히 사라진다.  


이제 Memo.vue를 더블클릭을 하면 수정모드로 들어가도록 바꾸어 보자.  

```html
<!-- template -->
    <p @dblclick="handleDblClick">
      <template v-if="!isEditing">
        {{memo.content}}
      </template>
      <input v-else
      type="text" ref="content" :value="memo.content">
    </p>
<!-- script -->
<script>
  export default {
  ...
  data () {
    return {
      isEditing
    }
  },
  methods: {
    ...
    handleDblClick() {
      this.isEditing = true;
      this.$refs.content.focus();
    },
  }
}
</script>
```
더블 클릭 이벤트 핸들러로  
isEditing이 true로 바뀌면   
v-if가 변하면서 리렌더링 된다.  
리렌더링 된 후, refs를 이용해 content dom에 직접 focus()한다.  
이때, 리렌더링은 비동기적으로 이루어진다. 따라서 의도와 다르게 isEditing값을 true로 변경한 후, refs에 접근하고(돔이 감지되지 않아 undefined를 내뱉는다), 리렌더링을 한다. 이와 같이 자바스크립트는 모든 데이터 처리가 비동기적으로 이루어져 리렌더링은 순서가 보장되지 않음에 유의하자.  
이를 우회하기 위해 라이프사이클 메서드나 await/async를 사용할 수도 있지만, vueJS에서는 this.$nextTick(콜백함수)로 우회할 수 있다.   

```js
      handleDblClick() {
        this.isEditing = true;
        this.$nextTick(() =>
          this.$refs.content.focus()
        );
      }
```








