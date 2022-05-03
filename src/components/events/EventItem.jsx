import { Icon } from "@material-tailwind/react";
import { Button } from "gpl-tailwind-theme";
import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";
import Accordion from "../shared/Accordion/Accordion";
import { useSelector } from "react-redux";

const EventItem = ({
  id,
  title,
  description,
  typeOfEvent,
  duration,
  eventDate,
  location,
  assets,
  participants,
  interested,
  author,
  onParticipate,
  onInterested,
}) => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { city, country, address } = location;

  const mainImage = assets[0] ? assets[0] : "";
  const where = `${address}, ${city}, ${country}`;

  const totalParticipants = participants.length;
  const totalInterested = interested.length;

  const isFinished = moment(eventDate).isBefore(moment());

  const userIsParticipating =
    isLoggedIn && participants.length > 0 && participants.includes(user.id);
  const userIsInterested =
    isLoggedIn && interested.length > 0 && interested.includes(user.id);

  return (
    <div className="border-b border-gray-100">
      <Accordion
        title={title}
        containerClass="w-full p-1 lg:p-3 border border-gray-100 rounded lg:m-1 hover:bg-gray-100 overflow-hidden"
        titleContainerClass="w-full p-4 border-l-2 border-greenNormal text-lg"
      >
        <div className="lg:p-2">
          <div className="flex justify-center items-center border-b border-gray-100 lg:p-4">
            <img
              src={mainImage}
              alt="imgevent"
              className="max-h-500 shadow-lg rounded hover:shadow-xl"
            />
          </div>
          <div className="flex items-center border border-gray-100 p-2 rounded m-2">
            <Icon name="person" size="xl" color="green" />
            <div className="ml-2">
              <span className="text-gray-500 text-xs">Created By</span>
              <Link to={`/profile/${author.id}`}>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={author.imageLink}
                    alt="as"
                  />
                  <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                      {author.name}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-start my-4 ">
            <div className="flex items-center border border-gray-100 p-2 rounded w-full lg:w-2/4 m-2">
              <Icon name="access_time" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">When ?</span>
                <p className="text-greenNormal text-base">
                  {moment(eventDate).format("lll")}
                </p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-full lg:w-1/4 m-2">
              <Icon name="merge_type" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">What ?</span>
                <p className="text-greenNormal text-base">{typeOfEvent}</p>
              </div>
            </div>

            <div className="flex items-center border border-gray-100 p-2 rounded w-full lg:w-1/4 m-2">
              <Icon name="timelapse" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">How long ?</span>
                <p className="text-greenNormal text-base">{duration}</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-full lg:w-2/4 m-2">
              <Icon name="location_on" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">Where ?</span>
                <p className="text-greenNormal text-base">{where}</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-full lg:w-full m-2">
              <Icon name="location_on" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">About</span>
                <p className="text-dark text-base">{description}</p>
              </div>
            </div>
            {!isFinished && isLoggedIn && (
              <div className="flex items-center border border-gray-100 p-2 rounded w-full m-2">
                <Icon name="timelapse" size="xl" color="green" />
                <div className="ml-2">
                  <span className="text-gray-500 text-xs">Status</span>
                  <div className="flex">
                    <Button
                      color={userIsParticipating ? "green" : "gray"}
                      size="base"
                      ripple="light"
                      className="m-1 opacity-70 hover:opacity-90"
                      onClick={() => onParticipate(id)}
                    >
                      <Icon name="check" size="xl" color="white" />
                      Participate ({totalParticipants})
                    </Button>
                    <Button
                      color={userIsInterested ? "blue" : "gray"}
                      size="base"
                      ripple="light"
                      className="m-1 opacity-70 hover:opacity-90"
                      onClick={() => onInterested(id)}
                    >
                      <Icon name="add" size="xl" color="white" />
                      Interested ({totalInterested})
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {isFinished && (
              <div className="flex items-center border border-gray-100 p-2 rounded w-full lg:w-1/4 m-2">
                <Icon name="timelapse" size="xl" color="green" />
                <div className="ml-2">
                  <span className="text-gray-500 text-xs">Status</span>
                  <p className="text-greenNormal text-base">Terminat</p>
                </div>
              </div>
            )}
            {!isFinished && !isLoggedIn && (
              <div className="m-2"> Please login to join </div>
            )}
          </div>
        </div>
      </Accordion>
    </div>
  );
};

EventItem.defaultProps = {
  title: "N/A",
  month: "N/A",
  year: "N/A",
  description: "N/A",
  typeOfEvent: "N/A",
  duration: "N/A",
  eventDate: "N/A",
  location: {
    city: "N/A",
    country: "N/A",
    address: "N/A",
    geoLocation: "N/A",
  },
  assets: [],
  participants: [],
  interested: [],
  author: {
    id: "",
    imageLink: "",
    name: "",
  },
  onInterested: () => undefined,
  onParticipate: () => undefined,
};
export default EventItem;
