import { mutations } from '../../../../src/store/modules/todos'

const {
  createTodoItem,
  removeTodoItem,
  markTodoItemAsDone,
  markTodoItemAsFailed
} = mutations

describe('todo mutations', () => {
  it('createTodoItem', () => {
    const state = {
      todos: []
    }

    createTodoItem(state, 'Call sis')
    expect(state.todos.length).toEqual(1)
    expect(state.todos[0]).toEqual(
      expect.objectContaining({
        id: 1,
        title: 'Call sis',
        state: 'active'
      })
    )
  })

  it('removeTodoItem', () => {
    const state = {
      todos: [
        {
          id: 1,
          title: 'Call sis',
          state: 'active'
        }
      ]
    }

    expect(state.todos.length).toEqual(1)
    removeTodoItem(state, 1)
    expect(state.todos.length).toEqual(0)
  }),

  it('marks item as success', () => {
    const state = {
      todos: [
        {
          id: 1,
          title: 'Call sis',
          state: 'active'
        }
      ]
    }

    markTodoItemAsDone(state, 1)
    expect(state.todos[0].state).toEqual('success')
  }),

  it('marks item as fail', () => {
    const state = {
      todos: [
        {
          id: 1,
          title: 'Call sis',
          state: 'active'
        }
      ]
    }

    markTodoItemAsFailed(state, 1)
    expect(state.todos[0].state).toEqual('fail')
  }),

  it('throws error when item is not there', () => {
    const state = {
      todos: []
    }

    function failingFunction() {
      markTodoItemAsDone(state, 1)
    }

    expect(failingFunction).toThrowError(/could not be found/);
  })
})
