<template>
<a class="todo-list-item item">
  {{ item.title }}
  <i v-if="item.status === 'fail'" class="large times circle red icon"></i>
  <i v-if="item.status === 'success'" class="large check circle green icon"></i>
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
.todo-list-item-done {
  text-decoration: line-through;
}
</style>
