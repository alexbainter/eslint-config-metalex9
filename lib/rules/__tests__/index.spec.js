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

const ruleExists = rulename => {
  try {
    //eslint-disable-next-line global-require
    require(`eslint/lib/rules/${rulename}`);
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return false;
    }
  }
  return true;
};

describe('rules directory', () => {
  it('should export all the rules', () => {
    expect(rules).to.eql(allRules);
  });
  it('should export only rules that exist', () => {
    Object.keys(rules).forEach(
      ruleName =>
        expect(ruleExists(ruleName), `${ruleName} is not a real ESLint rule`).to
          .be.true
    );
  });
});
