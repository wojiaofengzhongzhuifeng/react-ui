const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './lib/index.tsx',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	output: {
		path: path.resolve(__dirname, './dist/lib/'),
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})]
};
