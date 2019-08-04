const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
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
		],
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};
