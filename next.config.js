/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: 'akamai',
		path: '',
	},
	basePath: '/next-app',
	assetPrefix: '/next-app',
}

module.exports = nextConfig
