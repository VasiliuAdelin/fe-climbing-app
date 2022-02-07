import React, { useState } from "react";
import FeedPostCard from "./FeedPostCard";
import Modal from "../shared/Modals/Modal";
import ViewCardInfo from "../feed/ViewCardInfo";

const MOCK_POSTS = [
  {
    id: 1,
    imageURL:
      "https://57hours.com/wp-content/uploads/2020/09/Rock-climbing-Canada.jpg",
    description: "Lffasdf ipsum",
    user: {
      profile:
        "https://i.natgeofe.com/n/7dbdf95f-fffa-42de-b935-9cbb11aeed16/adam-ondra-day-5-pitch_square.jpg",
      name: "Andrei albert",
    },
    likes: {
      total: 36,
      liked: false,
    },
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    imageURL:
      "https://www.gannett-cdn.com/presto/2020/10/16/USAT/c9cd1e39-b484-4417-9b47-8b916ba0b3b4-Maine_Acadia_Cavan-AlamyStockPhoto-horiz.jpg",
    description: "Lffasdf ipsum",
    user: {
      profile:
        "https://i.natgeofe.com/n/7dbdf95f-fffa-42de-b935-9cbb11aeed16/adam-ondra-day-5-pitch_square.jpg",
      name: "Andrei albert",
    },
    likes: {
      total: 36,
      liked: true,
    },
    createdAt: new Date().toDateString(),
  },
];

function NewsFeedPostsSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  const handleOnClickPost = (id) => {
    setSelectedPost({
      ...MOCK_POSTS.find((item, index) => item.id === id),
    });
    setShowModal(true);
  };
  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ViewCardInfo image={selectedPost.imageURL} />
      </Modal>
      <section className="pb-20 relative block bg-gray-900">
        <div className="mb-16">
          <div className="max-w-7xl px-10 pt-10 mx-auto">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                {MOCK_POSTS.map((post, index) => {
                  const { imageURL, description, user, createdAt, likes, id } =
                    post;
                  return (
                    <FeedPostCard
                      key={index}
                      profile={user.profile}
                      image={imageURL}
                      description={description}
                      name={user.name}
                      createdAt={createdAt}
                      totalLikes={likes.total}
                      liked={likes.liked}
                      handleOnClick={() => handleOnClickPost(id)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsFeedPostsSection;
