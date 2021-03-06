/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

describe('promise afterEach', () => {
  afterEach(() => {
    this.flag = 1;
    return new Promise(resolve => {
      process.nextTick(resolve);
    }).then(() => {
      this.flag = undefined;
    });
  });

  // passing tests
  it('runs afterEach after each test', () => {
    console.log('f1', this.flag);
    expect(this.flag).toBe(undefined);
  });

  it('waits for afterEach to asynchronously complete before each test', () => {
    console.log('f2', this.flag);
    expect(this.flag).toBe(undefined);
  });
});
