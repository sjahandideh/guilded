import Vue from 'vue'
import Router from 'vue-router'
import GuildList from '@/components/GuildList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GuildList',
      component: GuildList
    },
    {
      path: '/guilds',
      name: 'GuildList',
      component: GuildList
    }
  ]
})
