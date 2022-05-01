import React, { useEffect, useState } from "react";
import { isArray, isEmpty } from "lodash";
import EventsLanding from "../components/events/EventsLanding";
import ComplexLayout from "../components/layouts/ComplexLayout";
import ViewEvents from "../components/events/ViewEvents";
import { useDispatch, useSelector } from "react-redux";
import { createEventAsync, getEvents } from "../features/events/events.actions";
import Modal from "../components/shared/Modals/Modal";
import CreateEvent from "../components/events/CreateEvent";

const EmptyEvents = () => (
  <div className="w-full p-4 min-h-200 flex justify-center items-center">
    <span className="font-bold text-lg">
      Oops, there are no events for now...
    </span>
  </div>
);

const Events = () => {
  const [openModal, setOpenModal] = useState(false);
  const [events, setEvents] = useState([]);
  const { events: reduxEvents } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    setEvents(reduxEvents);
  }, [reduxEvents]);

  const handleOnAddEvent = (payload) => {
    setOpenModal(false)
    dispatch(createEventAsync({ ...payload, author: user.id }));
    setTimeout(() => {
      dispatch(getEvents());
    }, 2000);
  };

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Events"
      subtitle="Let's get togheter"
      customBackground="https://svycarskabouda.cz/wp-content/uploads/2019/07/pexels-photo-1000445.jpeg"
    >
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <CreateEvent onSubmit={handleOnAddEvent} />
      </Modal>
      <div className="w-3/5 m-auto">
        <div className="border border-gray-100 shadow-lg hover:shadow-xl rounded-lg">
          <EventsLanding
            onCreate={() => setOpenModal(true)}
            month="Martie"
            year="2020"
          />
          {isEmpty(events) && <EmptyEvents />}
          {!isEmpty(events) && <ViewEvents events={events} />}
        </div>
      </div>
    </ComplexLayout>
  );
};

export default Events;
