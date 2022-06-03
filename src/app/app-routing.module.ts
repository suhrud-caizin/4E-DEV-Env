import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { UnauthaccessComponent } from './unauthaccess/unauthaccess.component';

const routes: Routes = [
  // { path: 'display', component: DisplayComponent,canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent,canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent   },
  { path: 'login', component: LoginComponent  },
  {path:'orgtree',component:OrgtreeComponent,canActivate: [AuthGuard] },
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'unauth',component:UnauthaccessComponent},
  {path:'details/:id',component:DetailsComponent,canActivate: [AuthGuard]},
  
  { path: '',component:LoginComponent },
  { path: '**',component:LoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
