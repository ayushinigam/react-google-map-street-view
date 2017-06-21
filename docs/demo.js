import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StreetView from '../src/StreetView';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      address: '',
      isStreetView: false
    };
  }
  render() {
    const { address, isStreetView, value } = this.state;
    const { key } = this.props;
    return (
      <div style={styles.outerContainer}>
        <h1 style={styles.heading}>React Google map street view</h1>
        <div style={styles.innerContainer}>
          <div style={styles.leftSection}>
            <div style={styles.heading}>
              <div>Address
                <span style={styles.addressText}>
                (Please provide complete address with Zip code)
                </span>
              </div>
              <input
                type="text" value={this.state.value} onChange={event => this.setState({ value: event.target.value })}
                style={styles.addressInput}
              />
            </div>
            <div onChange={event => this.setState({ isStreetView: event.target.value })}>
              <input type="radio" value={Boolean(false)} name="type" />
              <span style={styles.radioText}>Street View</span>
              <input type="radio" value={Boolean(false)} name="type" defaultChecked /> Map View
          </div>
            <button onClick={() => this.setState({ address: value })}>
            VIEW MAP
          </button>
          </div>
          <div>
            <StreetView
              address={address} APIkey={key} streetView={isStreetView}
              zoomLevel={15}
            />
          </div>
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  key: PropTypes.string.isRequired
};

const styles = {
  outerContainer: {
    paddingLeft: 20
  },
  heading: {
    paddingBottom: 20
  },
  innerContainer: {
    display: 'flex'
  },
  leftSection: {
    paddingRight: 40
  },
  addressInput: {
    borderBottom: '1px solid black',
    width: '20vw',
    marginTop: 20,
    marginBottom: 20
  },
  radioText: {
    paddingRight: 10
  },
  addressText: {
    fontSize: 14
  }
};

export default Demo;
