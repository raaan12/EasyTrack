import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DUMMY_USERS} from "../../dummy-users";
import {UserComponent} from "../user/user.component";
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../../dummy-tasks";
import {EditorComponent, TINYMCE_SCRIPT_SRC} from "@tinymce/tinymce-angular";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "../../models/User";

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

  isAddingTask= false;
  tasks = DUMMY_TASKS

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask= true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,

    })
    this.isAddingTask = false;

  }
}
