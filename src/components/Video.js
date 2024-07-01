import React, { useEffect, useState } from "react";
import { Video_api } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Video = () => {
  const [video, setVideo] = useState();
  const movie = async () => {
    const data = await fetch(Video_api);
    const json = await data.json();
    setVideo(json?.items);
  };
  useEffect(() => {
    movie();
  });
  return (
    <div className="flex flex-wrap justify-center">
      {video?.map((video) => (
        <Link key={video.id} to={"/watch/" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Video;
