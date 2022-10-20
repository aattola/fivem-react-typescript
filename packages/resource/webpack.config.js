const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const serverBuild = path.resolve(__dirname, 'dist/server')
const clientBuild = path.resolve(__dirname, 'dist/client')

const client = {
  entry: './client/client.ts',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx', // Or 'ts' if you don't need tsx
          target: 'es2022',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(clientBuild),
  },
  experiments: {
    topLevelAwait: true,
  },
}

const server = {
  entry: './server/server.ts',
  target: 'node',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx', // Or 'ts' if you don't need tsx
          target: 'es2022',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(serverBuild),
  },
  experiments: {
    topLevelAwait: true,
  },
}

module.exports = [server, client]
