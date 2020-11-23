import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thuesday',
  templateUrl: './thuesday.component.html',
  styleUrls: ['./thuesday.component.css']
})
export class ThuesdayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Event Binding 
  goToYoutube() {
    console.log("You clicked!");
    //redirectionam la un link extern 
    window.location.href = "https://www.youtube.com/";
  }
}
