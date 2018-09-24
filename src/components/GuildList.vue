<template>
<div class="guild-list">
  <div class="ui link centered three stackable cards">
    <guild-list-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      />
  </div>
</div>
</template>

<script>
import GuildListItem from './GuildListItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'GuildList',
  computed: mapGetters({
    items: 'getGuilds'
  }),
  components: {
    GuildListItem
  }
}
</script>

<style>
.guild-list {
}
</style>
