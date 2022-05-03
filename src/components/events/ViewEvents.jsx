import React from "react";
import EventItem from "./EventItem";

const ViewEvents = ({ events, onParticipate, onInterested }) => {
  return (
    <>
      {events.map((event, index) => (
        <EventItem
          key={event?.id || index}
          onParticipate={onParticipate}
          onInterested={onInterested}
          {...event}
        />
      ))}
    </>
  );
};

ViewEvents.defaultProps = {
  events: [],
  onInterested: () => undefined,
  onParticipate: () => undefined,
};

export default ViewEvents;
