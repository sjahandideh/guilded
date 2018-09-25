<template>
  <a class="event-list-item item">
    <i :class="iconName"></i>
    <div class="content">
      <div class="header">{{ item.title }}</div>
      <div class="meta">
        <span class="date">{{ datify }}</span>
      </div>
      <div class="description">{{ item.goal}}</div>
    </div>
  </a>
</template>

<script>
import moment from 'moment'

export default {
  name: 'EventListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    datify: function () {
      return moment(this.item.date).calendar()
    },
    iconName: function () {
      let now = moment()
      return moment(this.item.date).isAfter(now)
        ? 'bullhorn large icon'
        : 'calendar check large icon'
    }
  },
  methods: {
    show: function (guild) {
      this.$router.push({
        name: 'Guild',
        params: guild
      })
    }
  }
}
</script>

<style type='scoped'>
</style>
