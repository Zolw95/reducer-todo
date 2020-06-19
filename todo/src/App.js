import React, { Fragment, useReducer } from "react";
import { initialState, todoReducer } from "./context/todo/todoReducer";
import Navbar from "./components/layout/Navbar";
import TodoForm from "./components/layout/TodoForm";
import Todos from "./components/layout/Todos";
//import TodoState from "./context/todo/TodoState";

import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    //<TodoState>
    <Fragment>
      <Navbar />
      <TodoForm dispatch={dispatch} />
      <Todos state={state} dispatch={dispatch} />
    </Fragment>
    //</TodoState>
  );
};

export default App;
