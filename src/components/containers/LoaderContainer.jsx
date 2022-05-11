import React from 'react';
import { useSelector } from 'react-redux';
import { selectUIState } from '../../features/ui/uiSlice';
import Loader from '../shared/Loader';

function LoaderContainer() {
  const { loading } = useSelector(selectUIState);

  if (loading) return <Loader />;
  return null;
}

export default LoaderContainer;
