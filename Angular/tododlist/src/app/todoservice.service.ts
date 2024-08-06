import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
 url:string;
 task:Task;
 taskArr:Task[];
  constructor(private http: HttpClient) 
  {
    this.url="http://localhost:3004/todotask";
    this.task=new Task();
    this.taskArr=[];
   }
   
  insertTask(task:Task){
      this.http.post<Task>(this.url,task).subscribe();
      return "task added";
  }

  updateTask(task:Task){
      this.http.put<Task>(this.url+"/"+task.id,task).subscribe();
      return "task updated";
  }
deleteTask(todoId:Task){
  this.http.delete<Task>(this.url+"/"+todoId).subscribe();
  return "task deleted";
}
findtask(regNo:number){
  this.http.get<Task>(this.url+"/"+regNo).subscribe(data => this.task = data);
  return this.task;
}
findAlltask(){
  this.http.get<Task[]>(this.url).subscribe(data => this.taskArr = data);
  return this.taskArr;
}

}
