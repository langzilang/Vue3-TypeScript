
//前面加 const 就可以变为常量枚举
//这样的话，生成的js文件中就只会有调用的Up方法，可以提升性能
const enum Direction {
  Up = 'UP',
  Down = 'DOWN ',
  Left = 'LEFT',
  Right = 'RIGHT',  
}
// console.log(Direction.Up)
// console.log(Direction[0])

const value = 'UP'

if(value === Direction.Up){
  console.log('go up !')
}

//全局安装ts-node 可以不用生成js文件就可以编译
//npm install -g ts-node  --registry=https://registry.npm.taobao.org