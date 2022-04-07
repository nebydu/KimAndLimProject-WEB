const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //CORS 이슈로 proxy 설정
  devServer: {
    proxy: 'http://localhost:8081'
  },
  lintOnSave: false,
  //transpileDependencies: true,
})
