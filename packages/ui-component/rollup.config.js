import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import dartSass from 'sass';
import vue from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';

export default {
  input: './index.ts',
  output: [{
    globals: {
      vue: 'Vue',
    },
    name: 'Gui',
    file: 'dist/lib/gui-umd.js',
    format: 'umd',
  }, {
    file: 'dist/lib/gui-es.js',
    format: 'es',
  }],
  sourceMap: true,
  plugins: [
    terser(),
    scss({
      include: /\.scss$/,
      sass: dartSass,
      watch: './components',
    }),
    vue({
      include: /\.vue$/,
    }),
    esbuild({
      include: /\.[jt]sx?$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
  ],
}

// import fs from 'fs';

// function createRollupConfig(input) {
//   return {
//     input: `${__dirname}/components/${input}/index.vue`,
//     output: [{
//       globals: {
//         vue: 'Vue',
//       },
//       name: 'Gui',
//       file: `dist/${input}/umd/${input}.js`,
//       format: 'umd',
//     }, {
//       globals: {
//         vue: 'Vue',
//       },
//       name: 'Gui',
//       file: `dist/${input}/umd/${input}.min.js`,
//       format: 'umd',
//       plugins: terser(),
//     }, {
//       file: `dist/${input}/es/${input}.js`,
//       format: 'es'
//     }],
//     plugins: [
//       scss({
//         include: /\.scss$/,
//         sass: dartSass,
//       }),
//       vue({
//         include: /\.vue$/,
//       }),
//       esbuild({
//         include: /\.[jt]sx?$/,
//         minify: process.env.NODE_ENV === 'production',
//         target: 'es2015',
//       }),
//     ],
//   }
// }

// const packages = fs.readdirSync('./components').filter((e) => fs.lstatSync(`${__dirname}/components/${e}`).isDirectory());

// const config = packages.map((e) => createRollupConfig(e));

// // 多文件打包导出一个数组
// export default config;
