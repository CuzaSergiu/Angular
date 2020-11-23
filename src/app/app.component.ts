import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ProjectX';
  age: number;
  isActiveStudent: boolean;
  arrayOfStudents: Array<String> = ['Sergiu', 'Bianca']

  functie2() {
    this.age = 6;
    console.log('something');
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log(this.arrayOfStudents);
    console.log(this.title);
  }
}


