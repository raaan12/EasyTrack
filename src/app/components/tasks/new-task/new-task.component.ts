import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../../../models/User";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel= new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle= "";
  enteredSummary= "";
  enteredDate= "";
  onCloseForms(){
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });

  }
}
