import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState(), //자동으로 로컬스토리지 저장 및 불러오기
  ],
  state: {
    todos: [],
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length;
    },
    completedTodosCount(state) {
      //완료된 todo를 새로운 객체로 생성
      console.log(state.todos);
      const completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted === true;
      });
      //해당 객체의 길이를 반환
      return completedTodos.length;
    },
    unCompletedTodosCount(state, getters) {
      return getters.allTodosCount - getters.completedTodosCount;
    },
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem);
    },
    DELETE_TODO(state, todoIdx) {
      console.log("삭제실행", todoIdx);
      state.todos.splice(todoIdx, 1);
    },
    UPDATE_TODO_STATUS(state, todoItem) {
      // // console.log(state.todos[state.todos.indexOf(todoItem)].isCompleted);
      // state.todos[state.todos.indexOf(todoItem)].isCompleted =
      //   !todoItem.isCompleted;
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
    // LOAD_TODOS(state) {
    //   const localStorageTodos = localStorage.getItem("todos");
    //   const parsedTodos = JSON.parse(localStorageTodos);
    //   state.todos = parsedTodos;
    // },
    UPDATE_TODOS(state, newTodos) {
      state.todos = newTodos;
    },
  },
  actions: {
    createTodo(context, todoTitle) {
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      };
      console.log("액션함수 실행", todoItem, context);
      context.commit("CREATE_TODO", todoItem);
      // context.dispatch("seveTodosToLocalStorage");
    },
    deleteTodo(context, todoItem) {
      context.commit("DELETE_TODO", todoItem);
      // context.dispatch("seveTodosToLocalStorage");
    },
    updateTodoStatus(context, todoItem) {
      context.commit("UPDATE_TODO_STATUS", todoItem);
      // context.dispatch("seveTodosToLocalStorage");
    },
    // seveTodosToLocalStorage(context) {
    //   const jsonTodos = JSON.stringify(context.state.todos);
    //   localStorage.setItem("todos", jsonTodos);
    // },
    // loadTodos(context) {
    //   context.commit("LOAD_TODOS");
    // },
    updateTodos(context, newTodos) {
      context.commit("UPDATE_TODOS", newTodos);
    },
  },

  modules: {},
});
