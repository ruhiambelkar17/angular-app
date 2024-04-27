import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   
    { path: '', component: EmployeeDashboardComponent },
// { path: '', component: HomeComponent },
];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })



