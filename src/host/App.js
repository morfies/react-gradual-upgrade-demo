/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useState, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import GreetingPage from './GreetingPage';
import ThemeContext from './shared/ThemeContext';
import TextingPage from './TextingPage';
import TextingUpgraded from './TextingUpgraded';
import Header from './Header';

export default function App() {
  const [theme, setTheme] = useState('slategrey');

  function handleToggleClick() {
    if (theme === 'slategrey') {
      setTheme('hotpink');
    } else {
      setTheme('slategrey');
    }
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <div style={{ fontFamily: 'sans-serif' }}>
          <div
            style={{
              margin: 20,
              padding: 20,
              border: '1px solid black',
              minHeight: 300,
            }}
          >
            <button onClick={handleToggleClick}>Toggle Theme Context</button>
            <menu
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '30%',
              }}
            >
              <Link to='/'>Home</Link>
              <Link to='/greeting'>Greeting</Link>
              <Link to='/texting'>Texting</Link>
              <Link to='/texting-new'>TextingUpgraded</Link>
            </menu>
            <Header />
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route path='/greeting'>
                  <GreetingPage />
                </Route>
                <Route path='/texting'>
                  <TextingPage />
                </Route>
                <Route path='/texting-new'>
                  <TextingUpgraded />
                </Route>
                <Route path='/'>
                  <HomePage />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

function Spinner() {
  return null;
}
