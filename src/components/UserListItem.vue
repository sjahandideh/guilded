<template>
  <div class="item">
    <img class="ui avatar image mini" :src='require(`@/assets/${item.avatar}`)'>
    <div class="content">
      <span class="header">{{ item.username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style type='scoped'>
</style>
