// 可以使用命令vue inspect > output.js看整体结构
const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	outputDir: resolve('./dist/test/'),
	configureWebpack: (config) => {
		// 合并到配置里的部分
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
		}
	}
};
