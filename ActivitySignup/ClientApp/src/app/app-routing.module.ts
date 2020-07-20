import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: 'activities/:id', component: ActivityComponent },
  { path: '', redirectTo: 'activities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
