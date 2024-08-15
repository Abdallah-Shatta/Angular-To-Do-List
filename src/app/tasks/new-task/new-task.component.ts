import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle!: string;
  enteredSummary!: string;
  enteredDate!: string;

  @Output() cancel = new EventEmitter();
  onCancel() {
    this.cancel.emit();
  }
  
  @Output() add = new EventEmitter<NewTask>();
  onSubmit() {
  this.add.emit(
    {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
