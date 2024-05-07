const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
	webpack: {
		alias: {
			'@/app': resolvePath('./src/app'),
			'@/screens': resolvePath('./src/screens'),
			'@/widgets': resolvePath('./src/widgets'),
			'@/features': resolvePath('./src/features'),
			'@/entities': resolvePath('./src/entities'),
			'@/shared': resolvePath('./src/shared'),
		},
	},
}
