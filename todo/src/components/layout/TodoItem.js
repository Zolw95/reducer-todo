import React, { useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  const { toggleTodo } = todoContext;

  const { id, name, completed } = todo;

  //Get ID of Todo Item
  const handleClick = (e) => {
    toggleTodo(id);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        <span
          className={`badge ${
            completed ? " badge-primary linethrough" : "badge-success"
          }`}
          onClick={handleClick}
        >
          {" "}
          {name}
        </span>
      </h3>
    </div>
  );
};

export default TodoItem;
