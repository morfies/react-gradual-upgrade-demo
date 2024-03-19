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
import lazyLegacyRoot from './lazyLegacyRoot';

// Lazy-load a component from the bundle using legacy React.
const Texting = lazyLegacyRoot(() => import('../legacy/Texting'));

function TextingPage() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h2 style={{ color: theme }}>
        src/modern/TextingPage.js. Wrapper for legacy Texting - {React.version}
      </h2>
      <Texting />
    </>
  );
}

function mapStateToProps(state) {
  return {
    text: state.text,
  };
}

export default connect(mapStateToProps)(TextingPage);
