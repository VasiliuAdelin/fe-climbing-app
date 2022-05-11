import Button from '@material-tailwind/react/Button';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import { Link } from 'react-router-dom';

function ViewUserDetails({
  name,
  imageLink,
  description,
  address,
  city,
  country,
  postalCode,
  phoneNumber,
  email,
  routesClimbed,
  personalRoutes,
  futureRoute,
}) {
  const fullAddress = `${address}, ${city}, ${country}, ${postalCode}`;

  return (
    <>
      <div className="w-full lg:w-3/12 px-4 lg:order-2 mx-auto flex justify-center">
        <div className="relative">
          <div className="-mt-20 overflow-hidden">
            <img
              src={imageLink}
              alt="Profile"
              className="h-32 w-32 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-4 lg:order-1 lg:-mt-20">
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
              {routesClimbed || 'N/A'}
            </span>
            <span className="text-sm text-gray-700 whitespace-nowrap">
              Routes climbed
            </span>
          </div>
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
              {personalRoutes || 'N/A'}
            </span>
            <span className="text-sm text-gray-700 whitespace-nowrap">
              Personal routes
            </span>
          </div>
          <div className="lg:mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
              {futureRoute || 'N/A'}
            </span>
            <span className="text-sm text-gray-700 whitespace-nowrap">
              Future routes
            </span>
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <H3 color="gray">{name}</H3>
        <div className="m-1 text-gray-700 font-medium flex items-center justify-center gap-2">
          <Icon name="place" size="xl" />
          {fullAddress}
        </div>
        <div className="m-1 text-gray-700 font-medium flex items-center justify-center gap-2">
          <Icon name="phone" size="xl" />
          {phoneNumber}
        </div>
        <div className="m-1 text-gray-700 font-medium flex items-center justify-center gap-2">
          <Icon name="mail" size="xl" />
          {email}
        </div>
      </div>

      <div className="mb-10 py-2 border-t border-gray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
            <LeadText color="blueGray">{description}</LeadText>
          </div>
        </div>
      </div>
    </>
  );
}

ViewUserDetails.defaultProps = {
  name: '',
  description: '',
  position: '',
  phoneNumber: 'N/A',
  email: '',
  imageLink: '',
  city: '',
  country: '',
  postalCode: '',
  address: '',
  routesClimbed: '',
  personalRoutes: '',
  futureRoute: '',
};

export default ViewUserDetails;
