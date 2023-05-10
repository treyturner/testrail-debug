import path from 'path';
import ResolveTypescriptPlugin from 'resolve-typescript-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const allowlist: string[] = [];

const outputDir = path.resolve('dist');
const filename = 'index.cjs';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: false,
  entry: {
    index: './src/index.ts',
  },
  externalsPresets: { node: true },
  output: {
    filename,
    path: outputDir,
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', 'mjs', '.graphql'],
    plugins: [new TsconfigPathsPlugin(), new ResolveTypescriptPlugin()],
  },

  externals: [
    function ({ request }, callback) {
      if (/^node:/.test(request!)) {
        return callback(undefined, 'commonjs ' + request!.replace('node:', ''));
      }
      callback();
    },
    nodeExternals({ allowlist }),
    nodeExternals({
      allowlist,
      modulesDir: path.resolve('..', '..', 'node_modules'),
    }),
  ] as webpack.Configuration['externals'],

  plugins: [],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },

  stats: 'errors-only',

  performance: {
    hints: false,
  },

  experiments: {
    topLevelAwait: true
  }
};

export default config;
