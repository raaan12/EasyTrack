import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Task} from "../../../models/User";
import {CardComponent} from "../../../shared/card/card.component";
import {TaskService} from "../task.Service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent, DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;
  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}

