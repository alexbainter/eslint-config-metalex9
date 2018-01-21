'use strict';

const ruleLevels = require('./rule-levels');

const rules = {
  'no-duplicate-imports': ruleLevels.error,
  'no-useless-computed-key': ruleLevels.error,
  'no-useless-constructor': ruleLevels.error,
  'no-useless-rename': ruleLevels.error,
  'no-var': ruleLevels.error,
  'prefer-arrow-callback': ruleLevels.error,
  'prefer-const': ruleLevels.error,
  'prefer-destructuring': ruleLevels.error,
  'prefer-numeric-literals': ruleLevels.error,
  'prefer-rest-params': ruleLevels.error,
  'prefer-spread': ruleLevels.error,
  'prefer-template': ruleLevels.error,
  'symbol-description': ruleLevels.error,
};

module.exports = rules;
