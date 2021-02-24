//type inference
let str = 'str'

//union types
let numberOrString: number | string
numberOrString.toString()
numberOrString.valueOf()

function getLength(input: string | number): number {
  const str = input as string
  if(str.length){
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}