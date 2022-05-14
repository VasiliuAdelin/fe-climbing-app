import { InputIcon, Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import Card from '../shared/Card/Card';
import CardBody from '../shared/Card/CardBody';
import CardFooter from '../shared/Card/CardFooter';
import CardHeader from '../shared/Card/CardHeader';

const INITIAL_STATE = {
  topicName: '',
};

function CreateForumTopic({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { topicName } = values;

    const payload = {
      topicName,
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
              Wow, a new topic is comming! Rock it!
            </span>
          </CardHeader>
          <CardBody>
            <div className="mb-6">
              <InputIcon
                type="text"
                color="green"
                placeholder="Title *"
                required
                value={values.topicName}
                name="topicName"
                onChange={handleOnChange}
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

CreateForumTopic.defaultProps = {
  onSubmit: () => undefined,
};
export default CreateForumTopic;
