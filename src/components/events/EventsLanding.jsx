import React from 'react';
import { noop } from 'lodash';
import { Icon } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';

const style = {
  background: 'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://wallpaperaccess.com/full/263963.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

function EventsLanding({
  month, year, onCreate, onNext, onPrevious,
}) {
  return (
    <div
      style={style}
      className="w-full min-h-200 bg-yellow-500 p-4 rounded-lg shadow-xl relative text-white"
    >
      <div>
        <span className="uppercase text-lg font-bold m-2 font-sans">
          {month}
          ,
        </span>
        <span>{year}</span>
      </div>
      <div className="absolute bottom-1 left-1">
        <Button
          color="green"
          size="lg"
          ripple="light"
          className="m-1 opacity-70 hover:opacity-90"
          onClick={onCreate}
        >
          <Icon name="add" size="xl" color="white" />
          Create Event
        </Button>
      </div>
      <div className="absolute bottom-1 right-1">
        <Button
          color="green"
          size="lg"
          iconOnly
          rounded
          ripple="light"
          className="m-1 p-0 opacity-50 hover:opacity-90"
          onClick={onPrevious}
        >
          <Icon name="arrow_back_ios" size="xl" color="white" />
        </Button>
        <Button
          color="green"
          size="lg"
          iconOnly
          rounded
          ripple="light"
          onClick={onNext}
          className="m-1 opacity-50 hover:opacity-90"
        >
          <Icon name="arrow_forward_ios" size="xl" color="white" />
        </Button>
      </div>
    </div>
  );
}

EventsLanding.defaultProps = {
  month: 'Martie',
  year: '2022',
  onCreate: noop,
  onNext: noop,
  onPrevious: noop,
};
export default EventsLanding;
