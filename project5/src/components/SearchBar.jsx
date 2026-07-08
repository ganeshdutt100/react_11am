// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <form
      onSubmit={onSearch}
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <input
        type="text"
        placeholder="Movie का नाम टाइप करें..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "12px 20px",
          width: "350px",
          fontSize: "16px",
          borderRadius: "25px 0 0 25px",
          border: "none",
          outline: "none",
          backgroundColor: "#fff",
          color: "#000",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          background: "#ffc107",
          color: "#000",
          border: "none",
          borderRadius: "0 25px 25px 0",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
