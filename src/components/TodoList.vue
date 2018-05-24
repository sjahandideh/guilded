<template>
<div class="todo-list">
  <div class="ui big divided selection list">
    <todo-list-item/>
  </div>
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
