import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

const TodoApp = () => {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}> Add </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(deleteTodo(item))}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
