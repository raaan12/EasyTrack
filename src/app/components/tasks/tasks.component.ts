import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DUMMY_USERS} from "../../dummy-users";
import {UserComponent} from "../user/user.component";
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../../dummy-tasks";
import {EditorComponent, TINYMCE_SCRIPT_SRC} from "@tinymce/tinymce-angular";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "../../models/User";
import {TaskService} from './task.Service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserComponent, TaskComponent, EditorComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'}
  ]
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  // private taskService = new TaskService();  // if we use it like that we use a local instance so if there is an update in another component using the same service this component will not be notified with these changes that's why we are going to use the dependency injection

  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  isAddingTask = false;

  //tasks = DUMMY_TASKS // is added to the service

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
