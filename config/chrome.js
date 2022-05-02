import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

const config = [{
    input: 'src/App/chrome/Scanner.ts',
    output: {
      file:`dist/chrome/Scanner.js`,
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [typescript()]
  }, {
    input: 'src/App/chrome/background.ts',
    output: {
      file:`dist/chrome/background.js`,
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      typescript(),
      copy({
        targets: [
          { src: 'images/**/*', dest: 'dist/chrome/images' }
        ]
      })
    ]
  }
];
export default config;