import { mutations } from '../../../../src/store/modules/guilds'

const {
  guildSubscribe
} = mutations

describe('guild mutations', () => {
  describe('guildSubscribe', () => {
    const state = {
      guilds: [
        { id: 1, members: [] }
      ]
    }

    const harry = {
      id: 1,
      username: 'Harry'
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
})
