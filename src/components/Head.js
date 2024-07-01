import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { chacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const [show, setShow] = useState(false);
  const searchChache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchChache[searchText]) {
        setSuggestionData(searchChache[searchText]);
      } else {
        getSuggestion();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestionData(json[1]);
    // console.log(suggestionData);
    // console.log("api call:" + searchText);
    dispatch(chacheResults({ [searchText]: json[1] }));
  };

  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="w-[100%] shadow-lg h-18 bg-white  p-2 flex justify-between z-30 fixed">
      <div className="flex h-10 items-center w-[10%]">
        <img
          className="w-12 cursor-pointer "
          onClick={() => handleToggleMenu()}
          src="https://tse3.mm.bing.net/th?id=OIP.ovcJ2Zaf-EkM_Emrh76B6QHaHa&pid=Api&P=0&h=180"
        />
        <img
          className="ml-3 h-8 w-22 invisible lg:visible "
          src="https://tse4.mm.bing.net/th?id=OIP.xxNZm92rz6ZHHChoF2zZSAHaBp&pid=Api&P=0&h=180"
        />
      </div>
      <div className="w-[70%]">
        <div className=" w-[100%] col-span-2 flex justify-center items-center ">
          <input
            className="w-[70%] rounded-l-full outline-none mt-1 text-lg font-bold outline-gray-300 h-9 p-2"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
          />

          <img
            className="rounded-r-full h-11 items-center ml-1 "
            src="https://tse3.mm.bing.net/th?id=OIP.s2fpUGqUzC_uxD_d_j-WlQHaGS&pid=Api&P=0&h=180"
          />
        </div>
        {show && (
          <div className="w-[100%] ">
            <div className="absolute bg-white w-[48%] ml-[9%] mt-2  shadow-sm rounded-md">
              <ul className="w-[100%]  ">
                {suggestionData.map((e) => {
                  return (
                    <li
                      key={e}
                      className="m-2 px-2 shadow-sm border-gray-100 hover:bg-gray-100"
                    >
                      {e}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="w-[10%] ">
        <img
          className="h-12  mr-8 "
          src="https://tse4.mm.bing.net/th?id=OIP.XRiVQ9J-JCuJuLpXybndqgHaHv&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
};

export default Head;
