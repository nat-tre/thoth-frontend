require('dotenv').config();

module.exports = {
	webpack: (config) => {
		config.node = {
			fs: 'empty'
		};
		return config;
	},
	"compilerOptions": {
    "baseUrl": "."
  },
	env: {
		API_URL: process.env.API_URL
	},
	
};
