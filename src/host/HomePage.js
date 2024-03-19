/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useContext } from 'react';
import { connect } from 'react-redux';
import ThemeContext from './shared/ThemeContext';
import Clock from './shared/Clock';

function HomePage({ counter, text }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h2 style={{ color: theme }}>src/host/HomePage - {React.version}</h2>
      <div>Global states: {JSON.stringify({ counter, text })}</div>
      <Clock />
    </>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    text: state.text,
  };
}

export default connect(mapStateToProps)(HomePage);
