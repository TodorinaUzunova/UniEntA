import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../authentication/auth.guard';



const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/profile',

      },
      {
        path: 'profile',
        component:ProfileComponent,
        data: {
          isLogged: true,
        }

      },


    ],
  //canActivate: [AuthGuard],
  },

];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const UserRoutingModule = RouterModule.forChild(routes);