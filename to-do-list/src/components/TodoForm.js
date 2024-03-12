import React, { useState } from "react";

export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit.value);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">
          {props.edit.id == null ? "Add Todo" : "Edit Todo"}
        </button>
      </form>
    </div>
  );
};
