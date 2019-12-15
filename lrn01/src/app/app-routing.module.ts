import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataaBindigComponent } from './dataa-bindig/dataa-bindig.component';


const routes: Routes = [
  { path: 'd-b', component: DataaBindigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
