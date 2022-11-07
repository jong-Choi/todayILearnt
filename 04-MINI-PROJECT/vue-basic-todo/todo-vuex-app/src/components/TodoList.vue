<template>
  <div>
    <draggable v-model="todos">
      <TodoListItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :idx="index"
      />
    </draggable>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import draggable from "vuedraggable";
// https://webisfree.com/2021-05-07/[vuejs]-%EB%93%9C%EB%9E%98%EA%B7%B8%EC%95%A4%EB%93%9C%EB%9E%8D-%EA%B5%AC%ED%98%84-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-vuedraggable 뷰 드래거블 사용법

export default {
  name: "TodoList",
  data() {
    return {};
  },
  components: { TodoListItem, draggable },
  computed: {
    todos: {
      //https://www.npmjs.com/package/vuedraggable
      get() {
        return this.$store.state.todos;
      },
      set(value) {
        this.$store.dispatch("updateTodos", value);
      },
    },
  },
  methods: {},
};
</script>

<style></style>
