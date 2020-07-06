//import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from "../types";

export const initialState = {
  todos: [
    {
      name: "Finish Project",
      completed: false,
      id: Date.now(),
    },
  ],
};

const toggleComplete = (id, todosList) => {
  const newTodos = todosList.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    } else {
      return todo;
    }
  });
  return newTodos;
};

const removetodo = (todosList) => {
  const clearincomplete = todosList.filter((item) => {
    return item.completed === false;
  });
  return clearincomplete;
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case "TOGGLE_TODO":
      return {
        todos: toggleComplete(action.payload, state.todos),
      };
    //   return {
    //     ...state,
    //     completed: [
    //       ...state.todos.map((todo) => {
    //         if (todo.id === action.payload) {
    //           todo.completed = true;
    //         }
    //       }),
    //     ],
    //   };
    case "CLEAR_COMPLETED":
      return {
        todos: removetodo(state.todos),
      };
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos.filter((todo) => {
    //         if (todo.completed !== action.payload.completed) {
    //           return state;
    //         }
    //       }),
    //     ],
    //   };
    default:
      return state;
  }
};
