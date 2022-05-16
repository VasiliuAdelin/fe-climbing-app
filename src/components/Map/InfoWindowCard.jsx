import { Icon } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';
import React from 'react';

function InforWindowCard({
  name,
  type,
  grade,
  mainImage,
  location,
  linkToGo,
  linkToBack,
}) {
  return (
    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden  bg-white">
      <div
        className="relative z-10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))',
        }}
      >
        <a href={linkToBack}>
          <img style={{ width: '200px', height: '200px' }} src={mainImage} alt="Profile" />
        </a>
      </div>
      <div className="relative flex justify-between items-center flex-row z-50 -mt-10">
        <div>
          <p className="text-dark tracking-wide uppercase text-lg font-bold" style={{ width: '200px' }}>
            {name}
          </p>
          <p className="text-gray-500 text-sm">{`${type}, ${grade}`}</p>
        </div>
      </div>
      <div className="text-gray-600">
        <p>{location}</p>
      </div>
      <a href={linkToGo} target="_blank" rel="noreferrer">
        <Button
          color="green"
          buttonType="link"
          ripple="dark"
          className="py-0 px-4 w-full mt-1"
        >
          <Icon family="font-awesome" name="fa-solid fa-plus" size="lg" />
          DIRECTIONS
        </Button>
      </a>
    </div>
  );
}

InforWindowCard.defaultProps = {
  name: 'Bolovanul Mare',
  grade: '3+',
  type: 'Boulder',
  mainImage: 'https://via.placeholder.com/700',
  location: 'Str. Sucidava NR.9',
  linkToGo: 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393',
  linkToBack: '/',
};
export default InforWindowCard;
