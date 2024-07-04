import React, { useEffect, useState } from "react";
import { API_KEY, Video_api } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Video = () => {
  const categoryValue = useSelector((store) => store.app.categoryValue);
  const [video, setVideo] = useState();
  const movie = async () => {
    const data = await fetch(Video_api);
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
  useEffect(() => {
    if (categoryValue == "all") {
      movie();
    } else {
      categoryVideo(categoryValue);
    }
  }, [categoryValue]);
  return (
    <div className="flex flex-wrap justify-center">
      {video?.map((video) => {
        return (
          <div key={video.id}>
            <Link to={"/watch/" + video.id}>
              <VideoCard info={video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Video;
