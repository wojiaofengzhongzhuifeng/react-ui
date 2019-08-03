const path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		index: './lib/index.ts',
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
};
