import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    DisplayComponent,
    HomeComponent,
    NavBarComponent,
    PieComponent,
    OrgtreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
