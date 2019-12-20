# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2019-12-19
### Removed
- [`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)


## [0.3.0] - 2018-08-23
### Removed
 - [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators) (interferes with Prettier)

## [0.2.0] - 2018-07-20

### Changed

* Relax configuration of [`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)
  * Array indices are ignored ([`ignoreArrayIndexes`](https://eslint.org/docs/rules/no-magic-numbers#ignorearrayindexes) set to `true`)
  * -1, 0, and 1 are ignored ([`ignore`](https://eslint.org/docs/rules/no-magic-numbers#ignore) set to `[-1, 0, 1]`)

## [0.1.1] - 2018-01-21

### Fixed

* npm version badge in README.md

[0.3.0]: https://github.com/metalex9/eslint-config-metalex9/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/metalex9/eslint-config-metalex9/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/metalex9/eslint-config-metalex9/compare/v0.1.0...v0.1.1
