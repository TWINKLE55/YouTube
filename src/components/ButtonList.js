import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonArr = [
    "All",
    "Gaming",
    "News",
    "Songs",
    "Movies",
    "Space",
    "Environment",
    "Webseries",
    "Study",
    "PhysicsWallah",
    "leo",
    "BeastboyShub",
    "Valentines",
    "kissDay",
    "NewYear",
    "Christmas",
  ];
  return (
    <div className="flex p-6 h-12  items-center m-4  overflow-x-scroll no-scrollbar">
      {buttonArr.map((button) => (
        <Button name={button} key={button} />
      ))}
    </div>
  );
};

export default ButtonList;
