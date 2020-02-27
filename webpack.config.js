module.exports = {
  mode: "development",
  entry: {
    "bundle": ["./src/index.tsx"],
    "main": ["./main.ts"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath:true,
              outputPath:"./public/img"
            }
          }
        ]
      }
    ]
  },

  plugins: [
  ],
  target: "electron-renderer"
};