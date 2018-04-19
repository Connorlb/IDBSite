import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

 
class rMap extends Component {
    render() {
        return (
            <div style={{ height: '43vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBFObWyqlbpObdkdNE0k4JwX9AB66cTGKw" }}
                    defaultCenter={{lat:this.props.latitude, lng:this.props.longitude}}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
    );
  }
}
export default rMap