//global  objects
const a: Array<number> = [2,3,4]
const date = new Date()
date.getFullYear()

const reg = /abc/
reg.test('abc')

//build-in objects
Math.pow(2,3)


//DOM and BOM
let body = document.body
let alias = document.querySelectorAll('li')
alias.keys()

document.addEventListener('click',(e) => {
  e.preventDefault();
})

//Utility Types
interface IPerson1 {
  name: string,
  age: number
}
let Alex2: IPerson1 = { name: 'Alex', age: 22}
type IPartial = Partial<IPerson1> //属性变为可选
let Alex3: IPartial =  { name: 'alex'}

//Omit 返回的类型可以忽略传入类型的某个属性
type IOmit = Omit<IPerson1, 'name'>  //name被忽略了