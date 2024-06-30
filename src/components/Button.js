import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 p-2 rounded-full m-2 ">{name}</button>
    </div>
  );
};

export default Button;
