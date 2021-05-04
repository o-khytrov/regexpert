import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import * as data from './../../data/tasks.json';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  tasks: Task[] = (data as any).default;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    var level  =localStorage.getItem("level");
    if (level) {
      var nLevel = parseInt(level);
      console.log(nLevel);
      if(nLevel!=this.tasks.length-1)
      {
        this.router.navigate(['exercise']);
      }
    }
  }

}
