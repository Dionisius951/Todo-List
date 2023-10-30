const initialState = {
  todos: [
    { id: 1, value: "Belajar React", status: false },
    { id: 2, value: "Belajar Redux", status: false },
    { id: 3, value: "Belajar HTML CSS JS", status: true },
  ],
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodos = {
        id: state.todos.length + 1,
        value: action.payload,
        status: false,
      };

      const cloneTodos = [...state.todos, newTodos];

      return {
        todos: cloneTodos,
      };
    case "STATUS_TODO":
      const UpdateTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
      return {
        todos: UpdateTodos,
      };
    default:
      return state;
  }
}
export function addTodos(value) {
  return {
    type: "ADD_TODO",
    payload: value,
  };
}

export function changeStatus(id) {
  return {
    type: "STATUS_TODO",
    payload: id,
  };
}
