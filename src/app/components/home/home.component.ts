import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  courseStarted:boolean;
  ngOnInit(): void {
    this.courseStarted = localStorage.getItem('level')!=null;
  }

}
