import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams } from "react-router-dom";
import LiveMessage from "./LiveMessage";
import Video from "./Video";
import { API_KEY } from "../utils/constants";

const WatchPage = () => {
  const params = useParams();
  const [data, setData] = useState();
  // console.log(params.id);
  const dispatch = useDispatch();
  const videoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`
    );
    const json = await data.json();
    // console.log(json);
    setData(json?.items[0]?.snippet.title);
  };
  useEffect(() => {
    dispatch(closeMenu());
    videoData();
  }, []);

  const commentData = [
    {
      name: "Twinkle",
      comment: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Twinkle",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          replies: [
            {
              name: "Twinkle",
              comment: "Lorem ipsum dolor sit amet consectetur.",
              replies: [
                {
                  name: "Twinkle",
                  comment: "Lorem ipsum dolor sit amet consectetur.",
                  replies: [
                    {
                      name: "Twinkle",
                      comment: "Lorem ipsum dolor sit amet consectetur.",
                      replies: [
                        {
                          name: "Twinkle",
                          comment: "Lorem ipsum dolor sit amet consectetur.",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Twinkle",
      comment: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Twinkle",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          replies: [
            {
              name: "Twinkle",
              comment: "Lorem ipsum dolor sit amet consectetur.",
              replies: [],
            },
            {
              name: "Twinkle",
              comment: "Lorem ipsum dolor sit amet consectetur.",
              replies: [],
            },
          ],
        },
        {
          name: "Twinkle",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          replies: [],
        },
      ],
    },
    {
      name: "Twinkle",
      comment: "Lorem ipsum dolor sit amet consectetur.",
      replies: [],
    },
    {
      name: "Twinkle",
      comment: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Twinkle",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          replies: [],
        },
        {
          name: "Twinkle",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          replies: [],
        },
      ],
    },
    {
      name: "Twinkle",
      comment: "Lorem ipsum dolor sit amet consectetur.",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    // console.log(data);
    const { name, comment } = data;
    return (
      <>
        <div className="flex bg-gray-100  rounded-lg m-2">
          <div className="h-9 w-9 m-2">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.XRiVQ9J-JCuJuLpXybndqgHaHv&pid=Api&P=0&h=180"
              alt="user_logo"
            />
          </div>
          <div className="m-2 ">
            <p className="text-bold ">{name}</p>
            <p className="">{comment}</p>
          </div>
        </div>
      </>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => {
      return (
        <div key={index}>
          <Comment key={index} data={comment} />
          <div className="ml-5  border border-l-black">
            <CommentList key={index} comments={comment.replies} />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex w-[85%] mt-20 justify-between">
        <div className="flex flex-col lg:w-[65%] w-[100%]">
          <div className=" m-2 w-[100%] ">
            <iframe
              src={
                "https://www.youtube.com/embed/" +
                params.id +
                "?rel=0&autoplay=1"
              }
              title="YouTube video player"
              className="lg:w-[900px] lg:h-[400px] w-[120%] h-[70%]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <div>
              <h1 className="text-2xl mt-2 font-bold">{data}</h1>
            </div>
            <div className="flex mt-4">
              <button className="bg-gray-200 lg:w-[20%] hover:opacity-90  px-4 py-2 h-10 w-[32%] ml-5 rounded-lg m-4">
                Download
              </button>
              <button className="h-10 lg:w-[20%] w-[30%] ml-5 hover:opacity-90 m-4 px-3 rounded-lg bg-red-600 text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="m-2 lg:mt-4  mt-32">
            <h1 className="text-2xl font-bold m-1">Comments</h1>
            <CommentList comments={commentData} />
          </div>
        </div>

        <div className="flex flex-col w-[30%] ml-[15%]">
          <div className="m-2 h-[400px]  rounded-sm border border-black hidden lg:block ">
            <LiveMessage />
          </div>
          <div className="mt-20 hidden lg:block">
            <Video />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
