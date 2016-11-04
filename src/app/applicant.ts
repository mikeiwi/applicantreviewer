import {Component} from '@angular/core';

export class Applicant {
  public firstname?: string;
  public lastname?: string;
  public id?: number;
  public birthDate?: Date;
  public email?: string;
  public githubUser?: string;
}

@Component({
  selector: 'reviewer-app',
  template: require('./applicant.html')
})
export class ApplicantFormComponent {
  title = 'Current User';
  applicant: Applicant = {};
}
