import { Component, inject, Input } from '@angular/core';
import { type Task } from '../task.model';
import { DatePipe } from '@angular/common';
import { tasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  taskSrv = inject(tasksService);
  onComplete(){
    this.taskSrv.deleteTask(this.task.id);
  }
}
