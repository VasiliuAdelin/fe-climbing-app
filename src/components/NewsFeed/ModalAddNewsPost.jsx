/* eslint-disable react-hooks/exhaustive-deps */
import { InputIcon, Textarea } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';
import React, { useEffect, useState } from 'react';
import Container from '../login/Container';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';

function ModalAddNewsPost({ handleOnClick }) {
  const [postValues, setPostValues] = useState({
    imageLink: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setPostValues({
      ...postValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setPostValues({
      ...postValues,
    });
  }, [postValues.description]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Card className="rounded-xl">
          <CardHeader color="green" className="rounded-custom-shape">
            {/* <input
                  type="file"
                  value={selectedFile}
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="cursor-pointer relative block opacity-0 w-full h-full p-20"
                /> */}
            <div className="mb-12 px-4 w-full">
              <InputIcon
                style={{ color: 'white' }}
                type="text"
                color="white"
                placeholder="Link in here..."
                iconName="link"
                value={postValues.imageLink}
                name="imageLink"
                onChange={handleInputChange}
              />
            </div>
            {/* <p className="absolute text-white mx-7">
                  Drop files anywhere to upload{" "}
                </p> */}
          </CardHeader>
          <CardBody>
            <img
              className="w-auto mb-4 max-h-64 mx-auto"
              src={
                  postValues.imageLink === ''
                    ? 'https://images.unsplash.com/photo-1441039995991-e5c1178e605a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                    : postValues.imageLink
                }
              alt="alala"
            />
            <div className="flex flex-wrap mt-10 font-light">
              <Textarea
                color="green"
                placeholder="About Me"
                value={postValues.description}
                name="description"
                onChange={handleInputChange}
              />
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center bg-bb">
              <Button
                color="green"
                size="lg"
                className="rounded-custom-shape w-full"
              >
                Add new post!
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Container>
  );
}

export default ModalAddNewsPost;
