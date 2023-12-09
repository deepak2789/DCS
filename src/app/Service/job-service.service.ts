import { Injectable } from '@angular/core';
import { Job } from '../Models/Job';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private httpClient: HttpClient) {
  }


  private email:string ="sharingresume@gmail.com";
  private Passowrd:string="Welcome@123";


  private jobs: Job[] = [];

  saveDetails(job: Job): void {
    this.jobs.push(job);
  }


  getDetails(): Observable<Job[]> {
    debugger;
      return this.httpClient.get<Job[]>('http://localhost:3000/jobs');
  }


  sendEmail(emailData: any) {
    debugger;
    const apiUrl = 'http://localhost:4000/send-email';
  
    this.httpClient.post(apiUrl,emailData)
    .subscribe({
      next: (response: any) => {
        debugger;
        console.log('Email sent successfully!', response);
      },
      error: (error: any) => {
        debugger;
        console.error('Error sending email:', error);
      }
    });
  

  }
}
