'use strict';

const ruleLevels = require('./rule-levels');

const rules = {
  'no-catch-shadow': ruleLevels.error,
  'no-label-var': ruleLevels.error,
  'no-shadow': ruleLevels.error,
  'no-shadow-restricted-names': ruleLevels.error,
  'no-undef-init': ruleLevels.error,
  'no-undefined': ruleLevels.error,
  'no-use-before-define': ruleLevels.error,
};

module.exports = rules;
