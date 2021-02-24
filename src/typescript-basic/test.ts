const hello = (name:string) => {
  return `hello ${name}`
}

hello('viking') 
// 命令行到当前文件夹下，运行命令 tsc test.ts

//如果将上面的部分改成hello(123)
//编译会报错，显示类型错误
//但是仍然编译了，在js文件中会输出hello(123);