
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
          API: `"${process.env.API}"`,
          uaa: `"${process.env.uaa}"`,
          fire: `"${process.env.fire}"`,
          console: `"${process.env.console}"`,
          websocket: `"${process.env.websocket}"`
        }
        return [env]
      })
      .end()
  }
}
