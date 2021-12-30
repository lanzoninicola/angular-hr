import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Users = [];
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  addUser() {}

  handleTableRowClick(userId: string) {
    console.log('im clicking');
  }
}
