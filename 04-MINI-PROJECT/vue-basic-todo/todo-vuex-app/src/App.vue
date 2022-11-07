<template>
  <div id="app">
    <h1>Todo List</h1>
    <h2>전체 할 일 : {{ allTodosCount }} 개</h2>
    <h3>
      완료한 일: {{ completedTodosCount }} 개, 해야할 일 :
      {{ unCompletedTodosCount }}
    </h3>
    <TodoList />
    <TodoForm />
    <!-- <button @click="loadTodos">Todo 불러오기</button> -->
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  computed: {
    allTodosCount() {
      return this.$store.getters.allTodosCount;
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount;
    },
    unCompletedTodosCount() {
      return this.$store.getters.unCompletedTodosCount;
    },
  },
  components: {
    TodoList,
    TodoForm,
  },
  methods: {
    // loadTodos() {
    //   this.$store.dispatch("loadTodos");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
