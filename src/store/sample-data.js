/* eslint-disable no-unused-vars */
import moment from 'moment'

const SAMPLE_MINUTES_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ipsum augue. Aenean posuere varius turpis et pellentesque. Phasellus augue sem, scelerisque eget nulla a, porta dictum dolor. Quisque nisl mi, vestibulum vitae semper nec, efficitur in lacus. Nam ut tellus efficitur, scelerisque elit ac, interdum urna. Fusce luctus, nunc at hendrerit gravida, metus urna feugiat felis, nec suscipit augue ligula eget mi. In interdum at eros ut volutpat. In fermentum, massa vulputate dapibus sollicitudin, ipsum est rutrum massa, at viverra nisi ex sit amet dolor.\nMauris at hendrerit erat. Nullam eu velit iaculis, dignissim libero at, vulputate eros. Donec lectus ipsum, ullamcorper non ex at, malesuada semper augue. Proin posuere diam quis nulla fringilla dictum. Phasellus vel maximus libero. Vivamus dapibus et urna sed vestibulum. Mauris in sagittis erat, nec aliquet sapien. Ut a nunc mollis, pharetra arcu eu, consectetur dui. In posuere ligula eget cursus commodo. Pellentesque et elit laoreet, posuere nisl in, pretium magna. Praesent tempor mattis metus, vel pellentesque libero ullamcorper interdum. Pellentesque suscipit gravida urna, non efficitur nisi interdum vitae. Nunc tellus magna, sodales sit amet aliquet in, varius in ex. Sed dapibus pulvinar sodales. Nam in sagittis augue.`

const SAMPLE_USERS = [
  {
    id: 1,
    username: 'shamim'
  },
  {
    id: 2,
    username: 'toby'
  },
  {
    id: 3,
    username: 'hannah'
  },
  {
    id: 4,
    username: 'chris'
  },
  {
    id: 5,
    username: 'karyn'
  }
]

const MEETING_STATES = {
  ACTIVE: 'active',
  DONE: 'finished'
}

const MEETINGS = [
  {
    id: 1,
    guildId: 1,
    date: moment().subtract(1, 'weeks').calendar(),
    goal: 'Suggest action plans to embrace diversity in our work environment',
    agenda: `1. Focus on intervention, not just bias reduction\n2.Keep the focus on workplace issues, not personal ones`,
    minutes: SAMPLE_MINUTES_TEXT,
    state: MEETING_STATES.DONE
  },
  {
    id: 2,
    guildId: 1,
    date: moment().add(1, 'days').calendar(),
    goal: 'Suggest action plans to embrace diversity in our work environment',
    agenda: `1. Focus on intervention, not just bias reduction\n2.Keep the focus on workplace issues, not personal ones`,
    state: MEETING_STATES.ACTIVE
  }
]

const SAMPLE_GUILDS = [
  {
    id: 1,
    title: 'Culture Guild',
    logo: 'culture-guild.jpg',
    meetings: [MEETINGS[0], MEETINGS[1]],
    members: []
  },
  {
    id: 2,
    title: 'Design Guild',
    logo: 'design-guild.jpg',
    members: []
  },
  {
    id: 3,
    title: 'Web Guild',
    logo: 'web-guild.svg',
    members: []
  },
  {
    id: 4,
    title: 'Mobile Guild',
    logo: 'mobile-guild.jpg',
    members: []
  },
  {
    id: 5,
    title: 'Cloud Guild',
    logo: 'cloud-guild.jpg',
    members: []
  }
]

export { SAMPLE_GUILDS, SAMPLE_USERS }
