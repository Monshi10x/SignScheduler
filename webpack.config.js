const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      mode: 'development',
      entry: {
            index: './src/index.js',
            another1: './UI/Styles.js',
            another2: './UI/UI.js',
            another3: './UI/UIContainerType3.js',
      },
      devtool: 'inline-source-map',
      devServer: {
            historyApiFallback: true
      }, plugins: [
            new HtmlWebpackPlugin({
                  title: 'Development',
                  template: './src/index.html',
            }),
      ],
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            assetModuleFilename: "assets/[name][ext]",
            clean: true,
            publicPath: '/',
      }, module: {
            rules: [
                  {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                  }
            ]
      },
      externals: {
            $: 'jQuery',
            UIContainerType3: 'UIContainerType3',
            UI: 'UI',
      }, optimization: {
            runtimeChunk: 'single',
      },
      watch: true
};