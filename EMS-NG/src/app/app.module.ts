import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { FormsModule } from '@angular/forms';
import { Renderer2Component } from './lessons/renderer2/renderer2.component';
import { HostlistenerComponent } from './lessons/hostlistener/hostlistener.component';
import { HostbinderDirective } from './lessons/hostbinder.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    Renderer2Component,
    HostlistenerComponent,
    HostbinderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }