import { Icon } from "@material-tailwind/react";
import { Button } from "gpl-tailwind-theme";
import React from "react";
import DataTable from "react-data-table-component";
import ComplexLayout from "../components/layouts/ComplexLayout";
import moment from "moment";
import Breadcrumb from "../components/shared/Breadcrumb";
import { Link } from "react-router-dom";

const RenderTitle = ({ id, title }) => {
  return (
    <Link to={`/forum/${id}`}>
      <span className="hover:text-green-500">{title}</span>
    </Link>
  );
};
const data = [
  {
    id: 1,
    title: "Find a trip",
    updatedAt: new Date().toString(),
    totalPosts: 23,
    user: {
      userName: "Vasiliu Adelin",
      mainImge: "https://via.placeholder.com/400",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 12,
    title: "Welcome to the forrum",
    updatedAt: new Date().toString(),
    totalPosts: 23,
    user: {
      userName: "Vasiliu Adelin",
      mainImge: "https://via.placeholder.com/400",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 123,
    title: "How to climb",
    updatedAt: new Date().toString(),
    totalPosts: 23,
    user: {
      userName: "Vasiliu Adelin",
      mainImge: "https://via.placeholder.com/400",
    },
    createdAt: new Date().toString(),
  },
];

const columns = [
  {
    name: "Topic",
    selector: (row) => <RenderTitle {...row} />,
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.title.toLowerCase();
      const b = rowB.title.toLowerCase();
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: <Icon name="topic" size="xl" color="dark" />,
    selector: (row) => row.totalPosts,
  },
  {
    name: "Last Activity",
    selector: (row) => moment(row.updatedAt).fromNow(),
  },

  {
    name: "Created By",
    selector: (row) => row.user.userName,
  },
  {
    name: "Created At",
    selector: (row) => moment(row.createdAt).fromNow(),
  },
];

const routesBreadcrumb = [
  {
    name: "ClimbAround",
    icon: "home",
    urlTo: "/",
  },
  {
    name: "Topics",
    icon: "article",
    urlTo: "/forum",
  },
];

const Forum = () => {
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Forum Page"
      subtitle="Write your idea here"
      customBackground="https://wallpaperaccess.com/full/263963.jpg"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <div className="w-4/5 m-auto border border-gray-100 rounded">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 mb-2">
          <span>General Topics</span>
          <Button
            color="green"
            size="base"
            ripple="light"
            className="m-1 opacity-70 hover:opacity-90 rounded"
          >
            <Icon name="add" size="xl" color="white" />
            Create New Topic
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
};

export default Forum;
