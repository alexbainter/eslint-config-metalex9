'use strict';

const ruleLevels = require('./rule-levels');

const rules = {
  'global-require': ruleLevels.error,
  'handle-callback-err': ruleLevels.error,
  'no-buffer-constructor': ruleLevels.error,
  'no-mixed-requires': ruleLevels.error,
  'no-new-require': ruleLevels.error,
  'no-path-concat': ruleLevels.error,
  'no-process-env': ruleLevels.error,
  'no-process-exit': ruleLevels.error,
};

module.exports = rules;
