import { InputIcon, Textarea, Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';

const INITIAL_STATE = {
  title: 'The best event name',
  description: 'The best description ever',
  typeOfEvent: 'typeOfEvent',
  duration: '2h',
  eventDate: '2022-04-06T20:30',
  city: 'city',
  country: 'country',
  address: 'address',
  geoLocation: 'geoLocation',
  mainImage: 'https://via.placeholder.com/400',
};

function CreateEvent({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      typeOfEvent,
      duration,
      eventDate,
      city,
      country,
      address,
      geoLocation,
      mainImage,
    } = values;

    const payload = {
      title,
      description,
      typeOfEvent,
      duration,
      eventDate,
      location: {
        city,
        country,
        address,
        geoLocation,
      },
      assets: [mainImage],
    };

    onSubmit(payload);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className="h-screen overflow-y-scroll overflow-x-hidden py-12 pl-1" onSubmit={handleSubmit}>
      <div className="lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:p-2">
        <Card className="rounded-xl w-full lg:w-3/5">
          <CardHeader color="green" className="rounded-xl">
            <span className="inline-block text-lg font-bold">
              Wow, a new event is comming! Rock it!
            </span>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Event Name *"
                  required
                  value={values.title}
                  name="title"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="datetime-local"
                  color="green"
                  placeholder="Date & Time *"
                  value={values.eventDate}
                  name="eventDate"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Event Image Link *"
                  value={values.mainImage}
                  name="mainImage"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Type of Event *"
                  value={values.typeOfEvent}
                  name="typeOfEvent"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Duration *"
                  iconName="time"
                  value={values.duration}
                  name="duration"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="City *"
                  value={values.city}
                  name="city"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Country *"
                  value={values.country}
                  name="country"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="GeoLocation"
                  value={values.geoLocation}
                  name="geoLocation"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="mb-6">
                <InputIcon
                  type="text"
                  color="green"
                  placeholder="Address *"
                  value={values.address}
                  name="address"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="mb-6">
                <Textarea
                  color="green"
                  placeholder="Description *"
                  value={values.description}
                  name="description"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center bg-bb">
              <Button type="submit" color="green" size="lg">
                Let's rock
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

CreateEvent.defaultProps = {
  onSubmit: () => undefined,
};
export default CreateEvent;
