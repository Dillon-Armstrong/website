const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "client", "src", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client", "dist"),
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
    ],
  },
};
