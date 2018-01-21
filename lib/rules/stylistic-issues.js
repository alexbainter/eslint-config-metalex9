'use strict';

// "It's stylisticly designed to be that way, and you can't undo that,
// but we can diminish the effects of it."
// - George Lucas

const ruleLevels = require('./rule-levels');

const rules = {
  camelcase: ruleLevels.error,
  'func-names': ruleLevels.error,
  'lines-between-class-members': [ruleLevels.error, 'never'],
  'new-cap': ruleLevels.error,
  'new-parens': ruleLevels.error,
  'no-array-constructor': ruleLevels.error,
  'no-bitwise': ruleLevels.error,
  'no-continue': ruleLevels.error,
  'no-lonely-if': ruleLevels.error,
  'no-mixed-operators': ruleLevels.error,
  'no-nested-ternary': ruleLevels.error,
  'no-new-object': ruleLevels.error,
  'no-plusplus': ruleLevels.error,
  'no-unneeded-ternary': ruleLevels.error,
  'one-var': [ruleLevels.error, 'never'],
  'one-var-declaration-per-line': ruleLevels.error,
};

module.exports = rules;
