import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../Models/Job';
import { JobServiceService } from '../../Service/job-service.service';

@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-apply.component.html',
  styleUrl: './job-apply.component.css'
})
export class JobApplyComponent {

  job: Job = new Job(0, '', '', '', '', '', '', '');

  constructor(private jobService: JobServiceService) {}

  saveDetails(): void {
   // this.jobService.saveDetails(this.job);
   // this.job = new Job(0, '', '', '', '', '', '', ''); // Reset the form fields
   debugger;
   const emailData = {
    to: 'sharingresume@gmail.com',
    subject: 'Subject of the email',
    body: 'Body of the email'
  };
  
   this.jobService.sendEmail(emailData);
  }



  

}
