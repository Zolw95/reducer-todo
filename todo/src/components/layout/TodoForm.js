import React, { useState } from "react";
//import TodoContext from "../../context/todo/todoContext";

const TodoForm = ({ dispatch }) => {
  //const todoContext = useContext(TodoContext);

  const [todo, setTodo] = useState({
    name: "",
    id: "",
    completed: false,
  });

  //console.log("todoform", todo);

  const { name } = todo;

  // Handle Form onChange
  const onChange = (e) => {
    e.preventDefault();
    //setTodo({ [e.target.name]: e.target.value });
    setTodo(e.target.value);
  };

  // Add Todo Item to List
  const onSubmit = (e) => {
    e.preventDefault();
    //todoContext.addTodo(todo);
    // setTodo({
    //   name: "",
    //   id: "",
    //   completed: false,
    // });
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
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
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: todo });
          }}
        />
      </div>
    </form>
  );
};

export default TodoForm;
