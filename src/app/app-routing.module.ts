import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'parent',
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
