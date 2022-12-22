import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment/assignment.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
  { path: 'counter', component: MyCounterComponent },
  { path: 'assignment', component: AssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
