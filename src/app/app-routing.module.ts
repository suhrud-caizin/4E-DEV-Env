import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'create', component: CreateComponent },

  { path: 'login', component: LoginComponent },
  { path: '',component:LoginComponent },
  {path:'orgtree',component:OrgtreeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
