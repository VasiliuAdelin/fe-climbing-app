import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { Label } from 'gpl-tailwind-theme';
import Rating from '../shared/Rating/Rating';
import TYPES from '../../types';
import { calculatedRating } from './crags.utils';

const { CRAGS } = TYPES;
const {
  GENRE_TYPE, STEEPNESS_TYPES, STYLE_TYPES, HOLD_TYPES, GRADES_TYPES,
} = CRAGS;

function RenderName({
  id, city, country, name = '', assets = [],
}) {
  const mainImage = assets[0] ? assets[0] : '';

  const goToUrl = `/areas/${country}/${city}/routelist/${id}`;

  return (
    <Link to={goToUrl}>
      <div className="flex items-center">
        <img src={mainImage} alt={name} className="w-8 h-8 rounded-full mr-2" />
        <span className="hover:text-greenNormal">{name}</span>
      </div>
    </Link>
  );
}

export function RenderFeatures({ features = [] }) {
  return (
    <div>
      {features.map((feature, index) => {
        if (STEEPNESS_TYPES[feature]) {
          return (
            <Label key={feature} color="green">
              {STEEPNESS_TYPES[feature]}
            </Label>
          );
        }
        if (STYLE_TYPES[feature]) {
          return (
            <Label key={feature} color="teal">
              {STYLE_TYPES[feature]}
            </Label>
          );
        }
        if (HOLD_TYPES[feature]) {
          return (
            <Label key={feature} color="cyan">
              {HOLD_TYPES[feature]}
            </Label>
          );
        }
        return null;
      })}
    </div>
  );
}

const columns = [
  {
    name: 'Name',
    selector: (row) => <RenderName {...row} />,
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.name.toLowerCase();
      const b = rowB.name.toLowerCase();
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: 'Grade',
    selector: (row) => GRADES_TYPES[row.grade],
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.grade;
      const b = rowB.grade;
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: 'Type',
    selector: (row) => GENRE_TYPE[row.type],
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.type.toLowerCase();
      const b = rowB.type.toLowerCase();
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: 'Rating',
    selector: (row) => <Rating ratingScore={calculatedRating(row.rating)} />,
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = calculatedRating(rowA.rating);
      const b = calculatedRating(rowB.rating);
      return a > b ? 1 : b > a ? -1 : 0;
    },
  },
  {
    name: 'Features',
    selector: (row) => <RenderFeatures {...row} />,
  },
  {
    name: 'Location',
    selector: (row) => `${row.address} ${row.address && '|'} ${row.geoLocation}`,
  },
];

function RouteListView({ data = [] }) {
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
}

export default RouteListView;
