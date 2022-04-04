import React from "react";
import EventItem from "./EventItem";

const ViewEvents = ({ events }) => {
  return (
    <>
      {events.map((event, index) => (
        <EventItem key={event?.id || index} {...event} />
      ))}
    </>
  );
};

ViewEvents.defaultProps = {
  events: [],
};

export default ViewEvents;
