import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { UnauthaccessComponent } from './unauthaccess/unauthaccess.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'create', component: CreateComponent },

  { path: 'login', component: LoginComponent },
  {path:'orgtree',component:OrgtreeComponent},
  {path:'admin',component:AdminComponent},
  {path:'unauth',component:UnauthaccessComponent},
  
  { path: '',component:LoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
