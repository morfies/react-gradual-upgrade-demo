/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';

export default function useTimer() {
  const [value, setValue] = useState(() => new Date());

  useEffect(() => {
    console.log('Version', React.version);
    const id = setInterval(() => {
      setValue(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return value.toLocaleTimeString();
}
