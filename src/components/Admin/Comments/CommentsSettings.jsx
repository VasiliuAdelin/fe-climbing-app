/* eslint-disable no-unused-vars */
import Card from '@material-tailwind/react/Card';
import { cloneDeep } from 'lodash';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsAsync, updateComment } from '../../../features/ui/ui.actions';
import ViewCommentsTable from './ViewCommentsTable';
import { setFieldUI } from '../../../features/ui/uiSlice';

export default function CommentsSettings() {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const { comments: reduxComments } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchCommentsAsync());
  }, []);

  useEffect(() => {
    setComments(reduxComments);
  }, [reduxComments]);

  const handleOnToggle = (field, value, id) => {
    let reduxCommentsClone = cloneDeep(reduxComments);

    reduxCommentsClone = reduxCommentsClone.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });

    dispatch(setFieldUI({
      name: 'comments',
      value: reduxCommentsClone,
    }));

    dispatch(updateComment({
      id,
      payload: {
        [field]: value,
      },
    }));
  };

  return (
    <Card>
      <CardHeader color="green" contentPosition="none">
        <h2 className="text-white text-2xl">Comments Settings</h2>
      </CardHeader>
      <CardBody>
        <h6 className="text-greenNormal text-sm mt-3 mb-6 font-light">
          Validate Comments
          <ViewCommentsTable data={comments} handleOnToggle={handleOnToggle} />
        </h6>
      </CardBody>
    </Card>
  );
}
