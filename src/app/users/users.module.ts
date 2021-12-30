import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const usersRoutes: Routes = [
  {
    path: '',
    component: UserListComponent,
    children: [{ path: ':id', component: UserEditComponent }],
  },
];

@NgModule({
  declarations: [UserListComponent, UserEditComponent],
  imports: [CommonModule, CoreModule, RouterModule.forChild(usersRoutes)],
})
export class UsersModule {}
