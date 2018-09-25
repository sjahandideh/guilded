<template>
<div class="ui grid left aligned two column">
  <div class="twelve wide column">
    <div class="ui grid">
      <div class="sixteen wide column">
        <div class="ui segment">
          <h2 class="ui floated header">{{ title }}</h2>
          <div class="ui clearing divider"></div>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="ui two column grid">
      <event-list :items="futureEvents" title="Future Events"/>
      <event-list :items="pastEvents" title="Past Events"/>
    </div>
  </div>
  <div class="four wide column">
    <img class="ui medium rounded image" :src='require(`@/assets/${logo}`)'>
    <div class="ui divider"></div>
    <div class="ui four wide column">
      <user-list :items="members"/>
    </div>
  </div>
</div>
</template>

<script>
import EventList from './EventList.vue'
import UserList from './UserList.vue'

export default {
  props: [
    'id',
    'title',
    'type',
    'logo',
    'description',
    'members',
    'events'
  ],
  components: {
    EventList,
    UserList
  },
  computed: {
    pastEvents: function () {
      return this.events.finished
    },
    futureEvents: function () {
      return this.events.active
    }
  },
  methods: {
    subscribe: function (guildId) {
      let user = this.$store.getters.getUser
      this.$store.commit('guildSubscribe', guildId, user)
    }
  }
}
</script>

<style type='scoped'>
</style>
