import Vue from 'vue'
import Router from 'vue-router'
import GuildList from '@/components/GuildList'
import Guild from '@/components/Guild'

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
    },
    {
      path: '/guild/:id',
      name: 'Guild',
      component: Guild,
      props: true
    }
  ]
})
