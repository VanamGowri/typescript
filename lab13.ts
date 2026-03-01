class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const student1 = new Student("Gowri", 20);

console.log("Name:", student1.name);
console.log("Age:", student1.age);
