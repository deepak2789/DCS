
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './Body/job/job.component';
import { DashoardComponent } from './Body/dashoard/dashoard.component';
import { JobApplyComponent } from './Body/job-apply/job-apply.component';

export const routes: Routes = [
{ path: 'job', component: JobComponent },
{
    path:'app-job-apply',component:JobApplyComponent
},
{ path: 'home', component: DashoardComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

