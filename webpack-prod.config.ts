import * as Dotenv from 'dotenv-webpack';
import { join } from 'path';

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['automation-clear-loader'],
      },
    ],
  },
  resolveLoader: {
    alias: {
      'automation-clear-loader': join(__dirname, 'automation-clear-loader.ts'),
    },
  },
};
