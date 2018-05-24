<template>
  <div class="home">
    <h1>TODO LIST</h1>
    <new-todo />
    <todo-list />
  </div>
</template>

<script>
import NewTodo from './NewTodo.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'Home',
  components: {
    NewTodo,
    TodoList
  }
}
</script>

<style>
</style>
