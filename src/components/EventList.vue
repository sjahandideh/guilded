<template>
  <div class="eight wide column">
    <h4 class="ui header grey">{{ title }}</h4>
    <div class="ui list">
      <event-list-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        />
    </div>
  </div>
</template>

<script>
import EventListItem from './EventListItem.vue'

export default {
  name: 'EventList',
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    }
  },
  components: {
    EventListItem
  }
}
</script>

<style type='scoped'>
</style>
