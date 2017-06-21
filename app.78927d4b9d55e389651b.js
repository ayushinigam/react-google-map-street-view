webpackJsonp([0],{

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_StreetView__ = __webpack_require__(82);




class Demo extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      isStreetView: true
    };
  }
  render() {
    const { isStreetView, value } = this.state;
    const { key } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: styles.outerContainer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { style: styles.heading },
        'React Google map street view'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: styles.innerContainer },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: styles.heading },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Address',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: styles.addressText },
              '(Please provide complete address with Zip code)'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            type: 'text', value: this.state.value, onChange: event => this.setState({ value: event.target.value }),
            style: styles.addressInput
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_StreetView__["a" /* default */], {
            address: value, APIkey: key, streetView: isStreetView,
            zoomLevel: 15
          })
        )
      )
    );
  }
}

Demo.propTypes =  false ? {
  key: PropTypes.string.isRequired
} : {};

const styles = {
  outerContainer: {
    paddingLeft: 20
  },
  heading: {
    paddingBottom: 20,
    paddingRight: 20
  },
  innerContainer: {
    display: 'flex'
  },
  addressInput: {
    borderBottom: '1px solid black',
    width: '20vw',
    marginTop: 20,
    marginBottom: 20
  },
  addressText: {
    fontSize: 14
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Demo);

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Demo__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_css__);
/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */




// import 'purecss/build/pure.css';



// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.

const key = 'AIzaSyCjyF9AD_G_2bLXCe53iE2kvLqh93QFrP8';

// Catalog - logoSrc="../images/logo.png"
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Demo__["a" /* default */], { key: key })
), document.getElementById('app'));

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_maps__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(83);





class StreetView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_google_maps___default.a.KEY = this.props.APIkey;
    __WEBPACK_IMPORTED_MODULE_2_google_maps___default.a.LIBRARIES = ['geometry', 'places'];
    const vm = this;
    this.promise = new Promise((resolve, reject) => {
      __WEBPACK_IMPORTED_MODULE_2_google_maps___default.a.load(google => {
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
    if (nextProps.address && (nextProps.address !== this.props.address || nextProps.streetView !== this.props.streetView)) {
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
        const heading = this.google.maps.geometry.spherical.computeHeading(data.location.latLng, latLang);
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
    const map = new this.google.maps.Map(this.node, { center: latLang, zoom: this.props.zoomLevel });
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
        this.getLatLangFromAddress(address).then(latLang => {
          if (this.props.streetView) {
            this.directionsService(address, latLang);
          } else {
            this.renderMapView(latLang);
          }
        }).catch(() => {
          this.setState({ error: true });
        });
      });
    }
  }

  render() {
    const { address, mapStyle, textStyle, defaultText, errorText } = this.props;
    const { error } = this.state;

    let displayText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: textStyle },
      ' ',
      defaultText,
      ' '
    );
    if (address && error) {
      displayText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: textStyle },
        ' ',
        errorText,
        ' '
      );
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { ref: div => {
          this.map = div;
        }, style: mapStyle },
      (!address || error) && displayText
    );
  }
}

StreetView.defaultProps = {
  streetView: 1,
  zoomLevel: 10,
  streetViewZoom: 50,
  zip: 0,
  mapStyle: __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* defaultMapStyle */],
  textStyle: __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* defaultTextStyle */],
  defaultText: 'Please Provide address',
  errorText: 'Couldn\'t load maps for the address'
};

StreetView.propTypes =  false ? {
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
} : {};

/* harmony default export */ __webpack_exports__["a"] = (StreetView);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultMapStyle = {
  width: '40vw',
  background: '#ffffff',
  height: '60vh',
  border: '1px solid #000000'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultMapStyle;


const defaultTextStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '15px'
};
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultTextStyle;


/***/ })

},[81]);