
// export = public

export class Student {

    name: string;
    age: number;
    email: string;
    location: string;
    dateOfBirth: number;
    grades: Array<number> = [];

    constructor(name: string, age: number, location: string, grades: Array<number>) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.grades = grades;
    }

    toString(): string {
        return "Teacher: " + this.name
            + " " + this.age
            + " " + this.location
            + " " + this.grades;
    }
}

// inheritance 
export class StudentOfSda extends Student {

}

