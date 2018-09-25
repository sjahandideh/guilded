<template>
  <div class="ui list">
    <user-list-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      />
  </div>
</template>

<script>
import UserListItem from './UserListItem.vue'

export default {
  name: 'UserList',
  props: {
    items: {
      type: Array
    }
  },
  components: {
    UserListItem
  }
}
</script>

<style type='scoped'>
</style>
