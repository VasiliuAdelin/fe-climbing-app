import { Icon } from "@material-tailwind/react";
import { Button } from "gpl-tailwind-theme";
import React from "react";
import moment from "moment";
import Accordion from "../shared/Accordion/Accordion";

const EventItem = ({
  title,
  description,
  typeOfEvent,
  duration,
  eventDate,
  location,
  assets,
  participants,
  interested,
}) => {
  const { city, country, address } = location;

  const mainImage = assets[0] ? assets[0] : "";
  const where = `${address}, ${city}, ${country}`;

  const totalParticipants = participants.length
  const totalInterested = interested.length

  return (
    <div className="border-b border-gray-100">
      <Accordion
        title={title}
        containerClass="w-full p-3 border border-gray-100 rounded m-1 hover:bg-gray-100"
        titleContainerClass="w-full p-4 border-l-2 border-greenNormal text-lg"
      >
        <div className="p-2">
          <div className="flex justify-center items-center border-b border-gray-100 p-4">
            <img
              src={mainImage}
              alt="imgevent"
              className="h-500 shadow-lg rounded hover:shadow-xl"
            />
          </div>
          <div className="w-full flex flex-wrap justify-start my-4 ">
            <div className="flex items-center border border-gray-100 p-2 rounded w-2/4 m-2">
              <Icon name="access_time" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">When ?</span>
                <p className="text-greenNormal text-base">
                  {moment(eventDate).format("lll")}
                </p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-1/4 m-2">
              <Icon name="merge_type" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">What ?</span>
                <p className="text-greenNormal text-base">{typeOfEvent}</p>
              </div>
            </div>

            <div className="flex items-center border border-gray-100 p-2 rounded w-1/4 m-2">
              <Icon name="timelapse" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">How long ?</span>
                <p className="text-greenNormal text-base">{duration}</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-2/4 m-2">
              <Icon name="location_on" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">Where ?</span>
                <p className="text-greenNormal text-base">{where}</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-full m-2">
              <Icon name="location_on" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">About</span>
                <p className="text-dark text-base">{description}</p>
              </div>
            </div>
            <div className="flex">
              <Button
                color="green"
                size="base"
                ripple="light"
                className="m-1 opacity-70 hover:opacity-90"
              >
                <Icon name="check" size="xl" color="white" />
                See you there ({totalParticipants})
              </Button>
              <Button
                color="blue"
                size="base"
                ripple="light"
                className="m-1 opacity-70 hover:opacity-90"
              >
                <Icon name="add" size="xl" color="white" />I want to join ({totalInterested})
              </Button>
            </div>
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
};
export default EventItem;
