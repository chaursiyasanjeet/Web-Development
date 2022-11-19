class Pet {
    constructor(name, age) {
        console.log("In pet constructor");
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("In cat constructor");
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "Meow!!";
    }
}

class Dog extends Pet {
    bark() {
        return "woof!!";
    }
    eat() {
        return `${this.name} is eating from own class!!`;
    }
}