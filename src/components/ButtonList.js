import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategoryValue } from "../utils/appSlice";
const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const handleTag = (tag) => {
    if (active !== tag) {
      setActive(tag);
      // console.log(active);
    }
  };
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
    <div className="flex p-6 h-12 w-[96%] lg:mt-11  mt-[9%]  items-center m-4  overflow-x-scroll no-scrollbar pt-20">
      {buttonArr.map((name) => (
        <div className="" key={name}>
          <button
            onClick={() => {
              handleTag(name);
              dispatch(addCategoryValue(name));
            }}
            className={`${
              active == name
                ? "bg-slate-950 text-white"
                : "bg-gray-200 text-black"
            } p-2 rounded-full m-2 h-10 `}
          >
            {name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
