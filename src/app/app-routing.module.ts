import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => {
        return m.UsersModule;
      }),
  },
  // {
  //   path: 'candidates',
  //   loadChildren: () =>
  //     import('./users/users.module').then((m) => {
  //       return m.UsersModule;
  //     }),
  // },
  // {
  //   path: 'job-ad',
  //   loadChildren: () =>
  //     import('./users/users.module').then((m) => {
  //       return m.UsersModule;
  //     }),
  // },
  // { path: '**', component: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
