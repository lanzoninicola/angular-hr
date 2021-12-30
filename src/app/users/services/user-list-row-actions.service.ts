import { Injectable } from '@angular/core';

import { DataListRowActionProvider } from 'src/app/core/services/dataListRowActionProvider';
import {
  DataListRowAction,
  DataListRowActionPayload,
} from 'src/app/core/interfaces/dataListRowAction';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserListRowActionsService extends DataListRowActionProvider {
  override readonly actionList: DataListRowAction[] = [
    {
      name: 'edit',
      label: 'Edit',
    },
    {
      name: 'disable',
      label: 'Disable',
    },
  ];

  constructor(private userService: UserService, private route: Router) {
    super();
  }

  subscribe() {
    this.actionsStore$.subscribe((a: DataListRowActionPayload) => {
      if (a.action === 'edit') {
        this.edit(a.payload);
      }
    });
  }

  edit(user: User) {
    this.route.navigate([`/users/${user.id}`]);
  }

  disable() {}
}
