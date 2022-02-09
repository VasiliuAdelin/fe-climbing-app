import React, { useState } from "react";
import FeedPostCard from "./FeedPostCard";
import Modal from "../shared/Modals/Modal";
import ViewCardInfo from "../feed/ViewCardInfo";

const MOCK_POSTS = [
  {
    id: 1,
    imageURL:
      "https://57hours.com/wp-content/uploads/2020/09/Rock-climbing-Canada.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
    user: {
      profile:
        "https://img.redbull.com/images/c_crop,w_5122,h_2561,x_0,y_2956,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/06/03/83ddcec2-b607-4def-a965-abb0b94fa412/how-to-take-indoor-climbing-outdoors",
      name: "Roby roberto",
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
      "https://www.paralimpicromania.ro/wp-content/uploads/2021/07/IMG_20210707_143750_BURST019-768x1024.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
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
  {
    id: 3,
    imageURL:
      "https://www.paralimpicromania.ro/wp-content/uploads/2021/07/IMG_20210707_143750_BURST019-768x1024.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
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
  {
    id: 4,
    imageURL:
      "https://junglegym.ro/wp-content/uploads/2018/04/climbing-frames-for-small-gardens-jungle-casa-11.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting",
    user: {
      profile:
        "https://img.redbull.com/images/c_crop,w_5122,h_2561,x_0,y_2956,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/06/03/83ddcec2-b607-4def-a965-abb0b94fa412/how-to-take-indoor-climbing-outdoors",

      name: "Roby roberto",
    },
    likes: {
      total: 36,
      liked: false,
    },
    createdAt: new Date().toDateString(),
  },
  {
    id: 5,
    imageURL:
      "https://57hours.com/wp-content/uploads/2020/09/Rock-climbing-Canada.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
    user: {
      profile:
        "https://img.redbull.com/images/c_crop,w_5122,h_2561,x_0,y_2956,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/06/03/83ddcec2-b607-4def-a965-abb0b94fa412/how-to-take-indoor-climbing-outdoors",
      name: "Roby roberto",
    },
    likes: {
      total: 36,
      liked: false,
    },
    createdAt: new Date().toDateString(),
  },
  {
    id: 6,
    imageURL:
      "https://www.paralimpicromania.ro/wp-content/uploads/2021/07/IMG_20210707_143750_BURST019-768x1024.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
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
  {
    id: 7,
    imageURL:
      "https://www.paralimpicromania.ro/wp-content/uploads/2021/07/IMG_20210707_143750_BURST019-768x1024.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
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
  {
    id: 8,
    imageURL:
      "https://junglegym.ro/wp-content/uploads/2018/04/climbing-frames-for-small-gardens-jungle-casa-11.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting",
    user: {
      profile:
        "https://img.redbull.com/images/c_crop,w_5122,h_2561,x_0,y_2956,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/06/03/83ddcec2-b607-4def-a965-abb0b94fa412/how-to-take-indoor-climbing-outdoors",

      name: "Roby roberto",
    },
    likes: {
      total: 36,
      liked: false,
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
        <ViewCardInfo
          image={selectedPost.imageURL}
          profile={selectedPost?.user?.profile}
          name={selectedPost?.user?.name}
          description={selectedPost.description}
          createdAt={selectedPost.createdAt}
        />
      </Modal>
      <section className="pb-20 relative block bg-gray-900">
        <div className="mb-16">
          <div className="max-w-7xl px-10 pt-10 mx-auto">
            <div className="container mx-auto">
              {/* <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"> */}
              <div className="md:masonry before:box-inherit after:box-inherit">
                {MOCK_POSTS.map((post, index) => {
                  const { imageURL, description, user, createdAt, likes, id } =
                    post;
                  return (
                    <div className="md:break-inside">
                      <FeedPostCard
                        key={index}
                        profile={user.profile}
                        name={user.name}
                        image={imageURL}
                        description={description}
                        createdAt={createdAt}
                        totalLikes={likes.total}
                        liked={likes.liked}
                        handleOnClick={() => handleOnClickPost(id)}
                      />
                    </div>
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
