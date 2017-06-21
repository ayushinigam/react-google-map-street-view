import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapsLoader from 'google-maps';
import { defaultMapStyle, defaultTextStyle } from './styles';

class StreetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentWillMount() {
    GoogleMapsLoader.KEY = this.props.APIkey;
    GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
    const vm = this;
    this.promise = new Promise((resolve, reject) => {
      GoogleMapsLoader.load((google) => {
        if (google) {
          vm.google = google;
          resolve(google);
        } else {
          reject('Unable to fetch google maps loader');
        }
      });
    });
    if (!this.props.address) {
      this.setState({ error: true });
    }
  }

  componentDidMount() {
    this.node = this.map;
    if (!this.state.error) {
      this.displayMap();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.address && (nextProps.address !== this.props.address ||
      nextProps.streetView !== this.props.streetView)) {
      this.setState({ error: false });
      this.displayMap();
    }
  }

  getLatLangFromAddress() {
    const geocoder = new this.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({
        address: this.props.address
      }, (results, geoStatus) => {
        if (geoStatus === this.google.maps.GeocoderStatus.OK) {
          resolve(results[0].geometry.location);
        } else {
          this.setState({ error: true });
          reject('Unable to fetch Latitude and Longitutde');
        }
      });
    });
  }

  renderPanaroma(latLang, panoId) {
    const streetView = new this.google.maps.StreetViewService();
    streetView.getPanoramaByLocation(panoId, this.props.streetViewZoom, (data, status) => {
      if (status === this.google.maps.StreetViewStatus.OK) {
        const panorama = new this.google.maps.StreetViewPanorama(this.node);
        panorama.setPano(data.location.pano);
        const heading = this.google.maps.geometry.spherical
        .computeHeading(data.location.latLng, latLang);
        panorama.setPov({
          heading,
          pitch: 0,
          zoom: 1
        });
        panorama.setVisible(true);
      } else {
        this.renderMapView(latLang);
      }
    });
  }

  renderMapView(latLang) {
    const map = new this.google.maps
    .Map(this.node, { center: latLang, zoom: this.props.zoomLevel });
    const marker = new this.google.maps.Marker({
      position: latLang
    });
    marker.setMap(map);
  }

  directionsService(address, latLang) {
    const directionsService = new this.google.maps.DirectionsService();
    const request = {
      origin: address,
      destination: address,
      travelMode: this.google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, (response, directionStatus) => {
      if (directionStatus === this.google.maps.DirectionsStatus.OK) {
        const panoId = response.routes[0].legs[0].start_location;
        this.renderPanaroma(latLang, panoId);
      }
    });
  }

  displayMap() {
    const address = this.props.address + this.props.zip;
    if (address) {
      this.promise.then(() => {
        this.getLatLangFromAddress(address)
          .then((latLang) => {
            if (this.props.streetView) {
              this.directionsService(address, latLang);
            } else {
              this.renderMapView(latLang);
            }
          })
          .catch(() => {
            this.setState({ error: true });
          });
      });
    }
  }

  render() {
    const { address, mapStyle, textStyle, defaultText, errorText } = this.props;
    const { error } = this.state;

    let displayText = <div style={textStyle}> {defaultText} </div>;
    if (address && error) {
      displayText = <div style={textStyle}> {errorText} </div>;
    }
    return (
      <div ref={(div) => { this.map = div; }} style={mapStyle}>
        {(!address || error) && displayText}
      </div>
    );
  }
}

StreetView.defaultProps = {
  streetView: 1,
  zoomLevel: 10,
  streetViewZoom: 50,
  zip: 0,
  mapStyle: defaultMapStyle,
  textStyle: defaultTextStyle,
  defaultText: 'Please Provide address',
  errorText: 'Couldn\'t load maps for the address'
};

StreetView.propTypes = {
  APIkey: PropTypes.string.isRequired,
  mapStyle: PropTypes.any,
  textStyle: PropTypes.object,
  address: PropTypes.string.isRequired,
  zip: PropTypes.number,
  streetView: PropTypes.bool,
  zoomLevel: PropTypes.number,
  streetViewZoom: PropTypes.number,
  defaultText: PropTypes.string,
  errorText: PropTypes.string
};

export default StreetView;
