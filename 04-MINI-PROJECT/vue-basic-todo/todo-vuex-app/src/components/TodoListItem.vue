<template>
  <div>
    <span
      @click="updateTodoStatus"
      :class="{ 'is-completed': todo.isCompleted }"
      >{{ todo.title }}</span
    >
    <button @click="deleteTodo">삭제</button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: Object,
    idx: Number,
  },
  methods: {
    deleteTodo() {
      // console.log("Todo 삭제");
      console.log(this.todo);
      this.$store.dispatch("deleteTodo", this.idx);
    },
    updateTodoStatus() {
      this.$store.dispatch("updateTodoStatus", this.todo);
    },
  },
};
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
</style>
