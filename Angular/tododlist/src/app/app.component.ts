import { Component } from '@angular/core';
import { Task } from './model/task';
import { TodoserviceService } from './todoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Management System';
  task: Task;
  result: string;
  flag: boolean;
  taskArr: Task[];

  constructor(private service: TodoserviceService) {
    this.task = new Task();
    this.result = "";
    this.taskArr = [];
    this.flag = false;
  }

  insertTask(data: any) {
    this.task.id = data.taskId;
    this.task.todo = data.taskhtm;

    this.result = this.service.insertTask(this.task);
    return"Data Added"
  }

  updateTask(data: any) {
    this.task.id = data.taskId;
    this.task.todo = data.taskhtm;

    this.result = this.service.updateTask(this.task);
  }

  deleteTask(data: any) {
    this.result = this.service.deleteTask(data.taskId);
  }
  findtask(data: any){
    this.task = this.service.findtask(data.taskId);
    this.result = this.task.id + " "+ this.task.todo;
  }
  findAlltask(){
    this.taskArr= this.service.findAlltask();
    this.flag=true;
  }

}
