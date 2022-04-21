import React from "react";
import { isArray, isEmpty } from "lodash";
import EventsLanding from "../components/events/EventsLanding";
import ComplexLayout from "../components/layouts/ComplexLayout";
import ViewEvents from "../components/events/ViewEvents";

const mockEvents = [
  {
    id: 1,
    name: "Event Name",
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
  },
  {
    id: 2,
    name: "Event Name",
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
  },
  {
    id: 3,
    name: "Event Name",
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
  },
];

const EmptyEvents = () => (
  <div className="w-full p-4 min-h-200 flex justify-center items-center">
    <span className="font-bold text-lg">
      Oops, there are no events for now...
    </span>
  </div>
);

const Events = () => {
  const events = mockEvents;
  const existEvents = isArray(events) && !isEmpty(events);

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Events"
      subtitle="Let's get togheter"
      customBackground="https://svycarskabouda.cz/wp-content/uploads/2019/07/pexels-photo-1000445.jpeg"
    >
      <div className="w-3/5 m-auto">
        <div className="border border-gray-100 shadow-lg hover:shadow-xl rounded-lg">
          <EventsLanding month="Martie" year="2020" />
          {!existEvents && <EmptyEvents />}
          {existEvents && <ViewEvents events={events} />}
        </div>
      </div>
    </ComplexLayout>
  );
};

export default Events;
