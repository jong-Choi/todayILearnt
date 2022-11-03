### 환경 설정
노드 js 설치 (https://nodejs.org/ko/download/)
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

```
자바스크립트의 달러는 _랑 $를 쓸 수 있다. 이때 헷갈리지 말라고 $로 붙여주는 것. 

$emit은 특정 컴포넌트에서 발생하는 이벤트를 의미한다. 
(부모에서 자식에게 직접 이벤트를 발생시키기 보다는 자식에서 에밋에서 발생되는 이벤트를 부모에서 받는 것이 좋다)
위의 예시는 addMemo라는 이벤트가 MemoForm에 발생하는 것이다.  
이를 부모 요소가 감지하여 @addMemo로 해당 이벤트가 발생하는지를 확인할 수 있다.  
$emit은 $emit('이벤트명', 데이터) 로 전달할 수 있고
@이벤트명=이벤트핸들러
이벤트핸들러(데이터){
}
와 같이 받을 수 있다.  

이 데이터는 넘기는 갯수가 여러개일 수 있다. 하지만
const payload = { 데이터, 데이터, 데이터 }
$emit('이벤트명', payload)

이벤트핸들러(payload){
  payload.데이터
  payload.데이터
  payload.데이터
}

와 같이 하나의 객체로 넘겨주고 받는 것이 관리하기 용이하다.  
```

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

수정된 데이터에 이벤트 에밋 적용하기
기존 메모 데이터의 id와 새로운 콘텐츠를 이벤트 에밋으로 넘겨준다.
넘겨준 후 isEditing을 초기화한다. 

```js
methods: {...
      updateMemo(e) {
        const id = this.memo.id;
        const content = e.target.value.trim();
        if (content.length <= 0) {
          return false;
        }
        this.$emit('updateMemo', {id, content});
        this.isEditing = false;
      }
}
```

#### 서버와 API 연동하기
##### RESTful API
REST란 Representational State Transfer의 약자이다.  
프로그래밍에서 자원은 컴퓨터가 관리하는 매우 정적인 개념이다.  
반면 자원의 상태는 사용자에 의해 삭제되고 수정되고 지워지는 등 언제든지 변경될 수 있다.  

RESTful 하다는 것은 '원하는 상태'의 '자원을 가져가는 것'을 의미한다.

RESTful API는 다음 두 가지의 항목을 바탕으로 설계한다.  
1. URI는 자원을 표현하는 데에 집중한다.  
2. 자원에 대한 행위는 HTTP 메서드로 표현한다.  

즉 cats/1 이라는 주소는 cats/1 이라는 자원을 나타내며,    
나머지 CRUD는 HTTP메서드를 이용한다.  

(이때 Update에는 PUT메서드와 PATCH메서드가 있다. PUT은 자원을 통째로 수정하며, PATCH는 일부분만 수정한다는 차이가 있다.)  

##### HTTP 응답 코드
**200 : OK**    
201 : Created - 주로 POST 응답의 결과  
204 : No content - 응답은 성공했으나 전송할 값은 없음. (delete 응답의 결과)  
**400 : Bad Request - 요청의 내용이 잘못됨. 필수로 전달할 값이 안보내진 경우**  
401 : Unauthorized - 로그인 등의 권한이 필요할 때에  
403 : Forbidden - 접근 금지. (권한이 있어도 접근 못함 ㅇㅇ)  
**404 : Not found - 요청한 자원 없음.**  
405 : Method not allowed -  허용되지 않은 메서드 사용  
408 : Request Timeout -  요청시간 초과. 클라이언트에서 요청을 제대로 생성하지 못해서 발생한다. 서버에서 요청시간 초과를 이유로 클라이언트와의 커넥션을 Closed할 때에 보낸다.  
414 : Request URI too long - 요청 uri가 너무 김. (요즘 서버는 이런 에러가 적은 편이지만, 한글로 요청보낼 때 유니코드로 변환하면서 너무 길어짐. ㅇㅇ)  
**500 : Internal Server Error. 내부 서버 오류. 서버에서 발생한 예상치 못한 에러**  
**503 : Service Temporarily Unavailable. 서버를 일시적으로 사용할 수 없음.**  
504 : Gateway Timeout. 요청은 보내졌으나, 게이트웨이에서(클라이언트에서 발송된 후 다시 클라이언트까지 오는 다양한 과정들에서) 문제가 생겨 타임아웃이 발생하는 경우. (408은 클라이언트에서 제시간에 리퀘스트를 발송하지 않아서 타임아웃이 발생한 경우)  


##### Axios 설치하기
자바스크립트의 HTTP 클라이언트 라이브러리  
`npm install axios --save`

###### Axios HTTP 메서드
`axios.get(url[, config])` - config는 설정을 의미한다.   
`axios.post(url[, data, config])`  
`axios.put(url,data[, config])`  
`axios.patch(url, data[, config])`  
`axios.delete(url[, config])`  
 
메서드는 Promise 객체를 반환하며, 자바스크립트의 then과 catch를 이용해 동작을 제어할 수 있다.  

```js
import axios from 'axios'

axios.get('https://api.example.com/users/1/memos')
  .then(response => {
    alert('요청이 성공하였습니다.');
  })
  .catch(error => {
    alert('요청이 실패하였습니다.');
  })
  .then(response => {
    alert('성공과 실패에 관계없이 항상 실행됩니다.')
  })
```
```js
//ECMA 2017 async/await
async function getUserMemo() {
  try{
    const response = await axios.get('https://api.example.com/user/1/memos');
    alert('요청이 성공하였습니다.');
  }
  catch (error) {
    alert('요청이 실패하였습니다.');
  }
  finally {
    alert('성공과 실패에 관계없이 항상 실행됩니다.');
  }
}
```

Promise 객체란 비동기 작업이 실행된 후, 그 실행의 결과값을 의미하는 대리자이다.  
pending : 비동기 작업이 이행되지도, 거부되지도 않은 Promise의 초기 상태
fulfilled : 연산이 성공적으로 완료됨.
rejected : 연산이 실패함

Promise.prototype.catch(f(error)) : rejected케이스 일때 에러를 콜백 함수에 넘겨준다.
Promise.prototype.then(f(resolve[, reject])) : promise의 결과에 따라 후속으로 실행되는 함수로, 최대 두 개의 인수를 받는다.   

ECMA 2017에 추가된 async / await 구문을 사용할 수 있다. async / await는 promise를 동기적 문법과 비슷하게 만들어준다.  

async는 함수 앞에 위치한다. 해당 함수는 항상 프라미스를 반환하게 된다.   
```js
async function f() {
  return 1;
}

async function f() {
  return Promise.resolve(1);
}
```
위 두 함수의 결과는 동일하다.  

await는 async함수 안에서 동작한다. promise가 처리될 때 가지 기다린 후 그 결과를 반환한다.  

```js

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();
```
```js
async function f() {
  async function g() {
    throw "This is unerror"
  }
  try {
    let result = await g() //async함수는 promise를 발생하므로 이렇게 사용할 수도 있다.
    console.log(result)
  }
  catch (err) {
    console.log('에러가 발생하였습니다.', err)
  }
}

f()
```

async는 무조건 promise를 반환한다. 반환값이 없는 경우 비어있는 promise를 반환한다.  
await는 promise의 결과값을 반환한다. .catch()메서드가 없으므로 예외처리는 try, catch를 통해 한다.  
(실무에서는 async, await를 더 많이 쓴다.)  

Axios는 모듈을 생성하면서 다양한 옵션을 변경할 수 있다.  
아래는 모듈의 옵션을 사용하는 예시들이다.  

```js
import axios from 'axios';

// 1. defaults 설정을 사용하면 고정된 값들을 손쉽게 사용할 수 있다.
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['X-Example-Key'] = 'example';
axios.defaults.headers.post['Content-Type'] = 'application/json'l

// 2. 서버에 따라 여러개의 모듈을 생성해야 할 때에는 create메서드를 이용해서 새로운 객체를 만들어 사용할 수 있다. 새로 만들어진 Axios 객체도 임포트된 모듈과 같은 역할을 한다.
import axios from 'axios';

const AuthAPI = axios.create({
  baseURL : 'https://api.auth.com',
});

const UserAPI = axios.create({
  baseURL: 'https://api.users.com',
});

// 3. 메서드에 따라서 엑시오스에 추가적인 옵션을 주입하는 방식이다.
import axios from 'axios';

axios.post('/user/1/memos', {
  title: '메모 제목',
  content: '메모의 내용입니다.',
}, {
  headers: {'Content-Type': 'application/json'},
})
```

request Config에 있는 옵션들은 [이 주소](https://axios-http.com/kr/docs/req_config)를 참조하자.

Axios의 응답은 아래와 같은 구조를 가지고 있다.

```js
{
  data: {},
  status: 200,
  statueText: 'OK',
  config: {}, //서버로 요청을 보냈을 때 어떤 설정을 가지고 있었는지를 의미
  request: {},
}
```
위 객체가 resolve로써 반환된다.  

요청이 실패했을 경우에는 아래와 같은 Promise.reject 객체를 반환한다.  
```js
//서버에서 실패를 반환한 경우 error.response 속성은 아래와 같이 반환한다.
{
  data: {},
  status:   ,
  statusText: ' '
}
```

아래는 try-catch로 resolve, reject 객체를 받는 예시이다. 
```js
//서버의 응답이 없는 경우 error.response 속성이 없다. 따라서 error.request를 받아야 한다.
axios.get('/user/1/memos')
  .then(respone => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.config);
    console.log(response.request);
  })
  .catch(error => {
    if (error.response) {
      //요청을 보냈으나 서버에서 실패로 응답한 경우
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.statusText);
    }
    else if (error.request) {
      //요청은 보냈으나 서버 응답이 없어 에러가 발생한 경우, 리스폰스가 없다.
      console.log(error.request);
    }
    else {
      // 이유 없이 에러가 발생한 경우도 핸들링해야 한다.
      console.log('Error', error.message);
    }
  });
```

`'babel-node'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.` 
해당 오류 발생 시
`npm i @babel/node -g` 로 글로벌 설치


삭제 후 재설치
`rm -rf node_modules`
`yarn install`
`yarn run dev`
npm버전 6과 7 이후가 호환이 안되는 문제가 있음. 

`localhost:8000` 에 접속하면 `API 서버가 정상적으로 실행되고 있습니다.`라는 문구가 뜬다.  

#### RESTful API 연동하기
`cd ../memo-application`  
`npm install axios --save`  

MemoApp.vue에 axios 라이브러리를 추가한 후, create메서드를 통해 baseURL을 초기화한다.  
```js
// .MemoApp.vue
<script>
...
import axios from 'axios';

const memoAPICore = axios.create({
    baseURL: 'http://localhost:8000/api/memos'
});
```

GET : MemoApp.vue
MemoApp.vue는 로컬 스토리지에서 메모를 가져온다. 이를 axios의 get을 통해 받아오도록 수정한다.
```js
export default {
    name: 'MemoApp',
    ...
    created () { 
        // this.memos = localStorage.memos? JSON.parse(localStorage.memos) : [];  
        memoAPICore.get('/')
            .then(res => {
                this.memos = res.data;
            });
    },
    ...
}
```

CREATE : MemoForm, MemoApp
MemoForm에서 id와 관련된 부분을 삭제하고 데이터만 넘기도록 한다.  

```js
// ../MemoForm.vue
      addMemo() {
        const {title, content} = this;
        // const id = new Date().getTime();

        const isEmpty = title.length <= 0 || content.length <=0;
        if (isEmpty) {
          return false;
        }

        // this.$emit('addMemo', {id, title, content});
        this.$emit('addMemo', {title, content});
        this.resetFields();
      }
```

MemoApp에서 addMemo를 post()메서드를 이용한다.  
```js
// ../MemoApp.vue
        addMemo (payload) {
            // this.memos.push(payload)
            // this.storeMemo()
            memoAPICore.post('/', payload)
                .then(res=> {
                  this.memos.push(res.data);
                })
        },
```

여기까지 수정 후 `yarn run dev`로 서버를 실행(localhost:8080)하여 테스트해보자. 개발자도구로 Network에 들어가면 된다. 
status 201 최초 로드되고, ststus 204로 post되는 것을 확인할 수 있다. post된 데이터는 status 200으로 get된다.  


DELETE : MemoApp.vue
```js
// ../MemoApp.vue
        deleteMemo (id) {
            const targetIndex = this.memos.findIndex(v => v.id === id);
            // this.memos.splice(targetIndex, 1);
            // this.storeMemo();
            memoAPICore.delete(`/${id}`)
                .then(() => {
                    this.memos.splice(targetIndex, 1);
                })
        },
```
Delete 기능의 기본 로직은 같으며, Axios의 delete메서드를 사용한다는 점만 다르다.  

UPDATE : MemoApp.vue 
```js
// ../MemoApp.vue
        updateMemo(payload) {
            const {id, content} = payload;
            const targetIndex = this.memos.findIndex(v => v.id === id);
            const targetMemo = this.memos[targetIndex];
            // this.memos.splice(targetIndex, 1, {...targetMemo, content});
            // this.storeMemo();
            memoAPICore.put(`$${id}`, { content })
            .then(() => {
                this.memos.splice(targetIndex, 1, { ...targetMemo, content});
            })
        }
```
수정기능 역시 기본 로직은 같다. 수정할 대상의 인덱스를 받고, 해당 인덱스에 수정된 내용을 추가하여 splice로 반환한다.  

지금까지 구현한 CRUD는 별도의 에러, 예외처리는 하고 있지 않으나 실제 서비스에서는 예외처리를 진행해야 한다.  

### Vuex 적용하기
현재의 메모 앱은 메모-메모앱-앱으로, 컴포넌트에서 부모로 데이터를 넘겨준다. 새로운 기능을 추가할 때마다 이러한 흐름이 계속해서 추가되며, 컴포넌트가 많아질수록 이러한 기능 추가가 계속해서 이루어지면서 복잡해질 것임을 알 수 있다.  

컴포넌트 간 데이터의 흐름을 한 곳으로 모아야 개발의 단순함을 유지할 수 있다. 
vuex를 통해 데이터를 만들고(action), 저장하고(store), 확인하고(view), 확인가능한 데이터를 토대로 다시 만드는 구조를 만든다면 단방향으로 처리가 가능하다.  


`yarn add vuex --save`
`cd ../src/store`
`touch actions.js getters.js index.js mutaions.js states.js`

```js
// memo-application\src\store\index.js
import Vue from 'vue';
import Vuex from 'vuex';

import state from './states.js';
import getter from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
```








