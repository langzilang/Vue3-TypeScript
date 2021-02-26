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
  //       $: "jquery",
	// 			"windows.jQuery":"jquery"
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
	},
	/* pwa配置*/
  pwa: {
    name: 'vue3+ts',
    themeColor: '#6476DB',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: "1.0.0",
		manifestOptions: {
      start_url: '.',
      background_color: '#4c89fe'
    },
    /* 
    * 俩个选择:
    * 第一个 GenerateSW ，
    *   此为默认值，
    *   每次build都会自动生成一个service-worker文件，
    *   拥有一些简单的默认配置 
    * 第二个 InjectManifest ，
    *   自定义 service-worker 文件的位置（通过 workboxOptions 来配置 sw 文件的位置），
    *   自己对 sw 进行配置。
    * */
    // workboxPluginMode: "InjectManifest",
		workboxPluginMode: "GenerateSW",//就是自动生成 Service Worker，也是默认操作。具体要求就如workboxOptions。
    workboxOptions: {
      swSrc: "./src/service-worker.js", // 自定义sw文件的位置
      importWorkboxFrom: "disabled" // 是否要引入线上的service-worker文件，我们只需要自己定义的文件，不需要谷歌提供的sw文件
    }
  }
}