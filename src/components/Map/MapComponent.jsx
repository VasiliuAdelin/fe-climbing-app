/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';
import InforWindowCard from './InfoWindowCard';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const position = {
  lat: 37.772,
  lng: -122.214,
};

const divStyle = {
  background: 'white',
  border: '1px solid #ccc',
  padding: 15,
};

const MARKERS = [
  {
    lat: 47.1382258,
    lng: 27.5812629,
    name: 'The best crag name',
    grade: 150,
    type: 'TRADITIONAL',
    rating: [
      0,
      0,
      0,
      0,
      0,
    ],
    city: 501,
    country: 9500,
    address: 'a',
    description: 'The best description ever',
    geoLocation: '24.123123, 34.123131',
    author: {
      name: 'Adelin Ionut',
      imageLink: 'https://i.pinimg.com/736x/c5/fe/c9/c5fec94ac85ac74709f6f17b8160c752.jpg',
      id: '621dd236c25f37253f78661f',
    },
    assets: [
      'https://via.placeholder.com/400',
    ],
    isValidated: false,
    isHidden: false,
    features: [
      'OVERHANG',
    ],
    likes: [],
    ascents: [],
    interested: [],
    createdAt: '2022-05-03T06:14:18.977Z',
    updatedAt: '2022-05-03T06:14:18.977Z',
    id: '6270c83ad8cb8e8081197df1',
  },
  {
    name: 'The best crag name',
    grade: 150,
    type: 'TRADITIONAL',
    rating: [
      0,
      0,
      0,
      0,
      0,
    ],
    city: 501,
    country: 9500,
    address: 'a',
    description: 'The best description ever',
    geoLocation: '24.123123, 34.123131',
    author: {
      name: 'Adelin Ionut',
      imageLink: 'https://i.pinimg.com/736x/c5/fe/c9/c5fec94ac85ac74709f6f17b8160c752.jpg',
      id: '621dd236c25f37253f78661f',
    },
    assets: [
      'https://via.placeholder.com/400',
    ],
    isValidated: false,
    isHidden: false,
    features: [
      'OVERHANG',
    ],
    likes: [],
    ascents: [],
    interested: [],
    createdAt: '2022-05-03T06:14:18.977Z',
    updatedAt: '2022-05-03T06:14:18.977Z',
    id: '6270c83ad8cb8e8081197df2',
    lat: 47.17608842733052,
    lng: 27.548107366931614,
  },
  {
    name: 'The best crag name',
    grade: 150,
    type: 'TRADITIONAL',
    rating: [
      0,
      0,
      0,
      0,
      0,
    ],
    city: 501,
    country: 9500,
    address: 'a',
    description: 'The best description ever',
    geoLocation: '24.123123, 34.123131',
    author: {
      name: 'Adelin Ionut',
      imageLink: 'https://i.pinimg.com/736x/c5/fe/c9/c5fec94ac85ac74709f6f17b8160c752.jpg',
      id: '621dd236c25f37253f78661f',
    },
    assets: [
      'https://via.placeholder.com/400',
    ],
    isValidated: false,
    isHidden: false,
    features: [
      'OVERHANG',
    ],
    likes: [],
    ascents: [],
    interested: [],
    createdAt: '2022-05-03T06:14:18.977Z',
    updatedAt: '2022-05-03T06:14:18.977Z',
    id: '6270c83ad8cb8e8081197df3',
    lat: 47.15794059480529,
    lng: 27.62089178484818,
  },
  {
    name: 'The best crag name',
    grade: 150,
    type: 'TRADITIONAL',
    rating: [
      0,
      0,
      0,
      0,
      0,
    ],
    city: 501,
    country: 9500,
    address: 'a',
    description: 'The best description ever',
    geoLocation: '24.123123, 34.123131',
    author: {
      name: 'Adelin Ionut',
      imageLink: 'https://i.pinimg.com/736x/c5/fe/c9/c5fec94ac85ac74709f6f17b8160c752.jpg',
      id: '621dd236c25f37253f78661f',
    },
    assets: [
      'https://via.placeholder.com/400',
    ],
    isValidated: false,
    isHidden: false,
    features: [
      'OVERHANG',
    ],
    likes: [],
    ascents: [],
    interested: [],
    createdAt: '2022-05-03T06:14:18.977Z',
    updatedAt: '2022-05-03T06:14:18.977Z',
    id: '6270c83ad8cb8e8081197df4',
    lat: 47.17608842711112,
    lng: 27.548107366931614,
  },
  {
    name: 'The best crag name',
    grade: 150,
    type: 'TRADITIONAL',
    rating: [
      0,
      0,
      0,
      0,
      0,
    ],
    city: 501,
    country: 9500,
    address: 'a',
    description: 'The best description ever',
    geoLocation: '24.123123, 34.123131',
    author: {
      name: 'Adelin Ionut',
      imageLink: 'https://i.pinimg.com/736x/c5/fe/c9/c5fec94ac85ac74709f6f17b8160c752.jpg',
      id: '621dd236c25f37253f78661f',
    },
    assets: [
      'https://via.placeholder.com/400',
    ],
    isValidated: false,
    isHidden: false,
    features: [
      'OVERHANG',
    ],
    likes: [],
    ascents: [],
    interested: [],
    createdAt: '2022-05-03T06:14:18.977Z',
    updatedAt: '2022-05-03T06:14:18.977Z',
    id: '6270c83ad8cb8e8081197df5',
    lat: 47.15356317993755,
    lng: 27.502359613689247,
  },
  {
    name: 'The best crag name',
    grade: 150,
    type: 'TRADITIONAL',
    rating: [
      0,
      0,
      0,
      0,
      0,
    ],
    city: 501,
    country: 9500,
    address: 'a',
    description: 'The best description ever',
    geoLocation: '24.123123, 34.123131',
    author: {
      name: 'Adelin Ionut',
      imageLink: 'https://i.pinimg.com/736x/c5/fe/c9/c5fec94ac85ac74709f6f17b8160c752.jpg',
      id: '621dd236c25f37253f78661f',
    },
    assets: [
      'https://via.placeholder.com/400',
    ],
    isValidated: false,
    isHidden: false,
    features: [
      'OVERHANG',
    ],
    likes: [],
    ascents: [],
    interested: [],
    createdAt: '2022-05-03T06:14:18.977Z',
    updatedAt: '2022-05-03T06:14:18.977Z',
    id: '6270c83ad8cb8e8081197df6',
    lat: 47.18046398637152,
    lng: 27.506565317083016,
  },
];

function MapComponent(props) {
  const [currentLocation, setCurrentLocatiion] = useState({
    lat: 47.1382258,
    lng: 27.5812629,
  });

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onMarkerClick = (propsData, marker, e) => {
    setSelectedPlace(propsData);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setShowingInfoWindow(false);
    setActiveMarker(null);
  };

  const displayMarkers = () => MARKERS.map(({
    lat, lng, id, ...rest
  }, index) => {
    const pos = {
      lat,
      lng,
    };

    return (
      <Marker
        key={id}
        position={pos}
        name={rest}
        title="asd"
        onClick={onMarkerClick}
      />
    );
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((positionPayload) => {
      if (positionPayload?.coords?.latitude) {
        setCurrentLocatiion({
          lat: positionPayload.coords.latitude,
          lng: positionPayload.coords.longitude,
        });
      }
    });
  }, []);

  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        style={containerStyle}
        initialCenter={currentLocation}
      >
        {displayMarkers()}

        <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={showingInfoWindow}
        >
          <div className="max-w-300">
            <InforWindowCard />
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDOLqlshJjIXJimeALA_GLRUyQ4_to5wVs',
})(MapComponent);
