import { Component, Input } from '@angular/core';
import { Task } from '../../app.component';
import { TaskService } from '../../services/task.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Guid } from 'guid-typescript';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private taskService: TaskService) {
    this.taskService = taskService;
  }

  Tasks: Task[] = this.taskService.getTasks();

  applyForm = new FormGroup({
    id: new FormControl(Guid.create()),
    title: new FormControl(''),
    description: new FormControl(''),
    completed: new FormControl(false),
    createdAt: new FormControl(Date.now()),
    updatedAt: new FormControl(Date.now()),
  });

  AddTask = () => {
    const newTask: Task = {
      id: Guid.create(),
      title: this.applyForm.value?.title as string,
      description: this.applyForm.value?.description as string,
      completed: this.applyForm.value?.completed as boolean,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.taskService.addTask(newTask);
    this.applyForm.reset();
  };

  deleteTask(id: Guid): void {
    this.taskService.deleteTask(id);
    this.Tasks = this.taskService.getTasks();
  }

  switchTaskStatus(id: Guid): void {
    this.taskService.switchTaskStatus(id);
    this.Tasks = this.taskService.getTasks();
  }
}
