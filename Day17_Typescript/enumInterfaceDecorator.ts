// enum
enum Department {
    Engineering = 'Engineering',
    Arts = 'Arts',
    Science = 'Science',
}

// interface
interface StudentDetails {
    id: number;
    name: string;
    age: number;
    department: Department; // reference to the Department enum
}

//decorator
function LogCreation(constructor: Function) {
    console.log(`Student class created: ${constructor.name}`);
}

// class and tuple
// Using decorator to log creation of the class

@LogCreation
class Student{
    private studentMap: Map<number, [string, number, Department]> = new Map();

    constructor(){
        console.log("Student class initialized");
    }

    addStudent(student: StudentDetails): void{
        const { id, name, age, department } = student;
        this.studentMap.set(id, [name, age, department]);
    }

    printAllStudents(): void {
    for (const [id, [name, age, department]] of this.studentMap.entries()) {
        console.log(`ID: ${id}, Name: ${name}, Age: ${age}, Department: ${department}`);
    }
}
}

// iterator



const s = new Student();
s.addStudent({ id: 1, name: "Anshika", age: 21, department: Department.Engineering });

s.printAllStudents();