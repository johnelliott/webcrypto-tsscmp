const path = require('path')
const webpack = require('webpack')

function bundleWorker () {
  return new Promise((resolve, reject) => {
    webpack({
      entry: {
        bundle: path.join(__dirname, './worker.js'),
      },
      target: 'webworker',
      output: {
        filename: 'worker.js',
        path: path.join(__dirname, 'dist'),
      },
      mode: 'development',
      watchOptions: {
        ignored: /node_modules|dist|\.js/g,
      },
      devtool: 'none',
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
              // compilerOptions: ['--showConfig']
            }
          },
        ],
      },
    }, (err, stats) => { // Stats Object
      if (err || stats.hasErrors()) {
        return reject(err || stats);
      }
      resolve(stats);
    });
  })
}

module.exports = bundleWorker;
