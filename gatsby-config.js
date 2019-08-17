module.exports = {
	siteMetadata: {
		title: `Corner Project`,
		description: `Corner Project offers a rotating list of local and house made craft beers along with a small menu of snacks and sandwiches`,
		author: `Chris Adamian`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-145825180-1",
				head: true,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./content/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./static/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-json`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Corner Project Ales`,
				short_name: `CPA`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `cornerprojectales`,
			},
		},
		`gatsby-plugin-sass`,
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Sedgwick Ave`,
						subsets: [`latin`],
					},
					{
						family: `Roboto`,
						subsets: [`latin`],
						variants: [`300`, `400`, `700`, `900`]
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/images/favicon.png",
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					yandex: false,
					windows: true
				}
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
