//泛型

function echo<T>(arg: T): T {
  return arg
}
// const strr: string = 'str'
const result = echo(true)

function swap<T,U>(tuple:[T,U]) : [U,T] {
   return [tuple[1],tuple[0]]
}
const result2 = swap(['string',123])

function echoWithArr<T>(arg: T): T {
  //console.log(arr.length) //错误，在函数内部使用泛型，事先不知道类型，不能乱用属性方法
  return arg
}

function echoWithArr2<T>(arr: T[]): T[] {
  console.log(arr.length) 
  return arr
}

const arrs = echoWithArr2([1,2,3])

//增加一个length属性
interface IWithLength {
  length: number
}
 

function echoWithLength<T extends IWithLength>(arr: T): T {
  console.log(arr.length) 
  return arr
}

const strs = echoWithLength('str') 
const obj = echoWithLength({length: 10})
const arr2 = echoWithLength([1,2,3])
