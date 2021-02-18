
module.exports = {
  publicPath: './',
  lintOnSave: 'error',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config
      // 添加环境变量
      .plugin('define')
      .tap(([env]) => {
        env['process.env'] = {
          ...env['process.env'],
          BABEL_ENV: `"${process.env.BABEL_ENV}"`
        }
        return [env]
      })
      .end()
  }
}
