const initialState = {
  setEditTodo: null,
  todos: [
    { id: 1, value: "Belajar React", status: false },
    { id: 2, value: "Belajar Redux", status: false },
    { id: 3, value: "Belajar HTML CSS JS", status: true },
  ]
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
        todos: UpdateTodos
      };
      case "DELETE_TODO":
        const DeleteTodo = state.todos.filter(todo => todo.id != action.payload);
        return {
          todos : DeleteTodo
        }
      case "EDIT_TODO":
        const EditTodo = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, value: action.payload.updatedValue};
          }
          return todo;
        });
        return {
          todos : EditTodo,
          setEditTodo : null
        }
      case "SET_EDIT_TODO":
        return {
          ...state,
          setEditTodos: action.payload
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
export function DeleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function editTodo (id, updatedValue) {
  return {
    type: "EDIT_TODO",
    payload: { id, updatedValue }
  };
};
export function setEditTodo(id) {
  return {
    type: "SET_EDIT_TODO",
    payload: id
  };
};