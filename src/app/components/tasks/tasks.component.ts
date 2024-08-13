import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../../dummy-users";
import {UserComponent} from "../user/user.component";
import {TaskComponent} from "../task/task.component";
import {DUMMY_TASKS} from "../../dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  tasks = DUMMY_TASKS

  get selectedUserTask(){
    return this.tasks.filter((task)=> task.userId === this.userId);
  }
}
