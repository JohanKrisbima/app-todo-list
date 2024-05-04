<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>
<template>
  <div class="todo-app">
    <h2>To Do List With Pinia Library</h2>
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>
<style scoped>
h2 {
  color: aliceblue;
}
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #8a99b0;
  margin: 0 auto;
}
</style>
