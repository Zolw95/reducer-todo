import React, { useState, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;

  const [todo, setTodo] = useState({
    name: "",
    id: "",
    completed: false,
  });

  const { name } = todo;

  // Handle Form onChange
  const onChange = (e) => {
    e.preventDefault();
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  // Add Todo Item to List
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({
      name: "",
      id: "",
      completed: false,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add Item"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <div>
        <input
          type="submit"
          value="Add Todo Item"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default TodoForm;
