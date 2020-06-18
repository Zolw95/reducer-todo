import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [],
    completed: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add Todo Item
  //Build a function that will dispatch an action to add a new todo
  //Write the case in your reducer for adding a todo (You can create a unique id with new Date())
  const addTodo = (todo) => {
    todo.id = Date.now();
    dispatch({ type: ADD_TODO, payload: todo });
  };
  // Toggle Todo Item
  // Build a function that will dispatch an action to toggle a todo's completed field
  // Invoke this new function when you click on a todo
  // Style your todo to somehow show that it is completed (be creative here!)
  // Write the case in your reducer for toggling the completed property
  const toggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  // Clear Completed Todos
  //Build a function that will dispatch an action to filter out any completed todos
  //Invoke this new function when you click on a "Clear completed" button
  //Write the case in your reducer for filtering completed todos
  const clearComplete = (todo) => {
    dispatch({ type: CLEAR_COMPLETED, payload: todo });
  };

  // Filter Todo List

  // Search Todo List

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
