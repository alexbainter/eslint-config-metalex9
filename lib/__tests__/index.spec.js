'use strict';

const { expect } = require('chai');
const eslintConfig = require('../');
const rules = require('../rules');

describe('eslint configuration', () => {
  it('should extend eslint:recommended', () => {
    expect(eslintConfig).to.have.property('extends', 'eslint:recommended');
  });
  it('should include the rules', () => {
    expect(eslintConfig).to.have.deep.property('rules', rules);
  });
});
