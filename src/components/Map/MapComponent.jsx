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

function MapComponent(props) {
  const [currentLocation, setCurrentLocatiion] = useState({
    lat: 47.1382258,
    lng: 27.5812629,
  });

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [showingInfoWindowCurrent, setShowingInfoWindowCurrent] = useState(true);
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const { markers = [] } = props;

  const onMarkerClick = (propsData, marker, e) => {
    setSelectedPlace(propsData);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setShowingInfoWindow(false);
    setActiveMarker(null);
  };

  const displayMarkers = () => markers.map(({
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
        <Marker
          position={currentLocation}
          name="Current Location"
          title="Current Location"
          onClick={() => setShowingInfoWindowCurrent(true)}
        />
        <InfoWindow
          position={currentLocation}
          visible={showingInfoWindowCurrent}
          onClose={() => setShowingInfoWindowCurrent(false)}
        >
          <div className="max-w-300">
            Current Location
          </div>
        </InfoWindow>
        <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={showingInfoWindow}
        >
          <div className="max-w-300">
            <InforWindowCard {...selectedPlace?.name} />
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDOLqlshJjIXJimeALA_GLRUyQ4_to5wVs',
})(MapComponent);
