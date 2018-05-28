<template>
  <a class="todo-list-item item" @click="markTodoItemAsDone(item.id)">
    {{ item.title }}
    <i v-if="item.state === 'fail'" class="large icon times circle outline red"></i>
    <i v-if="item.state === 'success'" class="large icon check circle outline green"></i>
    <i v-if="item.state === 'active'" class="large icon clock outline yellow"></i>
  </a>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: mapMutations([
    'markTodoItemAsDone',
    'markTodoItemAsFailed'
  ])
}
</script>

<style>
.todo-list-item {
  text-align: left;
}
.todo-list-item i {
  float: right;
}
.todo-list-item-done {
  text-decoration: line-through;
}
</style>
