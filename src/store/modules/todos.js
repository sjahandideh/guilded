const state = {
  todos: []
}

const getters = {
  getTodos () {
    return state.todos
  }
}

export const actions = {}

export const mutations = {
  createTodoItem (state, title) {
    let todos = state.todos
    todos.push({
      id: (state.todos.length + 1),
      title: title,
      state: 'active'
    })

    state.todos = todos
  },
  removeTodoItem (state, id) {
    let todos = state.todos.filter(e => e.id !== id)

    state.todos = todos
  },
  markTodoItemAsDone (state, id) {
    let todos = state.todos
    let item = _findItem(state.todos, id)
    item.state = 'success'

    state.todos = todos
  },
  markTodoItemAsFailed (state, id) {
    let todos = state.todos
    let item = _findItem(state.todos, id)
    item.state = 'fail'

    state.todos = todos
  },
  markTodoItemAsActive (state, id) {
    let todos = state.todos
    let item = _findItem(state.todos, id)
    item.state = 'active'

    state.todos = todos
  }
}

// private help functions
function _findItem (todos, id) {
  let item = todos.filter(e => e.id === id)
  if (item.length === 0) {
    throw Error('Todo item with id ' + id + ' could not be found')
  }
  return item[0]
}

export default {
  state,
  getters,
  actions,
  mutations
}
