import { SAMPLE_USERS } from '../sample-data'

export const state = {
  user: SAMPLE_USERS[0]
}

export const getters = {
  getUser: state => state.user
}

export default {
  state,
  getters
}
