/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["mir-s3-cdn-cf.behance.net"],
	},
	webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }]
        })
    
        return config
    },
};

module.exports = nextConfig;
