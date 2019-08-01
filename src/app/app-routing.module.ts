import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseListComponent} from "./house/house-list/house-list.component";
import {HouseEditComponent} from "./house/house-edit/house-edit.component";


const routes: Routes = [{path: '', redirectTo: '/house', pathMatch: 'full'},
  {
    path: 'house',
    component: HouseListComponent
  },{
    path: 'house-add',
    component: HouseEditComponent
  },
  {
    path: 'house-edit/:id',
    component: HouseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
