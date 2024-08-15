import { Component, inject, Input } from '@angular/core';
import { tasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent{
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask = false;
  private taskSrv = inject(tasksService);
  
  get selectedUserTasks(){
    return this.taskSrv.getUserTasks(this.userId);
  }

  onAddingTask(){
    this.isAddingTask = true;
  }

  onCancelNewTask(){
    this.isAddingTask = false;
  }

  addTask(newTask: NewTask){
    this.taskSrv.addTask(
      {
        id: "u-" + (3 + Math.floor(Math.random() * 10)),
        userId: this.userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.date
      });
      this.isAddingTask = false;
  }
  
}
