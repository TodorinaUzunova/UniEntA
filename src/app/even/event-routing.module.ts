import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../authentication/auth.guard';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: 'event',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/event/create',

      },
      {
        path: 'create',
        component: CreateComponent,
        data: {
          isLogged: true,
        }

      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          isLogged: true,
        }

      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        data: {
          isLogged: true,
        }

      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: {
          isLogged: true,
        }

      },
     

    ],
  canActivate: [AuthGuard],
  },

];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const EventRoutingModule = RouterModule.forChild(routes);
