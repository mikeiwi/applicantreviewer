import {Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

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
  template: require('./applicant.html'),
  providers: [CookieService]
})
export class ApplicantFormComponent {
  title = 'Current User';
  applicant: Applicant = {};
  constructor(private _cookieService: CookieService) {}

  onSubmit(): void {
    //console.log(this._cookieService.get('current_applicant'));
    this._cookieService.putObject('current_applicant', this.applicant);
    //console.log(this._cookieService.get('current_applicant'));
  };
}
