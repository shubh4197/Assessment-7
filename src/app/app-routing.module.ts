import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditpersonalComponent } from './editpersonal/editpersonal.component';
import { EditeducationalComponent } from './editeducational/editeducational.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{path:"",pathMatch:"full",component:HomeComponent},
{path:"list",component:ListComponent},
{path:"personal/:id",component:EditpersonalComponent},
{path:"edu/:id",component:EditeducationalComponent},
{path:"view",component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
