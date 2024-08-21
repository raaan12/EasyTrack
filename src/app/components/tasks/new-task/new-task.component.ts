import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../../../models/User";
import {TaskService} from "../task.Service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close= new EventEmitter();
  enteredTitle= "";
  enteredSummary= "";
  enteredDate= "";
  private taskService= inject(TaskService);
  onCloseForms(){
    this.close.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
