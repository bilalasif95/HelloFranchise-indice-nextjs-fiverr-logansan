module.exports = {
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dag7aladh/image/upload',
		CLOUD_NAME: 'dag7aladh',
		UPLOAD_PRESET: 'ml_default',
		JWT_SECRET: 'adfjdsjfsdjfkladjfkj',
	},
	i18n: {
		defaultLocale: "nl",
		locales: ["en", "nl"],
		localeDetection: false,
	},
};
