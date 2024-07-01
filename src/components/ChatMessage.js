import React from "react";

const ChatMessage = ({ name, msg }) => {
  return (
    <div className="m-2 p-2 bg-gray-100 flex">
      <img
        className="h-8  mr-2  "
        src="https://tse4.mm.bing.net/th?id=OIP.XRiVQ9J-JCuJuLpXybndqgHaHv&pid=Api&P=0&h=180"
      />
      <span className="mr-3 font-bold">{name}</span>
      <span>{msg}</span>
    </div>
  );
};

export default ChatMessage;
