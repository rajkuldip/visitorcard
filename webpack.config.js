const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
	context: __dirname + "/app",
	entry: {
		javascript: "./js/app.js"
	},
	output: {
		filename: "app.js",
		path: __dirname + "/dist"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias:{
      mydir: path.resolve(__dirname, './app/js')
    }
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ["react-hot-loader","babel-loader"]
		},{
			test: /\.scss?$/,
			exclude: /node_modules/,
			loaders: ["style-loader","css-loader","sass-loader"]
		},{
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!less-loader'
    },{
        test: /\.(eot|ttf|wav|svg|woff|woff2|mp3|jpg|png)$/,
        loader: 'file-loader',
    }]
	},
	plugins: [HTMLWebpackPluginConfig]
};
