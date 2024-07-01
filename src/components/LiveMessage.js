import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveMessage = () => {
  const [msgValue, setMsgValue] = useState();
  const dispatch = useDispatch();
  const nameMsg = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("api polling");
      dispatch(addChat({ name: generateRandomName(), msg: makeid(20) }));
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse  h-[400px] overflow-y-scroll  ">
        {nameMsg.map((e, i) => {
          return <ChatMessage key={i} name={e.name} msg={e.msg} />;
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addChat({ name: "Twinkle", msg: msgValue }));
          setMsgValue("");
        }}
      >
        <div className="w-full shadow-lg flex items-center  ">
          <input
            placeholder="Send text"
            className=" w-[60%] outline-none p-2 m-2"
            value={msgValue}
            onChange={(e) => setMsgValue(e.target.value)}
          />
          <button className="h-10 w-[20%] ml-5 rounded-lg bg-red-600 text-white">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveMessage;
