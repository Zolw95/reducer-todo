import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import TodoState from "./context/todo/TodoState";
import Todos from "./components/layout/Todos";
import "./App.css";
import TodoForm from "./components/layout/TodoForm";

const App = () => {
  return (
    <TodoState>
      <Fragment>
        <Navbar />
        <TodoForm />
        <Todos />
      </Fragment>
    </TodoState>
  );
};

export default App;
