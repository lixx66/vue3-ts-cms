const { defineConfig } = require('@vue/cli-service');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true
});
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver()]
      }),
      require('unplugin-auto-import/webpack')({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
};
