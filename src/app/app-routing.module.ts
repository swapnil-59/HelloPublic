import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplIdComponent } from './empl-id/empl-id.component';

const routes: Routes = [
  {path:"empl",component:EmplIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
