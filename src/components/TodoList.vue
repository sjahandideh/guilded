<template>
<div class="todo-list">
  <table class="ui celled table">
    <tbody>
      <todo-list-item/>
    </tbody>
  </table>
</div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  }
}
</script>

<style>
.todo-list {
  width: 310px;
  margin: 40px auto;
}
</style>
