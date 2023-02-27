import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const inputSrc = [
  ['./src/index.tsx', 'es'],
  ['./src/index.tsx', 'cjs'],
];
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default inputSrc.map(([input, format]) => {
  return {
    input,
    output: {
      dir: `dist/${format}`,
      format,
      exports: format === 'cjs' ? 'named' : 'auto',
      preserveModules: format === 'es',
      preserveModulesRoot: 'src',
    },
    plugins: [
      babel({
        extensions,
        babelHelpers: 'bundled',
        include: ['./src/**/*'],
        exclude: 'node_modules/**',
      }),
      nodeResolve({ extensions }),
      commonjs({ include: 'node_modules/**' }),
      peerDepsExternal(),
      json(),
      terser(),
    ],
  };
});
