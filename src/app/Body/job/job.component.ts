import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobServiceService } from '../../Service/job-service.service';
import { Job } from '../../Models/Job';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

  public names =[1,2,3,4];
  jobs:any;

  constructor(private router: Router,private _service:JobServiceService) { }

  jobDeatils() {
    this.router.navigate(['/app-job-apply']);
  }

  ngOnInit(): void {
    this._service.getDetails().subscribe({
      next: (data: Job[]) => {
        this.jobs = data;
        console.log(this.jobs);
      },
      error: (error) => {
        console.error('Error fetching job details:', error);
      }
    });
    
  }
  }


