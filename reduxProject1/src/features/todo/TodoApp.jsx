import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./todoSlice";

const TodoApp = () => {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleEdit = (index) => {
    if (editText.trim() !== "") {
      dispatch(editTodo({ index, newText: editText }));
      setEditIndex(null);
      setEditText("");
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
      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(deleteTodo(item))}>delete</button>
          </li>
        ))}
      </ul> */}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <button onClick={() => handleEdit(index)}>save</button>
                <button onClick={() => setEditIndex(null)}>cancel</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditText(item);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => dispatch(deleteTodo(item))}>
                  delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
