import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student, StudentOfSda } from '../models/students';

@Component({
  selector: 'app-sunday',
  templateUrl: './sunday.component.html',
  styleUrls: ['./sunday.component.css']
})
export class SundayComponent implements OnInit {

  // constructor - este afisat prima data intr-o pagina web (pas 1)
  constructor() {
    console.log("====Contructor start====");
    console.log(this.name + this.name2);

    // initializam o variabila in scopul unei clase ( let sau const ), 
    // se poate folosi doar in clasa unde este initializata
    // let student = new Student();

    // console.log(student.age);
    // console.log(this.studentProperty);
    console.log("====Contructor end====");
  }

  // ngOnInit - hook - cel mai popular, (pas 2)
  ngOnInit(): void {
    console.log("====ngOnInit start====");

    this.students = this.getStudents();
    console.log(this.students);
    console.log("ngOnInit")
    // apelam metoda parseStudents
    // this.parseStudents();

    console.log("====ngOnInit end====");
  }

  name: string = 'test';
  name2: string = "test2";
  // proprietate a unei clase, se poate folosi oriunde in interiorul clasei SundayComponent 
  // studentProperty = new Student();


  //functie noua - isChildComponent
  isChildComponent(): boolean {
    console.log();
    return true;
  }
  //functie noua - parseStudent - cream o lista unde adaugam studenti;
  parseStudents(): void {
    const arrayOfStudents: Array<Student> = [];
    const student1 = new StudentOfSda("Sergiu", 30, "Cluj", [10, 9, 8, 7]);
    const student2 = new StudentOfSda("Adrian", 28, "Bucuresti", [10, 9, 9, 9]);
    const student3 = new StudentOfSda("Vasile", 29, "Bucuresti", [10, 8, 8, 7]);
    const student4 = new StudentOfSda("Bianca", 31, "Timisoara", [10, 7, 8, 7]);
    const student5 = new StudentOfSda("Iulia", 27, "Baia Mare", [10, 9, 10, 7]);
    const student6 = new StudentOfSda("Cosmin", 30, "Bistrita", [10, 9, 9, 7]);
    const student7 = new StudentOfSda("Vasile", 31, "Iasi", [10, 9, 8, 9]);
    const student8 = new StudentOfSda("Vlad", 34, "Craiova", [10, 9, 8, 8]);
    const student9 = new StudentOfSda("Gabriel", 32, "Alba Iulia", [10, 10, 8, 7]);

    arrayOfStudents.push(student1, student2, student3, student4, student5, student6, student7, student8, student9);

    console.log(arrayOfStudents);

  }

  getStudents(): Array<Student> {
    const arrayOfStudents: Array<Student> = [];
    const student1 = new StudentOfSda("Sergiu", 30, "Cluj", [10, 9, 8, 7]);
    const student2 = new StudentOfSda("Adrian", 28, "Bucuresti", [10, 9, 9, 9]);
    const student3 = new StudentOfSda("Vasile", 29, "Bucuresti", [10, 8, 8, 7]);
    const student4 = new StudentOfSda("Bianca", 31, "Timisoara", [10, 7, 8, 7]);
    const student5 = new StudentOfSda("Iulia", 27, "Baia Mare", [10, 9, 10, 7]);
    const student6 = new StudentOfSda("Cosmin", 30, "Bistrita", [10, 9, 9, 7]);
    const student7 = new StudentOfSda("Vasile", 31, "Iasi", [10, 9, 8, 9]);
    const student8 = new StudentOfSda("Vlad", 34, "Craiova", [10, 9, 8, 8]);
    const student9 = new StudentOfSda("Gabriel", 32, "Alba Iulia", [10, 10, 8, 7]);

    arrayOfStudents.push(student1, student2, student3, student4, student5, student6, student7, student8, student9);

    return arrayOfStudents;
  }

  students: Array<Student> = [];


  currentStudent: Student = new StudentOfSda("Leonte", 28, "Bucuresti", [10, 10]);




}

