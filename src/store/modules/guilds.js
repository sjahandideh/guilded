import { SAMPLE_GUILDS } from '../sample-data'

const state = {
  guilds: SAMPLE_GUILDS
}

export const getters = {
  getGuilds () {
    return state.guilds
  }
}

export const actions = {}

export const mutations = {
  guildSubscribe (state, payload) {
    let guildId = payload.guildId
    let user = payload.user

    let guilds = state.guilds
    let guild = _findItem(guilds, guildId)

    // add user to the guild
    let existingUser = guild.members.filter(m => m.id === user.id).length > 0
    if (guild && guild.id && !existingUser) {
      guild.members.push(user)
    }

    // reorder guilds to have this at the front
    let orderedGuilds = guilds.filter(g => g.id !== guild.id)
    orderedGuilds.unshift(guild)

    state.guilds = orderedGuilds
  },
  guildCreate (state, title) {
    let guilds = state.guilds
    guilds.push({
      id: (state.guilds.length + 1),
      title: title
    })

    state.guilds = guilds
  },
  gulidRemove (state, id) {
    let guilds = state.guilds.filter(e => e.id !== id)

    state.guilds = guilds
  }
}

// private help functions
function _findItem (guilds, id) {
  let item = guilds.filter(e => e.id === id)
  return item[0]
}

export default {
  state,
  getters,
  actions,
  mutations
}
