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

const MOCK_COMMENTS = [
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-14.png?resize=255%2C255&ssl=1",
      name: "Darwin Watterson",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-18.png?resize=250%2C250&ssl=1",
      name: "Doggo Guda",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1",
      name: "Winnie The Pooh",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1",
      name: "Winnie The Pooh",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date().toDateString(),
  },
  {
    user: {
      profile:
        "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-22.png?resize=256%2C256&ssl=1",
      name: "Winnie The Pooh",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postedAt: new Date().toDateString(),
  },
];

module.exports = {
    MOCK_POSTS,
    MOCK_COMMENTS
}