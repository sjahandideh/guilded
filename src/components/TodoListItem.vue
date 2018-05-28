<template>
<a class="todo-list-item item">
  {{ item.title }}
  <i v-if="item.status === 'fail'" class="large icon times circle outline red"></i>
  <i v-if="item.status === 'success'" class="large icon check circle outline green"></i>
  <i v-if="item.status === 'active'" class="large icon clock outline yellow"></i>
</a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
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
