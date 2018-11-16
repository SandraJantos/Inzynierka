import React, { Component } from 'react';
import MapContainer from 'components/map/MapContainer';

class MapPage extends Component {

  render() {
    return (
        <MapContainer mainMap={true} />
    );
  } 
}

export default MapPage;
    