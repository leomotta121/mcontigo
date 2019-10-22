const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
};
