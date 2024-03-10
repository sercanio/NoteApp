import { Injectable } from '@angular/core';
import { Task } from '../app.component';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  protected taskList: Task[] = [];

  constructor() {}

  getTasks(): Task[] {
    return this.taskList;
  }

  getTaskById(id: Guid): Task {
    return this.taskList.find((task) => task!.id === id) as Task;
  }

  addTask(task: Task): void {
    if (task) {
      this.taskList.push(task);
    } else {
      console.log('no task');
    }
  }

  deleteTask(id: Guid): void {
    this.taskList = this.taskList.filter((task) => task!.id !== id);
  }

  switchTaskStatus(id: Guid): void {
    this.taskList = this.taskList.map((task) => {
      if (task!.id === id) {
        task!.completed = !task?.completed;
      }
      return task;
    });
  }
}
