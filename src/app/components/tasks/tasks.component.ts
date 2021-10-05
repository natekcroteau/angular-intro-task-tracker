import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks'
import { Task } from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS                         //bringing the tasks in to the tasks component and setting the type to Task[]

  constructor() { }

  ngOnInit(): void {
  }

}
