import React, { useEffect, useState } from "react";
const Button = ({ name }) => {
  const [active, setActive] = useState("All");

  const handleTag = (tag) => {
    if (active !== tag);
    setActive(tag);
  };

  // console.log(active);
  return (
    <div>
      <button
        onClick={() => {
          handleTag(name);
        }}
        className={`${
          active == name ? "bg-slate-950 text-white" : "bg-gray-200 text-black"
        } p-2 rounded-full m-2 h-10`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
