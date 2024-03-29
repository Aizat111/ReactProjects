import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { MdDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

export const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id !== null) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <MdDeleteOutline
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
            console.log(edit);
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};
