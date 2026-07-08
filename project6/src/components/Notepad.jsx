import React, { useState } from "react";

const Notepad = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [noteList, setNoteList] = useState([]);

  const handleAddNote = (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both title and content.");
      return;
    }
    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };
    setNoteList([...noteList, newNote]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
      <hr />
      <div>
        {noteList.length === 0 ? (
          <p>No notes to display.</p>
        ) : (
          noteList.map((note) => (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notepad;
