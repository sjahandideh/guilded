import { SAMPLE_USERS } from '../sample-data'

export const state = {
  user: SAMPLE_USERS[0]
}

export const getters = {
  getUserId: state => state.user.id
}

export default {
  state,
  getters
}
