/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ThemeContext from './shared/ThemeContext';

class TextingSection extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div style={{ border: '1px dashed black', padding: 20 }}>
            <h3>src/legacy/Texting.js</h3>
            <h4 style={{ color: theme }}>
              This component is rendered by the nested React ({React.version}).
            </h4>
            <span>Text from global state: </span>
            <input
              value={this.props.text}
              onChange={(e) =>
                this.props.dispatch({ type: 'text', text: e.target.value })
              }
            ></input>
            <br />

            <Link to='/'>Go to Home</Link>
            <br />
            <Link to='/greeting'>Go to GreetingPage</Link>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text,
  };
}

export default connect(mapStateToProps)(TextingSection);
