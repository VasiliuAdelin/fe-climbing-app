import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatCragsIntoMarkers } from '../components/crags/crags.utils';
import DefaultNavbar from '../components/DefaultNavbar';
import MapComponent from '../components/Map/MapComponent';
import { getCrags } from '../features/crags/crags.actions';

export default function ViewMap() {
  const [markers, setMarkers] = useState([]);
  const dispatch = useDispatch();
  const { crags: reduxCrags } = useSelector((state) => state.crags);

  useEffect(() => {
    dispatch(getCrags('/?limit=1000'));
  }, []);

  useEffect(() => {
    const generatedMarkers = formatCragsIntoMarkers(reduxCrags);
    setMarkers(generatedMarkers);
  }, [reduxCrags]);

  return (

    <div className="h-screen w-screen">
      <div className="absolute w-full z-50">
        <DefaultNavbar bgColor="green" />
      </div>
      <MapComponent markers={markers} />
    </div>
  );
}
