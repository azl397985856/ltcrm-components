const _htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function getWebpackConfig(webpackConfig) {
	webpackConfig.module.loaders.forEach(function babelLoaderAntd(loader) {
		if (loader.loader === 'babel') {
			// https://github.com/ant-design/babel-plugin-antd
			loader.query.plugins.push('antd');
		}
		return loader;
	});
    webpackConfig.module.entry = './components/stories/exports.js';

	webpackConfig.plugins.push(new _htmlWebpackPlugin({
		title: '灵通组件平台',
		template: './index.html'
	}));


	return webpackConfig;
};
