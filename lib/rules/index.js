'use strict';

const bestPractices = require('./best-practices');
const es6 = require('./ecmascript-6');
const nodejsAndCommonjs = require('./nodejs-and-commonjs');
const possibleErrors = require('./possible-errors');
const strictMode = require('./strict-mode');
const stylisticIssues = require('./stylistic-issues');
const variables = require('./variables');

const rules = Object.assign(
  {},
  bestPractices,
  es6,
  nodejsAndCommonjs,
  possibleErrors,
  strictMode,
  stylisticIssues,
  variables
);

module.exports = rules;
