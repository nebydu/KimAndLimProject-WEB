const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  //CORS 이슈로 proxy 설정
  devServer: {
    proxy: 'http://localhost:8081'
  },

})
