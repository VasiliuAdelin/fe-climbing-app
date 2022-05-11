import { InputIcon, Textarea, Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';

function AddNewPost({ onSubmit }) {
  const [, setIsDisabled] = useState(true);
  const [imageLink, setImageLink] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [geoLocation, setGeoLocation] = useState('');

  useEffect(() => {
    setIsDisabled(!(imageLink && description));
  }, [imageLink, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageLink && description) {
      onSubmit({
        imageLink,
        title,
        description,
        location,
        geoLocation,
      });
    }
  };

  return (
    <form className="h-screen w-screen overflow-y-scroll overflow-x-hidden py-12 pl-1" onSubmit={handleSubmit}>
      <div className="lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:p-2">
        <Card className="rounded-xl w-full lg:w-3/5">
          <CardHeader color="green" className="rounded-xl">
            <span className="inline-block text-lg font-bold">
              Tell us something awesome!
            </span>
          </CardHeader>
          <CardBody>
            <div className="lg:flex w-full ">
              <div className="lg:mr-4 lg:w-2/5 p-1">
                <div className="w-full mb-8">
                  <InputIcon
                    type="text"
                    color="white"
                    placeholder="Paste the image link"
                    iconName="link"
                    value={imageLink}
                    name="imageLink"
                    onChange={(e) => setImageLink(e.target.value)}
                  />
                </div>
                {imageLink && (
                  <img
                    className="w-auto mb-4 max-h-64 mx-auto rounded shadow-xl"
                    src={imageLink}
                    alt="alala"
                  />
                )}
              </div>
              <div className="p-1 w-full">
                <div className="mb-8 w-full">
                  <InputIcon
                    type="text"
                    color="white"
                    placeholder="Title..."
                    iconName="list"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap mt-10 font-light mb-8">
                  <Textarea
                    color="green"
                    placeholder="Description"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:mr-4 lg:w-2/5 p-1 mb-8">
                <InputIcon
                  type="text"
                  color="white"
                  placeholder="Geolocation (Lat, Long) Optional"
                  iconName="map"
                  value={geoLocation}
                  name="geoLocation"
                  onChange={(e) => setGeoLocation(e.target.value)}
                />
              </div>
              <div className="mb-2 w-full">
                <InputIcon
                  type="text"
                  color="white"
                  placeholder="Location..."
                  iconName="map"
                  value={location}
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center bg-bb">
              <Button
                type="submit"
                color="green"
                size="lg"
                className="rounded-custom-shape "
              >
                Add new post!
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

AddNewPost.defaultProps = {
  onSubmit: () => undefined,
};
export default AddNewPost;
