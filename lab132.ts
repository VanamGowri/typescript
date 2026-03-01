class Student {
  public name: string;
  private rollNo: number;

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }

  showRollNo(): void {
    console.log("Roll No:", this.rollNo);
  }
}

const student2 = new Student("Gowri", 101);

console.log("Name:", student2.name);
student2.showRollNo();
