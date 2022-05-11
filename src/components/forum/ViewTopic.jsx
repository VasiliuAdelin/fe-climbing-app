import { Icon } from '@material-tailwind/react';
import { Button } from 'gpl-tailwind-theme';
import React from 'react';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ComplexLayout from '../layouts/ComplexLayout';
import Breadcrumb from '../shared/Breadcrumb';

function RenderTitle({ id, title }) {
  return (
    <Link to={`/forum/1/${id}`}>
      <span className="hover:text-greenNormal">{title}</span>
    </Link>
  );
}

const data = [
  {
    id: 12,
    title: 'Authentication',
    updatedAt: new Date().toString(),
    totalComments: 23,
    user: {
      userName: 'Vasiliu Adelin',
      mainImge: 'https://via.placeholder.com/400',
    },
    createdAt: new Date().toString(),
  },
  {
    id: 122,
    title: 'Feedback',
    updatedAt: new Date().toString(),
    totalComments: 23,
    user: {
      userName: 'Vasiliu Adelin',
      mainImge: 'https://via.placeholder.com/400',
    },
    createdAt: new Date().toString(),
  },
  {
    id: 1232,
    title: 'FAQ',
    updatedAt: new Date().toString(),
    totalComments: 23,
    user: {
      userName: 'Vasiliu Adelin',
      mainImge: 'https://via.placeholder.com/400',
    },
    createdAt: new Date().toString(),
  },
];

const columns = [
  {
    name: 'Posts',
    selector: (row) => <RenderTitle {...row} />,
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.title.toLowerCase();
      const b = rowB.title.toLowerCase();
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: <Icon name="article" size="xl" color="dark" />,
    selector: (row) => row.totalComments,
  },
  {
    name: 'Last Activity',
    selector: (row) => moment(row.updatedAt).fromNow(),
  },

  {
    name: 'Created By',
    selector: (row) => row.user.userName,
  },
  {
    name: 'Created At',
    selector: (row) => moment(row.createdAt).fromNow(),
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
  {
    name: 'Welcome to the app',
    icon: 'feed',
    urlTo: '/forum/1',
  },
];

function ViewTopic() {
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Welcome to the app"
      subtitle="How do you fill?"
      customBackground="https://wallpaperaccess.com/full/2010872.jpg"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <div className="w-4/5 m-auto border border-gray-100 rounded">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 mb-2">
          <span>Welcome to the app</span>
          <Button
            color="green"
            size="base"
            ripple="light"
            className="m-1 opacity-70 hover:opacity-90 rounded"
          >
            <Icon name="add" size="xl" color="white" />
            Create New Post
          </Button>
        </div>
        <div>
          <DataTable
            columns={columns}
            data={data}
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
