/* eslint-disable no-unused-vars */
import moment from 'moment'

const SAMPLE_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ipsum augue. Aenean posuere varius turpis et pellentesque. Phasellus augue sem, scelerisque eget nulla a, porta dictum dolor. Quisque nisl mi, vestibulum vitae semper nec, efficitur in lacus. Nam ut tellus efficitur, scelerisque elit ac, interdum urna. Fusce luctus, nunc at hendrerit gravida, metus urna feugiat felis, nec suscipit augue ligula eget mi. In interdum at eros ut volutpat. In fermentum, massa vulputate dapibus sollicitudin, ipsum est rutrum massa, at viverra nisi ex sit amet dolor.`
const SAMPLE_MINUTES_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ipsum augue. Aenean posuere varius turpis et pellentesque. Phasellus augue sem, scelerisque eget nulla a, porta dictum dolor. Quisque nisl mi, vestibulum vitae semper nec, efficitur in lacus. Nam ut tellus efficitur, scelerisque elit ac, interdum urna. Fusce luctus, nunc at hendrerit gravida, metus urna feugiat felis, nec suscipit augue ligula eget mi. In interdum at eros ut volutpat. In fermentum, massa vulputate dapibus sollicitudin, ipsum est rutrum massa, at viverra nisi ex sit amet dolor.\nMauris at hendrerit erat. Nullam eu velit iaculis, dignissim libero at, vulputate eros. Donec lectus ipsum, ullamcorper non ex at, malesuada semper augue. Proin posuere diam quis nulla fringilla dictum. Phasellus vel maximus libero. Vivamus dapibus et urna sed vestibulum. Mauris in sagittis erat, nec aliquet sapien. Ut a nunc mollis, pharetra arcu eu, consectetur dui. In posuere ligula eget cursus commodo. Pellentesque et elit laoreet, posuere nisl in, pretium magna. Praesent tempor mattis metus, vel pellentesque libero ullamcorper interdum. Pellentesque suscipit gravida urna, non efficitur nisi interdum vitae. Nunc tellus magna, sodales sit amet aliquet in, varius in ex. Sed dapibus pulvinar sodales. Nam in sagittis augue.`

const SAMPLE_USERS = [
  {
    id: 1,
    username: 'shamim',
    avatar: 'shamim.png'
  },
  {
    id: 2,
    username: 'toby',
    avatar: 'man.png'
  },
  {
    id: 3,
    username: 'hannah',
    avatar: 'girl.png'
  },
  {
    id: 4,
    username: 'chris',
    avatar: 'man2.png'
  },
  {
    id: 5,
    username: 'karyn',
    avatar: 'girl2.png'
  }
]

const STATES = {
  ACTIVE: 'active',
  DONE: 'finished'
}

const EVENT_TYPES = {
  MEETING: 'meeting'
}

const EVENTS = [
  {
    id: 1,
    guildId: 1,
    type: EVENT_TYPES.MEETING,
    date: moment().subtract(1, 'weeks'),
    goal: 'Suggest action plans to embrace diversity in our work environment',
    agenda: `1. Focus on intervention, not just bias reduction\n2.Keep the focus on workplace issues, not personal ones`,
    minutes: SAMPLE_MINUTES_TEXT,
    state: STATES.DONE
  },
  {
    id: 2,
    guildId: 1,
    type: EVENT_TYPES.MEETING,
    date: moment().add(1, 'days'),
    goal: 'Suggest action plans to embrace diversity in our work environment',
    agenda: `1. Focus on intervention, not just bias reduction\n2.Keep the focus on workplace issues, not personal ones`,
    state: STATES.ACTIVE
  }
]

const SAMPLE_GUILDS = [
  {
    id: 1,
    title: 'Culture Guild',
    logo: 'culture-guild.jpg',
    description: SAMPLE_TEXT,
    events: {
      active: [EVENTS[1]],
      finished: [EVENTS[0]]
    },
    members: []
  },
  {
    id: 2,
    title: 'Design Guild',
    logo: 'design-guild.jpg',
    description: SAMPLE_TEXT,
    events: {
      active: [],
      finished: []
    },
    members: []
  },
  {
    id: 3,
    title: 'Web Guild',
    logo: 'web-guild.svg',
    description: SAMPLE_TEXT,
    events: {
      active: [],
      finished: []
    },
    members: []
  },
  {
    id: 4,
    title: 'Mobile Guild',
    logo: 'mobile-guild.jpg',
    description: SAMPLE_TEXT,
    events: {
      active: [],
      finished: []
    },
    members: []
  },
  {
    id: 5,
    title: 'Cloud Guild',
    logo: 'cloud-guild.jpg',
    description: SAMPLE_TEXT,
    events: {
      active: [],
      finished: []
    },
    members: []
  }
]

export { SAMPLE_GUILDS, SAMPLE_USERS }
