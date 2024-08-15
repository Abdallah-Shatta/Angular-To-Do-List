import { Injectable } from "@angular/core";
import { type User } from "./user.model";

@Injectable({providedIn: "root"})
export class usersService{
    users: User[] =[
        {
            id: 'u1',
            name: 'User 1',
            avatar: '/Angular-To-Do-List/assets/users/user-1.jpg',
          },
          {
            id: 'u2',
            name: 'User 2',
            avatar: '/Angular-To-Do-List/assets/users/user-2.jpg',
          },
          {
            id: 'u3',
            name: 'User 3',
            avatar: '/Angular-To-Do-List/assets/users/user-3.jpg',
          },
          {
            id: 'u4',
            name: 'User 4',
            avatar: '/Angular-To-Do-List/assets/users/user-4.jpg',
          },
          {
            id: 'u5',
            name: 'User 5',
            avatar: '/Angular-To-Do-List/assets/users/user-5.jpg',
          },
          {
            id: 'u6',
            name: 'User 6',
            avatar: '/Angular-To-Do-List/assets/users/user-6.jpg',
          }
    ]
}