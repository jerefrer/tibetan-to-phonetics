import babel from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser";
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js' ];

export default  {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/bundles/bundle.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'lib/bundles/bundle.esm.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true
    },
    {
      file: 'lib/bundles/bundle.umd.js',
      format: 'umd',
      name: 'TibetanToPhonetics',
      sourcemap: true
    },
    {
      file: 'lib/bundles/bundle.umd.min.js',
      format: 'umd',
      name: 'TibetanToPhonetics',
      plugins: [terser()],
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({ babelHelpers: 'bundled', extensions, exclude: './node_modules/**'})
  ]
}