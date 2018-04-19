import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

 
class rMap extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
      };

    render() {
        
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBFObWyqlbpObdkdNE0k4JwX9AB66cTGKw" }}
                defaultCenter={ this.props.center }
                defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
    );
  }
}