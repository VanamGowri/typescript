interface User {
    readonly id: number;
    name: string;
    age?: number;
}

const user1: User = {
    id: 101,
    name: "Gowri",
    age: 25
};

console.log("ID: " + user1.id);
console.log("Name: " + user1.name);
console.log("Age: " + (user1.age ? user1.age : "Not provided"));
