const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@assets': resolve('src/assets'),
      '@utils': resolve('src/utils'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, // 这里可以自定义你的 Less 变量
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
