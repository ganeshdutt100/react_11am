import React from "react";

const Heading = ({ title, data }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{data}</p>
    </div>
  );
};

export default Heading;
