import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {ApplicantFormComponent} from './applicant';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ApplicantFormComponent
  ],
  bootstrap: [ApplicantFormComponent]
})
export class AppModule {}
