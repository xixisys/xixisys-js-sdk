import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const umd = {
  input: 'index.js',
  output: {
    name: 'XiXisys',
    file: 'sdk.js',
    format: 'umd',
    compact: true,
  },
  plugins: [
    resolve(),
    commonjs(),
  ]
};

export default [
  umd,
];
