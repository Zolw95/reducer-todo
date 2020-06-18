import React, { useContext, Fragment } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../../context/todo/todoContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;
  console.log("todos", todos);

  return (
    <Fragment>
      <div>
        <button className="btn btn-light btn-block">Clear Completed</button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Fragment>
  );
};

export default Todos;
