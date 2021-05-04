import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import * as data from './../../data/tasks.json';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({ 'height': '0px', 'opacity': '0', 'display': 'none' })),
      state('open', style({ 'height': '100%', 'opacity': '1' })),

      transition('closed => open', [
        style({ 'display': 'block' }),
        animate('700ms ease-in')
      ]),

      transition('open => closed', [
        animate('700ms ease-in')
      ])
    ]),
  ]
})
export class ExerciseComponent implements OnInit {

  title = 'regexpert';
  tasks: Task[] = (data as any).default;
  currentTask: Task;
  pattern: string;
  str: string;
  currentTaskIndex = 0;
  result: string;
  help: boolean;
  answer: boolean;
  invalidRegex: boolean;

  ngOnInit() {
    var level = localStorage.getItem("level");
    if (level) {
      this.currentTaskIndex = parseInt(level);
    }
    this.currentTask = this.tasks[this.currentTaskIndex];
    for (let i = 0; i < this.currentTaskIndex; i++) {
      this.tasks[i].done = true;
    }
  }

  constructor(private router: Router) {

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
    else {
      this.router.navigate(['/finish', {}]);
    }
  }
  onChange(event) {
    this.invalidRegex = false;
    this.result = "";
    if (/\S/.test(this.pattern)) {
      this.Search();
    }

  }
  private Search() {
    try {
      var re = new RegExp(this.pattern, 'g');
      var res = this.currentTask.text.match(re);
      if (res) {
        this.result = res.join("\n");
        if (this.result && this.result == this.currentTask.expected)
          this.currentTask.done = true;
      }
    }
    catch (Error) {
      console.log(Error.message);
      this.invalidRegex = true;
    }
  }
}
