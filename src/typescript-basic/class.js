class Animal {
  constructor(name) {
    this.name = name
  }
  run () {
    return `${this.name} is running`
  }
}

const snake = new Animal('Alex')
console.log(snake.run())


class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const aishuishui = new Dog ('aishuishui')
console.log(aishuishui.run())
console.log(aishuishui.bark())

class Cat extends Animal {
  static categories = ['mammal']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow,' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
console.log(Cat.categories)