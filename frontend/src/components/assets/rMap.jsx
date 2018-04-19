import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

 
class rMap extends Component {
    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBFObWyqlbpObdkdNE0k4JwX9AB66cTGKw" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
    );
  }
}