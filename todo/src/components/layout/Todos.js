import React, { useContext, Fragment } from "react";
// import TodoItem from "./TodoItem";
// import TodoContext from "../../context/todo/todoContext";

const Todos = (props) => {
  // const todoContext = useContext(TodoContext);

  // const { todos, clearComplete } = todoContext;

  // const clear = (e) => {
  //   const todo = todos.map((todo) => {
  //     console.log("func", todo);
  //     return todo;
  //   });
  //   clearComplete(todo);
  // };

  // console.log("todos", todos);

  return (
    <Fragment>
      <button
        onClick={() => {
          props.dispatch({ type: "CLEAR_COMPLETED" });
        }}
        className="btn btn-light btn-block"
      >
        Clear Completed
      </button>
      <div>
        {props.state.todos.map((todo) => {
          return (
            <div
              onClick={() => {
                props.dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                });
              }}
            >
              <p key={todo.id}>{todo.name}</p>
              {todo.completed ? (
                <p className="badge badge-primary linethrough">Completed</p>
              ) : (
                <p className="badge badge-success">Not Completed</p>
              )}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Todos;
