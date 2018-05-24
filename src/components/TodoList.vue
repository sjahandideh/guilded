<template>
<div class="todo-list">
  <div class="ui big divided selection list">
    <todo-list-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      />
  </div>
</div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name: 'TodoList',
  data () {
    return {
      items: [
        { id: 1, title: 'Clean House', status: 'success' },
        { id: 2, title: 'Call sis', status: 'fail' },
        { id: 3, title: 'Take a shower', status: 'active'}
      ]
    }
  },
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
