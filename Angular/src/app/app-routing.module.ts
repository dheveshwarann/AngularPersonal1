import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {path:"",component:ChildComponent},
  {path:"route",component:RouteComponent},
  {path:'form1',component:FormComponent},
  {path:"form2",component:Form2Component},
  {path:"form3",component:Form3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
