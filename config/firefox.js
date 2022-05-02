import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

const config = [{
  input: 'src/App/firefox/background.ts',
  output: {
    file:`dist/firefox/background.js`,
    format: 'cjs',
    sourcemap: false,
  },
  plugins: [typescript()]
}, {
    input: 'src/App/firefox/Scanner.ts',
    output: {
      file:`dist/firefox/Scanner.js`,
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      typescript(),
      copy({
        targets: [
          { src: 'images/**/*', dest: 'dist/firefox/images' }
        ]
      })
    ]
  }
];
export default config;