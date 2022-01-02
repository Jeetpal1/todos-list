import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container my-3">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No task to display"
        : props.todos.map((todo) => {
            //To display the todo items
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
