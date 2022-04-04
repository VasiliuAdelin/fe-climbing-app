import Button from "@material-tailwind/react/Button";
import H3 from "@material-tailwind/react/Heading3";
import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";
import { Link } from "react-router-dom";
import AddComment from "../Comment/AddComment";
import CommentSection from "../feed/CommentSection";
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
const ViewUserProfile = (props) => {
  const {
    name,
    imageLink,
    description,
    address,
    city,
    country,
    postalCode,
    phoneNumber,
    email,
    routesClimbed,
    personalRoutes,
    futureRoute,
  } = props;

  const fullAddress = `${address}, ${city}, ${country}, ${postalCode}`;

  return (
    <div className="px-0">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="-mt-20 overflow-hidden">
              <img
                src={imageLink}
                alt="Profile"
                className="h-32 w-32 rounded-full"
              />
              {/* <Image src={imageLink} alt="Profile picture" raised /> */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
          <Link to="/settings">
            <Button color="green" ripple="light">
              Edit
            </Button>
          </Link>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                {routesClimbed}
              </span>
              <span className="text-sm text-gray-700 whitespace-nowrap">
                Routes climbed
              </span>
            </div>
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                {personalRoutes}
              </span>
              <span className="text-sm text-gray-700 whitespace-nowrap">
                Personal routes
              </span>
            </div>
            <div className="lg:mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                {futureRoute}
              </span>
              <span className="text-sm text-gray-700 whitespace-nowrap">
                Future routes
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <H3 color="gray">{name}</H3>
        <div className="m-1 text-gray-700 font-medium flex items-center justify-center gap-2">
          <Icon name="place" size="xl" />
          {fullAddress}
        </div>
        <div className="m-1 text-gray-700 font-medium flex items-center justify-center gap-2">
          <Icon name="phone" size="xl" />
          {phoneNumber}
        </div>
        <div className="m-1 text-gray-700 font-medium flex items-center justify-center gap-2">
          <Icon name="mail" size="xl" />
          {email}
        </div>
      </div>

      <div className="mb-10 py-2 border-t border-gray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
            <LeadText color="blueGray">{description}</LeadText>
          </div>
        </div>
      </div>
      <hr />
      <p className="my-4 tracking-wide text-gray-900 font-sans leading-6">
        Feedback:
      </p>
      <AddComment />
      <div className="h-500">
        <div className="lg:overflow-y-auto h-full border border-gray-100 h-500">
          {MOCK_COMMENTS.map((comm, index) => {
            const { user, comment, postedAt } = comm;
            return (
              <CommentSection
                key={index}
                profile={user.profile}
                name={user.name}
                comment={comment}
                postedAt={postedAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

ViewUserProfile.defaultProps = {
  name: "John Doe",
  description: "Thebest as everything in the sky",
  position: "Climbing Trainer",
  phoneNumber: "113-112-2212",
  email: "johndoe@yahoo.com",
  imageLink:
    "https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=6609&index=0&w=605&h=434",
  city: "Iasi",
  country: "Romania",
  postalCode: "700333",
  address: "Str. Climg, Nr.128",
  routesClimbed: "23",
  personalRoutes: "2",
  futureRoute: "12",
};

export default ViewUserProfile;
