
import React from 'react';
import renderer from 'react-test-renderer';
import StreetView from '../src/StreetView';

describe('My Packages', () => {
  it('should render correctly', () => {
    const key = 'AIzaSyCjyF9AD_G_2bLXCe53iE2kvLqh93QFrP8';
    const tree = renderer.create(
      <StreetView
        address="Times Square, Manhattan, NY 10036, USA" APIkey={key} streetView zoomLevel={15}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
