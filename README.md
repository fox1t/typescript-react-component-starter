# TypeScript React Component Starter
[![TypeScript 3.5](https://img.shields.io/badge/TypeScript%20-3.5-blue.svg)](https://github.com/prettier/prettier)
[![styled with prettier](https://img.shields.io/badge/styled%20with-Prettier-blue.svg)](https://github.com/prettier/prettier)
[![linted with tslint](https://img.shields.io/badge/linted%20by-TSLint-brightgreen.svg)](https://palantir.github.io/tslint/)

Stater kit for TypeScript React Components. Generates JavaScript ready to be published on npm and to be consumed by React.

 Batteries included. Period.
- [Prettier](https://prettier.io/) and [TSlint](https://palantir.github.io/tslint/) for formatting and linting
- [ts-node](https://github.com/TypeStrong/ts-node) for tests execution

## Clone the repo
`$ git clone git@github.com:fox1t/typescript-react-component-starter.git {your_project_name}`

`$ cd {your_project_name}`

## Remove reference to this starter and re-init package.json
`$ rm -rf .git && git init && npm init`

## Install development dependencies
`$ npm i`

## Scripts
- `npm run build`: build React components to dist directory
- `npm run dev`: build React components in watch mode
- `npm test`: run tests in `./test`

## Dev Dependencies

- `cross-env`: sets TS_NODE_PROJECT for running tests with tap/ts-node crossplatform
- `rimraf`: removes `lib` folder crossplatform
- `ts-node`: runs tests without compiling
- `prettier`
- `tslint`
- `tslint-config-prettier`: makes tslint work nice with prettier
- `typescript`

## Spread the word
If you use this starter, add this badge to your project to help standardising TypeScript React Component develpment.

`[![built with typescript-react-component-starter](https://img.shields.io/badge/built%20with-typescript--react--component--starter%20-blue.svg)](https://github.com/fox1t/typescript-react-component-starter)`

[![built with typescript-react-component-starter](https://img.shields.io/badge/built%20with-typescript--react--component--starter%20-blue.svg)](https://github.com/fox1t/typescript-react-component-starter)

## Inspired by
[rollup-starter-lib](https://github.com/rollup/rollup-starter-lib/tree/typescript)

## License

MIT
