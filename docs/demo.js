import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StreetView from '../src/StreetView';

class Demo extends Component {
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
    return (
      <div style={styles.outerContainer}>
        <h1 style={styles.heading}>React Google map street view</h1>
        <div style={styles.innerContainer}>
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
          <div>
            <StreetView
              address={value} APIkey={key} streetView={isStreetView}
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

export default Demo;
