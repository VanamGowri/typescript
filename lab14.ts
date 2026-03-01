class Student {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

let s1 = new Student(2, "Gowri");

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

let a1 = new Animal("Generic Animal");
a1.makeSound();

let d1 = new Dog("Tommy", "Labrador");
d1.makeSound();
