import { mutations } from '../../../../src/store/modules/guilds'

const {
  guildSubscribe,
  guildUnsubscribe
} = mutations

describe('guild mutations', () => {
  const harry = {
    id: 1,
    username: 'Harry'
  }

  const hermione = {
    id: 2,
    username: 'Hermione'
  }

  describe('guildSubscribe', () => {
    const state = {
      guilds: [
        { id: 1, members: [] }
      ]
    }

    let members = state.guilds[0].members

    it('adds unique member', () => {
      guildSubscribe(state, { guildId: 1, user: harry })
      expect(members.length).toEqual(1)
      expect(members).toEqual([harry])
    })

    it('does not re-add existing member', () => {
      guildSubscribe(state, { guildId: 1, user: harry })
      expect(members.length).toEqual(1)
    })
  })

  describe('guildUnsubscribe', () => {
    const state = {
      guilds: [
        { id: 1, members: [harry, hermione] }
      ]
    }

    it('removes unique member', () => {
      guildUnsubscribe(state, { guildId: 1, user: harry })
      expect(state.guilds[0].members.length).toEqual(1)
      expect(state.guilds[0].members).toEqual([hermione])
    })

    it('does not re-remove a member', () => {
      guildUnsubscribe(state, { guildId: 1, user: harry })
      expect(state.guilds[0].members.length).toEqual(1)
    })
  })
})
