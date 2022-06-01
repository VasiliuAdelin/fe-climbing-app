/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import moment from 'moment';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../shared/ToggleSwitch';

function RenderAuthor({
  author = {},
}) {
  const { id, imageLink = '', name } = author;

  const goToUrl = `/profile/${id}`;

  return (
    <Link to={goToUrl}>
      <div className="flex items-center">
        <img src={imageLink} alt={name} className="w-8 h-8 rounded-full mr-2" />
        <span className="hover:text-greenNormal">{name}</span>
      </div>
    </Link>
  );
}

function ExpandedComponent({ data }) {
  const { description } = data;

  return (
    <div className="pl-10 py-4">
      <p>
        {description}
      </p>
    </div>
  );
}

function ViewCommentsTable({ data = [], handleOnToggle }) {
  const columns = [
    {
      name: 'Author',
      selector: (row) => <RenderAuthor {...row} />,
    },
    {
      name: 'Message',
      selector: (row) => `${row.description.substring(0, 50)}`,
      sortable: true,
      sortFunction: (rowA, rowB) => {
        const a = rowA.description.toLowerCase();
        const b = rowB.description.toLowerCase();
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      },
    },
    {
      name: 'CreatedAt',
      selector: (row) => moment(row.createdAt).fromNow(),
      sortable: true,
      sortFunction: (rowA, rowB) => {
        const a = rowA.createdAt;
        const b = rowB.createdAt;
        return new Date(b) - new Date(a);
      },
    },
    {
      name: 'isHidden',
      selector: (row) => <ToggleSwitch onToggle={(val) => handleOnToggle('isHidden', val, row.id)} status={row.isHidden} />,
      sortable: true,
    },
    {
      name: 'isValidated',
      selector: (row) => <ToggleSwitch onToggle={(val) => handleOnToggle('isValidated', val, row.id)} status={row.isValidated} />,
      sortable: true,
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pagination
        pointerOnHover
        responsive
        striped
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default ViewCommentsTable;
