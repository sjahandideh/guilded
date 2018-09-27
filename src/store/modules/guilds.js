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
  guildSubscribe (state, { guildId, user }) {
    let guilds = state.guilds
    let guild = _findItem(guilds, guildId)

    // add user to the guild
    let newUser = !_isUserInGuild(guild, user)
    if (guild && guild.id && newUser) {
      guild.members.push(user)
    }

    // reorder guilds to have this at the front
    let orderedGuilds = guilds.filter(g => g.id !== guild.id)
    orderedGuilds.unshift(guild)

    state.guilds = orderedGuilds
  },
  guildUnsubscribe (state, { guildId, user }) {
    let guilds = state.guilds
    let guild = _findItem(guilds, guildId)

    let members = guild.members.filter(m => m.id !== user.id)
    guild.members = members

    state.guilds = guilds
  }
}

// private help functions
function _findItem (guilds, id) {
  let item = guilds.filter(e => e.id === id)
  return item[0]
}

function _isUserInGuild(guild, user) {
  return guild.members.filter(m => m.id === user.id).length > 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
