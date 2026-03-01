interface Calculator {
    add(a: number, b: number): number;
    multiply(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

console.log("Add: " + calc.add(5, 3));
console.log("Multiply: " + calc.multiply(5, 3));
