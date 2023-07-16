const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: ['webtools'],
  configureWebpack: {
    devtool: 'source-map'
  }
});