var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// enum
var Department;
(function (Department) {
    Department["Engineering"] = "Engineering";
    Department["Arts"] = "Arts";
    Department["Science"] = "Science";
})(Department || (Department = {}));
//decorator
function LogCreation(constructor) {
    console.log(`Student class created: ${constructor.name}`);
}
// class and tuple
// Using decorator to log creation of the class
let Student = class Student {
    constructor() {
        this.studentMap = new Map();
        console.log("Student class initialized");
    }
    addStudent(student) {
        const { id, name, age, department } = student;
        this.studentMap.set(id, [name, age, department]);
    }
    printAllStudents() {
        for (const [id, [name, age, department]] of this.studentMap.entries()) {
            console.log(`ID: ${id}, Name: ${name}, Age: ${age}, Department: ${department}`);
        }
    }
};
Student = __decorate([
    LogCreation
], Student);
// iterator
const s = new Student();
s.addStudent({ id: 1, name: "Anshika", age: 21, department: Department.Engineering });
s.printAllStudents();
