<template>
  <div>
    <input type="text" v-model.trim="todoTitle" @keyup.enter="createTodo" />
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todoTitle: null, //input태그의 value와 v-model로 연결되어있음. 공백을 제거하기 위해 .trim을 추가.
    };
  },
  methods: {
    createTodo() {
      if (this.todoTitle) {
        //if todoTitle이 비어있지 않을때
        console.log(this.todoTitle);
        this.$store.dispatch("createTodo", this.todoTitle);
      }
      this.todoTitle = null;
    },
  },
};
</script>

<style></style>
