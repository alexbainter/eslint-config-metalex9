'use strict';

const { expect } = require('chai');
const bestPractices = require('../best-practices');
const es6 = require('../ecmascript-6');
const nodejsAndCommonjs = require('../nodejs-and-commonjs');
const possibleErrors = require('../possible-errors');
const strictMode = require('../strict-mode');
const stylisticIssues = require('../stylistic-issues');
const variables = require('../variables');
const rules = require('../');

describe('rules directory', () => {
  it('should export all the rules', () => {
    const allRules = Object.assign(
      {},
      bestPractices,
      es6,
      nodejsAndCommonjs,
      possibleErrors,
      strictMode,
      stylisticIssues,
      variables
    );
    expect(rules).to.eql(allRules);
  });
});
