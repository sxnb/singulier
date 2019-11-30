var path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./index.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
