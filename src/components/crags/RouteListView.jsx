import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Rating from "../shared/Rating/Rating";

const RenderName = ({ name, mainImage }) => {
  return (
    <Link to="/areas/iasi/routelist/1231312367">
      <div className="flex justify-center items-center">
        <img
          src={mainImage}
          alt="imgasd ias"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{name}</span>
      </div>
    </Link>
  );
};

const columns = [
  {
    name: "Name",
    selector: (row) => <RenderName {...row} />,
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.name.toLowerCase();
      const b = rowB.name.toLowerCase();
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: "Grade",
    selector: (row) => "7B",
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "Rating",
    selector: (row) => <Rating ratingScore={row.ratingScore} />,
    sortable: true,
  },
  {
    name: "Location",
    selector: (row) => row.location,
    sortable: true,
  },
];

const data = [
  {
    id: 1234,
    mainImage: "https://via.placeholder.com/400",
    name: "123Piatra nr 1",
    country: "romania",
    city: "iasi",
    location: "Str. Sucidava Nr.9",
    coordinates: {
      lat: null,
      long: null,
    },
    grade: 100,
    type: "boulder",
    ascents: null,
    ratingScore: 2,
  },
  {
    id: 1235,
    mainImage: "https://via.placeholder.com/400",
    name: "123Piatra nr 1",
    country: "romania",
    city: "iasi",
    location: "Str. Sucidava Nr.9",
    coordinates: {
      lat: null,
      long: null,
    },
    grade: 100,
    type: "boulder",
    ascents: null,
    ratingScore: 2,
  },
  {
    id: 1236,
    mainImage: "https://via.placeholder.com/400",
    name: "234Piatra nr 1",
    country: "romania",
    city: "iasi",
    location: "Str. Sucidava Nr.9",
    coordinates: {
      lat: null,
      long: null,
    },
    grade: 100,
    type: "rock",
    ascents: null,
    ratingScore: 3,
  },
];

const RouteListView = () => {
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
      />
    </div>
  );
};

export default RouteListView;
