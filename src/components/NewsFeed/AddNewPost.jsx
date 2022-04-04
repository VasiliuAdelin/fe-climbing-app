/* eslint-disable react-hooks/exhaustive-deps */
import { InputIcon, Textarea } from "@material-tailwind/react";
import { Button } from "gpl-tailwind-theme";
import React, { useEffect, useState } from "react";
import Container from "../login/Container";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardFooter from "../shared/Card/CardFooter";
import CardHeader from "../shared/Card/CardHeader";

const AddNewPost = ({ handleOnClick }) => {
  const [postValues, setPostValues] = useState({
    imageLink: "",
    description: "",
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
            <span className="inline-block text-lg font-bold">
              Tell us something awesome!
            </span>
          </CardHeader>
          <CardBody>
            <div className="mb-12  w-full">
              <InputIcon
                type="text"
                color="white"
                placeholder="Paste the image link"
                iconName="link"
                value={postValues.imageLink}
                name="imageLink"
                onChange={handleInputChange}
              />
            </div>
            {postValues.imageLink && (
              <img
                className="w-auto mb-4 max-h-64 mx-auto rounded shadow-xl"
                src={postValues.imageLink}
                alt="alala"
              />
            )}
            <div className="flex flex-wrap mt-10 font-light">
              <Textarea
                color="green"
                placeholder="Description"
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
};

export default AddNewPost;
