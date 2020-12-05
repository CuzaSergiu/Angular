import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // metoda1 pentru a defini un array de string
  pets: Array<string>;
  // metoda2 pentru a defini un array de string
  pets1: string[] = ["dog","cat","cow","wolf"];

}
