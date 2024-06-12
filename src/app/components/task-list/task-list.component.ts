import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../../interfaces/itask';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  port: number = 3000;
  list_task: ITask[] = [];
  ngOnInit(): void {
    fetch(`http://localhost:${this.port}/task`)
    .then ( res => res.json())
    .then ( data => {
      this.list_task = data;
    })
  }
}
