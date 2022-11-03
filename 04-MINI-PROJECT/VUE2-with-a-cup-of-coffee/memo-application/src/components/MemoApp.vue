<template>
    <div class="memo-app">
        <MemoForm @addMemo="addMemo" />
        <ul class="memo-list">
            <Memo v-for="memo in memos" :key="memo.id" :memo="memo"
            @deleteMemo="deleteMemo"
            @updateMemo="updateMemo"/>
        </ul>
    </div>
</template>

<script>
import Memo from './Memo.vue';
import MemoForm from './MemoForm.vue';
import axios from 'axios';

const memoAPICore = axios.create({
    baseURL: 'http://localhost:8000/api/memos'
});

  // src폴더의 컴포넌트에서 모듈을 불러온다.
export default {
    name: 'MemoApp',
    data () {
        return {
            memos: [],  //할 일 목록 데이터를 빈 배열로 초기화 한 후
        };
    },
    created () { 
        // 로컬 스토리지 관련 코드 삭제
        // // localStorage에 할 일 목록이 있는 경우 이를 JSON 형식으로 불러온다.
        // // 실행 초기 외부로부터 데이터가 필요한 경우에는 이와 같이 create() 메서드를 이용하여 불러온다.
        // this.memos = localStorage.memos? JSON.parse(localStorage.memos) : [];  
        memoAPICore.get('/')
            .then(res => {
                this.memos = res.data;
            });
    },
      components: {
        Memo,
        MemoForm
    },
    methods: {
        addMemo (payload) {
            // this.memos.push(payload)
            // this.storeMemo()
            memoAPICore.post('/', payload)
                .then(res=> {
                  this.memos.push(res.data);
                })
        },
        storeMemo(){
            const memosToString = JSON.stringify(this.memos);
            localStorage.setItem('memos', memosToString);
        },
        deleteMemo (id) {
            const targetIndex = this.memos.findIndex(v => v.id === id);
            // this.memos.splice(targetIndex, 1);
            // this.storeMemo();
            memoAPICore.delete(`/${id}`)
                .then(() => {
                    this.memos.splice(targetIndex, 1);
                })
        },
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
    }
} 
</script>

<style scoped>
    .memo-list {
        padding: 20px 0;
        margin: 0;
    }
</style>

