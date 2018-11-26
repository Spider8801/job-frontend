const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]],
		},
	});
	config.plugins.push(new TSDocgenPlugin()); // optional
	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};
