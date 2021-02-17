import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker, Map } from 'react-google-maps'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyDCkUpIZ5no_OjIYOKbfA_CMkAUajBsS8E'
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />




                </GoogleMapReact>
            </div>
        );
    }
}
export default SimpleMap;