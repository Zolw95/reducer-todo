import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        completed: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload) {
              todo.completed = true;
            }
          }),
        ],
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        completed: [
          ...state.todos.filter(
            (todo) => todo.completed !== action.payload.completed
          ),
        ],
      };
    default:
      return state;
  }
};
