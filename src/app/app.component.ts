import { Component } from '@angular/core';
import * as data from './data/tasks.json';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regexpert';
  tasks: Task[] = (data as any).default;
  currentTask: Task;
  pattern:string;
  str:string;
  currentTaskIndex=0;
  constructor()
  {
    console.log(data);
    this.currentTask = this.tasks[this.currentTaskIndex];
    
  }
  nextTask()
  {
    this.currentTaskIndex++; 
    this.currentTask = this.tasks[this.currentTaskIndex];
  }
}
