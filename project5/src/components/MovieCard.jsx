// src/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "16px",
        margin: "15px",
        width: "220px",
        backgroundColor: "#1f1f1f",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        textAlign: "center",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <h3
        style={{
          fontSize: "16px",
          margin: "12px 0 6px 0",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {movie.Title}
      </h3>
      <span
        style={{
          backgroundColor: "#ffc107",
          color: "#000",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {movie.Year}
        
      </span>
    </div>
  );
};

export default MovieCard;
