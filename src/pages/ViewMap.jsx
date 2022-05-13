import DefaultNavbar from '../components/DefaultNavbar';
import MapComponent from '../components/Map/MapComponent';

export default function ViewMap() {
  return (

    <div className="h-screen w-screen">
      <div className="absolute w-full z-50">
        <DefaultNavbar />
      </div>
      <MapComponent />
    </div>
  );
}
