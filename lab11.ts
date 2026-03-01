interface Student {
    name: string;
    marks: number;
}

interface StudentList extends Array<Student> {}

const students: StudentList = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];

students.forEach(student => {
    console.log("Name: " + student.name + ", Marks: " + student.marks);
});
