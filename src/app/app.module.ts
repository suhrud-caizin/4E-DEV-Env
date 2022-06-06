import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './my-interceptor.interceptor';
import { PieComponent } from './pie/pie.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { NgChartsModule } from 'ng2-charts';
import { AdminComponent } from './admin/admin.component';
import { UnauthaccessComponent } from './unauthaccess/unauthaccess.component';
import { DetailsComponent } from './details/details.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTree, MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    DisplayComponent,
    HomeComponent,
    NavBarComponent,
    PieComponent,
    OrgtreeComponent,
    AdminComponent,
    UnauthaccessComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule,NgChartsModule,NgSelectModule,FormsModule, 
    BrowserAnimationsModule,MatTreeModule,MatIconModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
