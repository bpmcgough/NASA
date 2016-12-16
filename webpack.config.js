module.exports = {
    context: __dirname,
    entry: "./frontend/entry.jsx",
    resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
};
