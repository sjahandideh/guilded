<template>
  <a class="todo-list-item item">
    {{ item.title }}
    <i v-if="item.state === 'fail'" class="large icon times circle outline red"></i>
    <i v-if="item.state === 'success'" class="large icon check circle outline green"></i>
    <i v-if="item.state === 'active'" class="large icon clock outline yellow"></i>

    <i class="link icon large failed trash alternate circle orange" @click="removeTodoItem(item.id)"></i>
    <i class="link icon large done check circle green" @click="markTodoItemAsDone(item.id)"></i>
    <i class="link icon large failed times circle red" @click="markTodoItemAsFailed(item.id)"></i>
    <i class="link icon large failed clock circle yellow" @click="markTodoItemAsActive(item.id)"></i>
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
    'markTodoItemAsFailed',
    'markTodoItemAsActive',
    'removeTodoItem'
  ])
}
</script>

<style type='scoped'>
.todo-list-item {
  text-align: left;
  display: flex;
}
.todo-list-item i.link {
  visibility: hidden;
  position: relative;
  left: -35px;
}
.todo-list-item:hover i {
  opacity: 0.2;
}
.todo-list-item:hover i.link {
  visibility: visible;
  opacity: 1;
}
.done {
  color: green !important;
}
.failed {
  color: red!important;
}
.todo-list-item i {
  float: right;
}
.todo-list-item-done {
  text-decoration: line-through;
}
</style>
