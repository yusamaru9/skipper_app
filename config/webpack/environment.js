const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
/*global environment*/
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
      "window.jQuery": "jquery"
  })
)


module.exports = environment
