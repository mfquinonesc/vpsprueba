import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ArreglosComponent } from './views/arreglos/arreglos.component';
import { MatrizComponent } from './views/matriz/matriz.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'arr', component:ArreglosComponent},
  { path: 'matriz', component:MatrizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
