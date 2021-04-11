import { Component, OnInit } from '@angular/core';
import * as data from './data/tasks.json';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'regexpert';
  tasks: Task[] = (data as any).default;
  currentTask: Task;
  pattern: string;
  str: string;
  currentTaskIndex = 0;
  result: string;
  help: boolean;
  answer: boolean;

  ngOnInit() {
    var level = localStorage.getItem("level");
    if (level) {
      this.currentTaskIndex = parseInt(level);
    }
    this.currentTask = this.tasks[this.currentTaskIndex];
  }
  constructor() {

  }
  nextTask() {
    this.currentTaskIndex++;
    if (this.currentTaskIndex < this.tasks.length) {
      this.currentTask = this.tasks[this.currentTaskIndex];
      this.result = "";
      this.pattern = "";
      this.help = false;
      this.answer = false;
      localStorage.setItem("level", this.currentTaskIndex.toString());
    }
    else
    {
      alert("Congratulations!");
      
    }

  }
  onChange(event) {

    var re = new RegExp(this.pattern, 'gi');
    var res = this.currentTask.text.match(re);
    this.result = res.join("\n");
    if (this.result && this.result == this.currentTask.expected) {
      this.currentTask.done = true;

    }
  }
}
