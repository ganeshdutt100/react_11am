import React from "react";

const Card = ({ name, details }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{details}</p>
    </div>
  );
};
// const Card = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.details}</p>
//     </div>
//   );
// };

export default Card;
