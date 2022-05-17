/* eslint-disable no-unused-vars */
import { Icon } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { capitalize } from 'lodash';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ComplexLayout from '../layouts/ComplexLayout';
import Breadcrumb from '../shared/Breadcrumb';
import { createTopicAsync, getTopics } from '../../features/topics/topics.actions';
import Modal from '../shared/Modals/Modal';
import CreateForumPost from './CreateForumPost';
import useRouter from '../../hooks/useRouter';

function RenderTitle({ id, name, title }) {
  return (
    <Link to={`/forum/${name}/${id}`}>
      <span className="hover:text-greenNormal">{title}</span>
    </Link>
  );
}

const columns = [
  {
    name: 'Posts',
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
  {
    name: 'Created By',
    selector: (row) => row?.author?.name || 'Anonim',
  },
  {
    name: 'Last Activity',
    selector: (row) => moment(row.updatedAt).fromNow(),
  },
  {
    name: 'Created At',
    selector: (row) => moment(row.createdAt).fromNow(),
  },
];

function ViewTopic() {
  const { query } = useRouter();
  const [topics, setTopics] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { topics: reduxTopics } = useSelector((state) => state.topics);
  const dispatch = useDispatch();

  const { topic } = query;
  const formatedTopicName = capitalize(topic.split('-').join(' '));

  useEffect(() => {
    dispatch(getTopics(`/?name=${topic}`));
  }, []);

  useEffect(() => {
    setTopics(reduxTopics);
  }, [reduxTopics]);

  const handleOnCreatePost = (dataProp) => {
    setOpenModal(false);

    const { title, description } = dataProp;
    const payload = {
      name: topic,
      title,
      body: description,
      author: user.id,
    };

    dispatch(createTopicAsync(payload));
    setTimeout(() => {
      dispatch(getTopics(`/?name=${topic}`));
    }, 2000);
  };

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
    {
      name: formatedTopicName,
      icon: 'feed',
      urlTo: `/forum/${topic}`,
    },
  ];

  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={formatedTopicName}
      customBackground="https://wallpaperaccess.com/full/2010872.jpg"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <CreateForumPost onSubmit={handleOnCreatePost} />
      </Modal>
      <div className="w-4/5 m-auto border border-gray-100 rounded">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 mb-2">
          <span>{formatedTopicName}</span>
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
                Create New Post
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

export default ViewTopic;
