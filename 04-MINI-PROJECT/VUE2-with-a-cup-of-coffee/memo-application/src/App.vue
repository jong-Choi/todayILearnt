<template>
  <div id="app">
    <app-header/>
    <memo-app/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import MemoApp from './components/MemoApp.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    MemoApp
  }
}
</script>

<style>
  @import './styles/reset.css';
  #app {
    width: 560px;
    margin: 0 auto;
  }
</style>


