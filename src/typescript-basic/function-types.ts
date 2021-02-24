//函数声明式写法
function add(x: number, y: number, z?: number): number {
  if(typeof z === 'number'){
    return x + y + z
  } else {
    return x + y
  }
}

//函数表达式写法
const add1 = (x: number, y: number, z?: number): number => {
  if(typeof z === 'number'){
    return x + y + z
  } else {
    return x + y
  }
}

// =>是ts中声明函数类型返回值的方法
let add2: (x: number, y: number, z?: number) => number = add

//add2另一种写法
interface ISum {
  (x: number, y: number, z?: number): number
}
let add3: ISum = add
