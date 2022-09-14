const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
/*global enviroment*/
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)


module.exports = environment
