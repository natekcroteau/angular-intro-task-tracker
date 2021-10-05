import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];                        //bringing the tasks in to the tasks component and setting the type to Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);   //subscribe to watching for the observable task service
  }

}
