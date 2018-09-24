<template>
  <div class="guild-list-item card">
    <div class="content">
      <div class="header">{{ item.title }}</div>
    </div>
    <div class="image">
      <img :src='require(`@/assets/${item.logo}`)'>
    </div>
    <div class="extra content">
      <span class="left floated like">
        <i class="like icon" @click="subscribe(item.id)"></i>
        Join
      </span>
      <span class="right floated">
        <i class="users icon"></i>
        {{ item.members.length }} Members
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    subscribe: function (guildId) {
      let userId = this.$store.getters.getUserId
      this.$store.commit('guildSubscribe', guildId, userId)
    }
  }
}
</script>

<style type='scoped'>
</style>
