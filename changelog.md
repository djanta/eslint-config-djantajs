# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2018-06-12
### Changed
- Switch  `snyk` vulnerability check from `Github` repo to `npm` package.

## [1.1.0] - 2018-06-11
### Added
- Introducing `snyk` for dependencies vulnerability check
- Add `snyk` badge into the README `always-multiline`
- Add an ecrypted slack travis-ci token as `SLACK_TRAVISCI_TOKEN`

### Changed
- Update `no-implicit-coercion` rule to support `+` operator right side.

## [1.0.1] - 2018-06-10
### Changed
- Change `multiline-ternary` rule from `never` to `always-multiline`

## [1.0.0] - 2018-06-09
### Added
- Publish the first major version

## [0.2.1] - 2018-06-09
### Added
- Add encrypted gitter hook notification url e.g: `WEBHOOK_GITTER`
- Add coveralls configuration
- Add codeclimate travis connfiguration

## [0.2.0] - 2018-06-09
### Added
- Implementing additional rules such as `max-statements, no-lonely-if, etc...`

### Changed
- Increase the eslint rule `complexity` from `4` to `10`

## [0.1.2] - 2018-06-08
### Added
- Add codeclimate `Maintainability` and `Test Coverage` badges
- Finilizing default mandatory rules implemetation

### Changed
- Modidy npm `keywords` with `eslin-rules` to `eslint-rules`

### Added
- Adding `contributors` section into the `package.json` file

## [0.1.1] - 2018-06-08
### Added
- Enhancing npm `keywords` with `[eslin-rules, jslint, coding-style]`

### Remove
- Remove `consistent-return` rule due to a conflit with `no-else-return` rule

### Changed
- Change npm download rate from monthly reporting to weekly reporting

## [0.1.0] - 2018-06-06
### Changed
- Change the package keyword `stype` to `style`

### Remove
- Remove `bundle` querystring from the repository `homepage` url

## [0.0.2] - 2018-06-02
### Added
- Fixing npm version badge configuration

### Remove
- Delete by commenting travis expected branch due branch release false validating regex

## [0.0.1] - 2018-06-01
### Added
- Initial public version publication.
- Fixing travis configuration *skip_cleanup: true*

[Unreleased]: https://github.com/djanta/eslint-config-djantajs/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/djanta/eslint-config-djantajs/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/djanta/eslint-config-djantajs/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/djanta/eslint-config-djantajs/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/djanta/eslint-config-djantajs/compare/v0.2.1...v1.0.0
[0.2.1]: https://github.com/djanta/eslint-config-djantajs/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/djanta/eslint-config-djantajs/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/djanta/eslint-config-djantajs/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/djanta/eslint-config-djantajs/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/djanta/eslint-config-djantajs/compare/v0.0.2...v0.1.0
[0.0.2]: https://github.com/djanta/eslint-config-djantajs/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/djanta/eslint-config-djantajs/compare/master...v0.0.1
