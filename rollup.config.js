import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'

import pkg from './package.json'

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.ts',
    external: ['ms'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        // exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        // exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(), // so Rollup can find `ms`
      typescript({
        rollupCommonJSResolveHack: true,
        useTsconfigDeclarationDir: true,
        clean: true,
        exclude: 'test',
      }), // so Rollup can convert TypeScript to JavaScript
      commonjs({ include: ['node_modules/**'] }), // so Rollup can convert `ms` to an ES module
    ],
  },
]
