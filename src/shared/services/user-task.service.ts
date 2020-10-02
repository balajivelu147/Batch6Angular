import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task, taskResult } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {




  private readonly userListApi: string = 'https://devza.com/tests/tasks/listusers';
  private readonly createTaskApi: string = 'http://devza.com/tests/tasks/create';
  private readonly taskListApi: string = 'http://devza.com/tests/tasks/list';
  private readonly deleteTaskApi: string = 'http://devza.com/tests/tasks/delete';
  private readonly updateTaskApi: string = 'http://devza.com/tests/tasks/update';


  constructor(private httpclient: HttpClient) {

  }

  //get method
  getUserInfo$() { 
    return this.httpclient.get<any>(`${this.userListApi}`);
  }

  createUserTask$() {

    let body = new FormData();
    body.append('due_date', '2020-09-18');
    body.append('message', 'you have been assigned task Mr.sharath');
    body.append('priority', '2');
    body.append('assigned_to', '1');

    return this.httpclient.post<any>(`${this.createTaskApi}`, body);
  }

  //post method
  deleteTask$(taskId) {
    let body = new FormData();
    body.append('taskid', taskId);
    return this.httpclient.post<any>(`${this.deleteTaskApi}`, body );
  }

  //get method
  taskListInfo$(): Observable<taskResult> {
    return this.httpclient.get<any>(this.taskListApi);
  }

  updateTask$(task: task) {
    let body = new FormData();
    body.append('message', task.message);
    body.append('due_date',  task.due_date);
    body.append('priority',  task.priority);
    body.append('assigned_to',  task.assigned_name);
    body.append('taskid',  task.id); 

    return this.httpclient.post<any>(`${this.updateTaskApi}`,body);
  }



}
