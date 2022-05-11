import React, { useEffect, useState } from 'react';
import { cloneDeep, isArray, isEmpty } from 'lodash';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import EventsLanding from '../components/events/EventsLanding';
import ComplexLayout from '../components/layouts/ComplexLayout';
import ViewEvents from '../components/events/ViewEvents';
import {
  createEventAsync,
  getEvents,
  updateEvent,
} from '../features/events/events.actions';
import Modal from '../components/shared/Modals/Modal';
import CreateEvent from '../components/events/CreateEvent';

const MONTHS = [
  'Ianuarie',
  'Feb',
  'Mar',
  'April',
  'Mai',
  'Iun',
  'Iulie',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function EmptyEvents() {
  return (
    <div className="w-full p-4 min-h-200 flex justify-center items-center">
      <span className="font-bold text-lg">Oops, there are no events...</span>
    </div>
  );
}

function Events() {
  const [currentTime, setCurrentTime] = useState({
    month: moment().month() + 1,
    year: moment().year(),
  });
  const [openModal, setOpenModal] = useState(false);
  const [events, setEvents] = useState([]);
  const { events: reduxEvents } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents(`/?month=${currentTime.month}`));
  }, [currentTime]);

  useEffect(() => {
    setEvents(reduxEvents);
  }, [reduxEvents]);

  const handleOnAddEvent = (payload) => {
    setOpenModal(false);
    const { month, year } = currentTime;
    dispatch(createEventAsync({
      ...payload, author: user.id, month, year,
    }));
    setTimeout(() => {
      dispatch(getEvents(`/?month=${currentTime.month}`));
    }, 2000);
  };

  const handleOnPrevious = () => {
    const currentTimeClone = cloneDeep(currentTime);
    const { month, year } = currentTimeClone;

    if (month > 1) {
      currentTimeClone.month = month - 1;
    } else {
      currentTimeClone.month = 12;
      currentTimeClone.year = year - 1;
    }

    setCurrentTime(currentTimeClone);
  };
  const handleOnNext = () => {
    const currentTimeClone = cloneDeep(currentTime);
    const { month, year } = currentTimeClone;

    if (month < 12) {
      currentTimeClone.month = month + 1;
    } else {
      currentTimeClone.month = 1;
      currentTimeClone.year = year + 1;
    }

    setCurrentTime(currentTimeClone);
  };

  const handleOnParticipate = (id) => {
    let eventsClonde = cloneDeep(events);
    const selectedEvent = eventsClonde.find((event) => event.id === id);
    let selectedEventParticipants = cloneDeep(selectedEvent.participants || []);
    let selectedEventInterested = cloneDeep(selectedEvent.interested || []);

    if (selectedEventParticipants.includes(user.id)) {
      selectedEventParticipants = selectedEventParticipants.filter((item) => item !== user.id);
    } else {
      selectedEventParticipants.push(user.id);
    }

    if (selectedEventInterested.includes(user.id)) {
      selectedEventInterested = selectedEventInterested.filter((item) => item !== user.id);
    }

    dispatch(
      updateEvent({
        id,
        payload: {
          participants: selectedEventParticipants,
          interested: selectedEventInterested,
        },
      }),
    );

    eventsClonde = eventsClonde.map((event) => {
      if (event.id === id) {
        return {
          ...event,
          participants: selectedEventParticipants,
          interested: selectedEventInterested,
        };
      }
      return event;
    });

    setEvents(eventsClonde);
  };

  const handleOnInterested = (id) => {
    let eventsClonde = cloneDeep(events);
    const selectedEvent = eventsClonde.find((event) => event.id === id);
    let selectedEventParticipants = cloneDeep(selectedEvent.participants || []);
    let selectedEventInterested = cloneDeep(selectedEvent.interested || []);

    if (selectedEventInterested.includes(user.id)) {
      selectedEventInterested = selectedEventInterested.filter((item) => item !== user.id);
    } else {
      selectedEventInterested.push(user.id);
    }

    if (selectedEventParticipants.includes(user.id)) {
      selectedEventParticipants = selectedEventParticipants.filter((item) => item !== user.id);
    }

    dispatch(
      updateEvent({
        id,
        payload: {
          participants: selectedEventParticipants,
          interested: selectedEventInterested,
        },
      }),
    );

    eventsClonde = eventsClonde.map((event) => {
      if (event.id === id) {
        return {
          ...event,
          participants: selectedEventParticipants,
          interested: selectedEventInterested,
        };
      }
      return event;
    });

    setEvents(eventsClonde);
  };

  const { month, year } = currentTime;

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
      <div className="w-full lg:w-3/5 m-auto">
        <div className="border border-gray-100 shadow-lg hover:shadow-xl rounded-lg">
          <EventsLanding
            onCreate={() => setOpenModal(true)}
            month={MONTHS[month - 1]}
            year={year}
            onPrevious={handleOnPrevious}
            onNext={handleOnNext}
          />
          {isEmpty(events) && <EmptyEvents />}
          {!isEmpty(events) && (
            <ViewEvents
              onParticipate={handleOnParticipate}
              onInterested={handleOnInterested}
              events={events}
            />
          )}
        </div>
      </div>
    </ComplexLayout>
  );
}

export default Events;
