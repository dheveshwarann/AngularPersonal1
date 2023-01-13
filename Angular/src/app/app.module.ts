import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { RouteComponent } from './route/route.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    RouteComponent,
    FormComponent,
    Form3Component,
    Form4Component
 //   RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
