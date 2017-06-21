/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

// import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.

const key = 'AIzaSyCjyF9AD_G_2bLXCe53iE2kvLqh93QFrP8';

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <Demo key={key} />
  </div>,
  document.getElementById('app')
);
