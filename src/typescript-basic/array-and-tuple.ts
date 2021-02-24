let arrOfNumbers: number[] = [1,2,3]
arrOfNumbers.push(4)

//类数组
function test() {
  console.log(arguments)
}

//元祖（跟数组很相似，将类型写到了里面）
let user: [string,number] = ['viking', 20]
user.push(123,'123')
