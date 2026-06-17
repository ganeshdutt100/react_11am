import React from "react";

const File1 = (props) => {
  return (
    <div>
      <div className="logo">{props.logoName}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Project</li>
      </ul>
    </div>
  );
};

export default File1;
