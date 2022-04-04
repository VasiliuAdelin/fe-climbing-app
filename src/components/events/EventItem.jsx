import { Icon } from "@material-tailwind/react";
import { Button } from "gpl-tailwind-theme";
import React from "react";
import Accordion from "../shared/Accordion/Accordion";

const EventItem = ({ name, mainImage }) => {
  return (
    <div className="border-b border-gray-100">
      <Accordion
        title={name}
        // titleContainerClass="w-full p-4 border-l-2 border-green-500 text-lg"
        containerClass="w-full p-3 border border-gray-100 rounded m-1 hover:bg-gray-100"
    titleContainerClass="w-full p-4 border-l-2 border-green-500 text-lg"
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
                <p className="text-green-500 text-base">
                  Monday, 28 Septembrie 2020 18:30
                </p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-1/4 m-2">
              <Icon name="merge_type" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">What ?</span>
                <p className="text-green-500 text-base">Seminar</p>
              </div>
            </div>

            <div className="flex items-center border border-gray-100 p-2 rounded w-1/4 m-2">
              <Icon name="timelapse" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">How long ?</span>
                <p className="text-green-500 text-base">2H</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-2/4 m-2">
              <Icon name="location_on" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">Where ?</span>
                <p className="text-green-500 text-base">
                  {" "}
                  Piatra Mare Venus Saturn, 700676
                </p>
              </div>
            </div>
            <div className="flex items-center border border-gray-100 p-2 rounded w-full m-2">
              <Icon name="location_on" size="xl" color="green" />
              <div className="ml-2">
                <span className="text-gray-500 text-xs">About</span>
                <p className="text-dark text-base">
                  Piatra Mare Venus Saturn, 700676Piatra Mare Venus Saturn,
                  700676, Piatra Mare Venus Saturn, 700676Piatra Mare Venus
                  Saturn, 700676,Piatra Mare Venus Saturn, 700676Piatra Mare
                  Venus Saturn, 700676 Piatra Mare Venus Saturn, 700676Piatra
                  Mare Venus Saturn, 700676,Piatra Mare Venus Saturn,
                  700676Piatra Mare Venus Saturn, 700676 Piatra Mare Venus
                  Saturn, 700676Piatra Mare Venus Saturn, 700676
                </p>
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
                See you there 28
              </Button>
              <Button
                color="blue"
                size="base"
                ripple="light"
                className="m-1 opacity-70 hover:opacity-90"
              >
                <Icon name="add" size="xl" color="white" />I want to join 128
              </Button>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

EventItem.defaultProps = {
  name: "The Best Ever Name Here",
  description: "",
  location: "Str. Street 28",
  startDate: new Date().toString(),
  createdBy: {
    userID: "21313",
    userName: "Daniel Pricop",
  },
  createdAt: new Date().toDateString(),
  participants: 23,
  interested: 123,
  mainImage: "https://via.placeholder.com/1000",
};
export default EventItem;
