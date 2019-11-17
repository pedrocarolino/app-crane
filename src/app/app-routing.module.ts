import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuindasteComponent} from './guindaste/guindaste.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: GuindasteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
