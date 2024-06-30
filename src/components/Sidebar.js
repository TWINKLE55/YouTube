import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuToggle = useSelector((store) => store.app.menuShowUp);
  return (
    <>
      {menuToggle && (
        <div className="w-[15%] bg-gray-200 ">
          <div className="mt-2 border-b-4 my-3 p-7">
            <ul className="text-xl mt-2">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Shorts</li>
              <li>Subscription</li>
            </ul>
          </div>
          <div className="mt-2 border-b-4 my-3 p-7">
            <h1 className="font-red mb-2 font-bold text-xl">Subscriptions</h1>
            <ul className="text-lg m-1 ">
              <li>Crux</li>
              <li>Dhruv Rathee</li>
              <li>Beast Boy </li>
              <li>Sinful Foodie</li>
              <li>Space Videos </li>
            </ul>
          </div>
          <div className="mt-2  border-b-4 my-3 p-7">
            <h1 className="mb-2 font-bold text-xl">Explore</h1>
            <ul className="text-lg m-1  ">
              <li>Trending</li>
              <li>Movies</li>
              <li>Music</li>
              <li>Gaming</li>
              <li>News</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
