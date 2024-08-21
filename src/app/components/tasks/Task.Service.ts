import {DUMMY_TASKS} from "../../dummy-tasks";
import {NewTaskData} from "../../models/User";
import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'}) //to make this service class injectable in other classes
export class TaskService{
  private   tasks = DUMMY_TASKS;
  public getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
  }
  public addTask(taskData: NewTaskData, userId: string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
  }
  public removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);

  }
}
