// Contents of the file /rollup.config.js
import typescript from '@rollup/plugin-typescript'

const config = [{
    input: 'src/Scanner.ts',
    output: {
      file:`dist/Scanner.js`,
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [typescript()]
  },  {
    input: 'src/background.ts',
    output: {
      file:`dist/background.js`,
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [typescript()]
  }
];
export default config;