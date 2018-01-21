'use strict';

const ruleLevels = require('./rule-levels');

const rules = {
  'for-direction': ruleLevels.error,
  'getter-return': ruleLevels.error,
  'no-await-in-loop': ruleLevels.error,
  'no-prototype-builtins': ruleLevels.error,
  'no-template-curly-in-string': ruleLevels.error,
};

module.exports = rules;
