import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 const routes: Routes = [
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   //canActivate:[AuthGuard],
  //   // data:{
  //   //    isLogged:false,
  //   // }
  //},
    //  {
    //   path: 'login',
    //   component: LoginComponent,
    //   //canActivate:[AuthGuard],
    //   // data:{
    //   //   isLogged:false,
    //   // }
    // },
    
    // {
    //   path: '**',
    //   component: PageNotFoundComponent,
    // }
  ];
  
  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule]
  // })
  export const AuthRoutingModule = RouterModule.forChild(routes);
  