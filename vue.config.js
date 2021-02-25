// eslint-disable-next-line no-undef
module.exports = {
	publicPath: './',
	devServer: {
		open: true,
		// proxy:{
		// 	'/':{
		// 		// target:'http://otc.yafco.com:9580/vfy/vfy/InterfaceInfoController/interfaceMock?interface_url=',
		// 		target: process.env.VUE_APP_ENV_TARGET,
		// 		changeOrigin : true,   //允许跨域
		// 		pathRewrite: {

		// 		}
		// 	},
		// }
	},
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       jQuery: "jquery",
  //       $: "jquery"
  //     })
  //   ]
  // },
	css:{
		loaderOptions: {
      // 给 stylus-loader 传递选项
      // stylus: {
      //   import: '~@/components/stylus/variables.styl'
      // }
    }
	}
}