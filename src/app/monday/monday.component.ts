import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  //Databinding - String interpolation - {{}} - 
  teacher = "Codrin";
  surname = "Leonte";

  isTeacher(): boolean {
    if (this.teacher === 'Codrin') {
      return true;
    } else {
      return false;
    }
  }

  
}
