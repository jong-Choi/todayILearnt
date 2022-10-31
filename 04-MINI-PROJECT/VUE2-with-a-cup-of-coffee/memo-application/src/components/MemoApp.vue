<template>
    <div class="memo-app">
        <MemoForm @addMemo="addMemo" />
        <ul class="memo-list">
            <Memo />
        </ul>
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
    },
    methods: {
        addMemo (payload) {
            this.memos.push(payload)
            this.storeMemo()
        },
        storeMemo(){
            const memosToString = JSON.stringify(this.memos);
            localStorage.setItem('memos', memosToString);
        }
    }
} 
</script>

<style scoped>
    .memo-list {
        padding: 20px 0;
        margin: 0;
    }
</style>

