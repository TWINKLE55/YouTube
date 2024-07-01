import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams } from "react-router-dom";
import LiveMessage from "./LiveMessage";

const WatchPage = () => {
  const params = useParams();
  // console.log(params.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const commentData = [
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
        <div>
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
      <div className="flex w-full">
        <div className="flex flex-col">
          <div className=" m-2 ">
            <iframe
              width="900"
              height="400"
              src={"https://www.youtube.com/embed/" + params.id}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="m-2 mt-4  ">
            <h1 className="text-2xl font-bold m-1">Comments</h1>
            <CommentList comments={commentData} />
          </div>
        </div>
        <div className="m-2 h-[400px] rounded-sm border border-black w-full">
          <LiveMessage />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
