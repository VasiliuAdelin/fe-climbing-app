import { Icon } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateForumTopic from '../components/forum/CreateForumTopic';
import ComplexLayout from '../components/layouts/ComplexLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import Modal from '../components/shared/Modals/Modal';
import { createTopicAsync, getTopicsDistinct } from '../features/topics/topics.actions';

function RenderTitle({ value, label }) {
  return (
    <Link to={`/forum/${value}`}>
      <span className="hover:text-greenNormal capitalize">{label}</span>
    </Link>
  );
}

const columns = [
  {
    name: 'Topic',
    selector: (row) => <RenderTitle {...row} />,
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.title.toLowerCase();
      const b = rowB.title.toLowerCase();
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    },
  },
];

const routesBreadcrumb = [
  {
    name: 'ClimbAround',
    icon: 'home',
    urlTo: '/',
  },
  {
    name: 'Topics',
    icon: 'article',
    urlTo: '/forum',
  },
];

const formatTopic = (value) => {
  if (!value) {
    return '';
  }

  return value.split('-').join(' ');
};

const formatDistinctTopics = (dataProp) => {
  if (!dataProp || isEmpty(dataProp)) {
    return [];
  }
  return dataProp.map((item) => ({
    value: item,
    label: formatTopic(item),
  }));
};

function Forum() {
  const [topics, setTopics] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { distinctTopics } = useSelector((state) => state.topics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopicsDistinct());
  }, []);

  useEffect(() => {
    setTopics(formatDistinctTopics(distinctTopics));
  }, [distinctTopics]);

  const handleOnCreatePost = (dataProp) => {
    setOpenModal(false);

    const { topicName } = dataProp;
    const formatedTopicName = topicName.toLowerCase().split(' ').join('-');
    const payload = {
      name: formatedTopicName,
      title: 'Welcome',
      body: 'Welcome to this new topic',
      author: user.id,
    };

    dispatch(createTopicAsync(payload));
    setTimeout(() => {
      dispatch(getTopicsDistinct());
    }, 2000);
  };

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Forum Page"
      subtitle="Write your idea here"
      customBackground="https://wallpaperaccess.com/full/263963.jpg"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <CreateForumTopic onSubmit={handleOnCreatePost} />
      </Modal>
      <div className="w-4/5 m-auto border border-gray-100 rounded">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 mb-2">
          <span>General Topics</span>
          {
            isLoggedIn && (
            <Button
              color="green"
              size="base"
              ripple="light"
              onClick={() => setOpenModal(true)}
              className="m-1 opacity-70 hover:opacity-90 rounded"
            >
              <Icon name="add" size="xl" color="white" />
              Create New Topic
            </Button>
            )
          }

        </div>
        <div>
          <DataTable
            columns={columns}
            data={topics}
            highlightOnHover
            pagination
            pointerOnHover
            responsive
          />
        </div>
      </div>
    </ComplexLayout>
  );
}

export default Forum;
