

export default function todos(state = [], action) {
    switch (action.type) {
      case 'EMPTY_TODO':
        return state.todo = []
      default:
        return state
    }
  }