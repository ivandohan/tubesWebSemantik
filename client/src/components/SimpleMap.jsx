import React from "react";
import GoogleMapReact from 'google-map-react';
import Ratio from "react-bootstrap/Ratio"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: 600, width: 'auto' }}>
      <Ratio aspectRatio="16x9">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB6RaMTub7WgaD0y6IpLKmGDzEQIy6NjHY" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </Ratio>
    </div>
  );
}

export default SimpleMap