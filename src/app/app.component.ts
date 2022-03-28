import { Component } from '@angular/core';
import { getTasks } from './task.service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's9_es1_B';
  tasks!: Task[];
  compiti!: Task[];

  constructor() {
    getTasks().then(tasks => {
      console.log(tasks);
      this.compiti = tasks;
      this.makeTrue();
      console.log(this.compiti)
    });
  }

  makeTrue() {
    this.compiti = this.compiti.map(compito => {
      return { ...compito, completed: true }
    })
  }
}
