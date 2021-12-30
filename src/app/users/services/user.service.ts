import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userEdit: Subject<User> = new Subject();
  shouldEditUser: boolean = false;

  constructor(private readonly router: Router) {
    // this.actionStore.subscribe((a) => {
    //   if (a.name === 'edit') {
    //     this.edit(a.user);
    //   }
    //   if (a.name === 'disable') {
    //     this.disable(a.user);
    //   }
    // });
    // this.userEdit.subscribe((data) => console.log(data));
  }

  get users(): User[] {
    return users;
  }

  edit(user: User) {
    this.router.navigate([`/users/${user.id}`]);
  }

  disable(user: User) {}
}

const users = [
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    companyRole: 'HR Manager',
    disabled: false,
  },
  {
    id: '2',
    firstname: 'Mark',
    lastname: 'Lorence',
    companyRole: 'HR Specialist',
    disabled: false,
  },
  {
    id: '3',
    firstname: 'Frank',
    lastname: 'Giordano',
    companyRole: 'Lead Developer Team',
    disabled: false,
  },
  {
    id: '4',
    firstname: 'Maria',
    lastname: 'Lorizza',
    companyRole: 'Lead Infrastructure Team',
    disabled: false,
  },
  {
    id: '5',
    firstname: 'Paul',
    lastname: 'Francis',
    companyRole: 'Lead Project Manager',
    disabled: false,
  },
];
