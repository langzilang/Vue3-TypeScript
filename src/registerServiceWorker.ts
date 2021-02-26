/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      console.log('准备完成')
    },
    registered () {
      console.log('Service worker has been registered.')
      console.log('注册成功')
    },
    cached () {
      console.log('Content has been cached for offline use.')
      console.log('缓存')
    },
    updatefound () {
      console.log('New content is downloading.')
      console.log('正在下载新内容.')
    },
    updated () {
      console.log('New content is available; please refresh.')
      console.log('新内容可用；请刷新.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
      console.log('找不到Internet连接。应用程序正在脱机模式下运行')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
      console.error('服务工作者注册过程中出错:', error)
    }
  })
}
