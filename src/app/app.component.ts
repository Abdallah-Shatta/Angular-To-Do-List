import { Component, inject } from '@angular/core';
import { usersService } from './user/users.service';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { type User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userSrv = inject(usersService);
  users = this.userSrv.users;
  
  selctedUser!: User
  onSelected(user: User){
    this.selctedUser = user;
  }
}
