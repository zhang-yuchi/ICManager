module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common',
        'validator':"@/validator",
        'map':"@/map"
      }
    }
  },
  publicPath: './',
  productionSourceMap: false
}