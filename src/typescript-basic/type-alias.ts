//type aliase  --> 类型别名 
let sum: (x: number, y: number) => number
const result = sum(1,2)

type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(1,2)


type StrOrNumber = string | number
let result3 : StrOrNumber = '1234'
result3 = 123

//字面量
const str1: 'name' = 'name'
const number1: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'

interface IName {
  name: string
}


//交叉类型
type IPersion = IName & { age: number}
let persion: IPersion = { name: '1234', age: 12344}
