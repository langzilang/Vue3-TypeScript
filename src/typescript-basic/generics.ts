//泛型

function echo<T>(arg: T): T {
  return arg
}
// const strr: string = 'str'
const results = echo(true)

function swap<T,U>(tuple:[T,U]) : [U,T] {
   return [tuple[1],tuple[0]]
}
const result4 = swap(['string',123])

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



class Queue<T> {
  private data:any = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = {key: 1, value: "string"}
let kp2: KeyPair<string, number> = {key: 'str', value: 2}
let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]