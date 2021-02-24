let isDone : boolean = false

let age : number = 10

let firstName: string = 'viking'

let message: string = `hello, ${firstName}`

//TODO undefined 和null 的区别
let u: undefined = undefined
let n: null = null

//undefined 和 null 是所有类型的子类型
let num: number = undefined   //如果此处报错，就在tsconfig.json中添加字段 strictNullChecks，改为false就好

let notSure: any = 4
notSure = 'maybe a string'
notSure = true

notSure.myName
notSure.getName()