import React, { useReducer } from "react";
import { todoReducer, initialState } from "../../context/todo/todoReducer";
//import TodoContext from "../../context/todo/todoContext";

const TodoItem = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // const todoContext = useContext(TodoContext);

  // const { toggleTodo } = todoContext;

  //const { id, name, completed } = todo;

  // //Get ID of Todo Item
  // const handleClick = (e) => {
  //   toggleTodo(id);
  // };

  // console.log("todoitem", todo);

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        <span
          className={`badge ${
            state.completed ? " badge-primary linethrough" : "badge-success"
          }`}
          onClick={() => dispatch({ type: "TOGGLE_TODO" })}
        >
          {" "}
          {state.initialState}
        </span>
      </h3>
    </div>
  );
};

export default TodoItem;
