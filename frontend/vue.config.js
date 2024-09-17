const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true, // Ativa HTTPS
    },
  pluginOptions: {
    vuetify: {

      chainWebpack: config => {
        config.module
          .rule('vue')
          .use('vue-loader')
          .loader('vue-loader')
          .tap(options => {
            // Aqui você pode alterar a configuração do vue-loader, se necessário
            return options;
          });
      },
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})
