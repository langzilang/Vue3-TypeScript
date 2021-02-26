// jQuery('#foo')

//安装完@types/jquery, 就不需要.d.ts 里边去写第三方库了
// npm install --seve @types/jquery --registry=https://registry.npm.taobao.org

jQuery("#id").load

/**
 * 对于vue+ts构建的项目，如果引入第三方包无法识别的话，可以有以下两种解决办法
 * 1. @ts-ignore  绕过ts的类型检测
 * 2.自己定义一个接口 interface ，通过断言 告诉ts，这个属性是存在的
 * 比如引入的移动端引入的fastclick，如果没有支持ts，里边就会报错
 * import FastClick from 'fastclick'  //引入插件
 * //使用 fastclick
 * FastClick.attach(document.body)
 * 这个时候就可以这样写：
 * interface FastClickType {
 *  attach?:any;
 * }
 * (FastClick as FaskClickType).attach(document.body)
 */

 /**
  * 注：https://www.tslang.cn/docs/release-notes/typescript-2.6.html
  * ts通过在报错一行上方使用 // @ts-ignore 来忽略错误, 这个是单行忽略
  * // @ts-nocheck  全文忽略
  * // @ts-check 取消全文忽略
  * 
  */