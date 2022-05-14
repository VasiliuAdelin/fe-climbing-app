import { InputIcon, Textarea, Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';

const INITIAL_STATE = {
  title: '',
  description: '',
};

function CreateForumPost({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = values;

    const payload = {
      title,
      description,
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
    <form
      className="h-screen overflow-y-scroll overflow-x-hidden py-12 pl-1"
      onSubmit={handleSubmit}
    >
      <div className="lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:p-2">
        <Card className="rounded-xl w-full lg:w-3/5">
          <CardHeader color="green" className="rounded-xl">
            <span className="inline-block text-lg font-bold">
              Wow, a new post is comming! Rock it!
            </span>
          </CardHeader>
          <CardBody>
            <div className="mb-6">
              <InputIcon
                type="text"
                color="green"
                placeholder="Title *"
                required
                value={values.title}
                name="title"
                onChange={handleOnChange}
              />
            </div>
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

CreateForumPost.defaultProps = {
  onSubmit: () => undefined,
};
export default CreateForumPost;
