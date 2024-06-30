import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="w-[270px] shadow-lg m-2 p-2 h-80">
      <img className="rounded-lg" src={thumbnails.medium.url} />
      <h1 className="font-bold my-2">{title}</h1>
      <h2>{channelTitle}</h2>
      <h2>{statistics.viewCount}views</h2>
    </div>
  );
};

export default VideoCard;
