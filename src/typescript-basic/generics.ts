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