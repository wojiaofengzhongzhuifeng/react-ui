const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
	mode: "development",
	entry: {
		index: './example.tsx',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'example.html'
		})],
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		hot: true
	},
})
