import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export default function Card({ children, className }) {
  const finalClassName = twMerge(
    'w-full bg-white overflow-hdden shadow-md p-4',
    className,
  );
  return <div className={finalClassName}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
