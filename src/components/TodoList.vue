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
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  computed: mapGetters({
    items: 'getTodos'
  }),
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
