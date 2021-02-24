interface IPerson {
  readonly id: number;
  name: string;
  age:number;
}

let alex: IPerson = {
  id: 1,
  name: 'Alex',
  age: 20
}


//alex.id = 111,会报错
//看上去和const属性有些类似
//区别：readonly:作用于属性；   const：作用于变量