import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApplyUdpateComponent } from './apply-udpate/apply-udpate.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';

const routes: Routes = [
  {path:'', component:ApplyLeaveComponent},
  {path:'viewleave', component:ViewLeaveComponent},
  {path:'udpateleave/:id',component:ApplyUdpateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
