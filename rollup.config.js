import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import copy from 'rollup-plugin-copy'

export default {
  input: [
    'src/index.ts',
    'src/Button/index.ts',
    'src/Chip/index.ts',
  ],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({ insert: true }),
    copy({
      targets: [
        {
          src: 'src/main.scss',
          dest: 'build',
          rename: 'main.scss',
        },
      ],
    }),
  ],
}
