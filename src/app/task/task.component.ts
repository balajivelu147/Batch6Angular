import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { UserTaskService } from 'src/shared/services/user-task.service';
import { task, taskResult } from 'src/shared/model/task.model';
import { filter, first, map, tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
// import { taskResult } from '../model/task.model';
// import { task } from './../../model/task.model';


// export interface task{
//   due_date: string;
//   message: string;
//   priority: string;
//   id: string;
//   assigned_name: string;
//   created_on: string; 
//   remove: any;
//   edit: any;
// }

// const taskboard: task[] = [
//   { player: 'Top Gun', game: 'River Raid', task: 15, remove: '' },
//   { player: 'ThePro', game: 'River Raid', task: 11, remove: ''  },
//   { player: 'Ninja', game: 'Counter Strike', task: 10 , remove: '' },
//   { player: 'Killer', game: 'Counter Strike', task: 9, remove: ''  },
//   { player: 'Psycho', game: 'Counter Strike', task: 6, remove: ''  },
//   { player: 'Noob', game: 'Counter Strike', task: 3, remove: ''  },
//   { player: 'Lagger', game: 'Counter Strike', task: 4, remove: ''  }
// ] 

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: UserTaskService) { }
  taskboard: task[];
  columns = ['id', 'due_date', 'message', 'priority', 'assigned_name', 'created_on', 'edit', 'remove'];
  dataSource: MatTableDataSource<task>;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.taskService.taskListInfo$()
      .pipe(
        first(),
        map((result: taskResult) => result.tasks),
        tap((value) => this.taskboard = value),
        tap(() => {
          this.dataSource = new MatTableDataSource(this.taskboard.slice());
          this.dataSource.paginator = this.paginator;
        })
      )
      .subscribe();

  }

  removeAll() {
    this.dataSource.data = [];
  }

  removeAt(index: number, $event, task) {
    const data = this.dataSource.data;
    this.taskService.deleteTask$(task.id)
      .pipe(first())
      .subscribe();
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }
  updatableTask;
  isEdit: boolean = false;
  updateRecord() {
    this.updatableTask.message = this.message;
    this.updatableTask.priority = this.priority;
    this.updatableTask.assigned_to = this.assigned_to;

    this.taskService.updateTask$(this.updatableTask)
    .pipe(first())
    .subscribe();
    this.isEdit = false;
  }
  message;
  priority;
  assigned_to;
  editAt(index: number, task) {
    this.updatableTask = task;
    this.message = task.message;
    this.priority = task.priority;
    this.assigned_to = task.assigned_to;
    this.isEdit = true;
  }

  reset() {
    this.dataSource.data = this.taskboard.slice();
    this.table.renderRows();
  }

  sortData(sort: Sort) {
    // if (sort.active && sort.direction !== '') {
    //   this.dataSource.data = this.dataSource.data.sort((a, b) => {
    //     const isAsc = sort.direction === 'asc';
    //     switch (sort.active) {
    //       case 'player': return this.compare(a.player, b.player, isAsc);
    //       case 'game': return this.compare(a.game, b.game, isAsc);
    //       case 'task': return this.compare(a.task, b.task, isAsc);
    //       default: return 0;
    //     }
    //   });
    // }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
