import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    return this.httpclient.post<any>(`${this.createTaskApi}`, body, { headers: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' } });
  }

  //post method
  deleteTask$() {
    let body = new FormData();
    body.append('taskid', '63');
    return this.httpclient.get<any>(`${this.deleteTaskApi}`);
  }

  //get method
  taskListInfo$() {
    return this.httpclient.get<any>(this.taskListApi);
  }


}
