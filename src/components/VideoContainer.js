import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const categoryValue = useSelector((store) => store.app.categoryValue);
  // console.log(categoryValue);

  const [video, setVideo] = useState([]);
  useEffect(() => {
    if (categoryValue == "All") {
      getVideo();
    } else {
      categoryVideo(categoryValue);
    }
  }, [categoryValue]);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideo(json?.items);
  };
  const categoryVideo = async (categoryValue) => {
    // console.log(categoryValue);
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${categoryValue}&type=video&key=${API_KEY}`
    );
    const json = await data.json();
    // console.log(categoryValue);
    setVideo(json?.items);
  };
  return (
    <div className="flex w-[80%] lg:w-[100%] flex-wrap justify-center ml-24 lg:ml-0">
      {video?.map((video) => (
        <Link
          key={typeof video.id == "object" ? video.id.videoId : video.id}
          to={`/watch/${
            typeof video.id == "object" ? video.id.videoId : video.id
          }`}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
