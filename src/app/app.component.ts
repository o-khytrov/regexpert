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
  pattern: string;
  str: string;
  currentTaskIndex = 0;
  result: string[];


  constructor() {
    this.currentTask = this.tasks[this.currentTaskIndex];
  }
  nextTask() {
    this.currentTaskIndex++;
    this.currentTask = this.tasks[this.currentTaskIndex];
  }
  onChange(event) {

    var re = new RegExp(this.pattern, 'gi');
    this.result = this.currentTask.text.match(re);
    if (this.result && this.result.join("\n") == this.currentTask.expected) {
      this.currentTask.done = true;

    }
  }
}
