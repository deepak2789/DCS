// job.model.ts
export class Job {
    constructor(
      public id: number,
      public description: string,
      public experience: string,
      public technology: string,
      public location: string,
      public resume: string,
  public salary:string,
  public type: string
    ) {}
  }
  