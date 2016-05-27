const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
	  }, {
        test: /\.less?$/,
        loader: "style!css!less",
        include: path.resolve(__dirname, '../')
	  }, {
        test: /\.json$/,
        loader: 'json'
    },
    ]
  }
}
