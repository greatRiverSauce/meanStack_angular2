import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from "./header/head.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRouterModule } from "./app-router.module";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
