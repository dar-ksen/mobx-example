import { observer } from "mobx-react-lite";
import React from "react";
import todo from "./store/todo";

const Todo = () => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>FetchTodos</button>

      {todo.todos.map((t) => (
        <div key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => todo.completeTodo(t)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default observer(Todo);
