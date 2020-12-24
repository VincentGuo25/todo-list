import React from "react";

import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {props.filteredTodos.map((todo) => (
            <Todo
              todos={props.todos}
              setTodos={props.setTodos}
              key={todo.id}
              text={todo.text}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
