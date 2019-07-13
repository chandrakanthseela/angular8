import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeDataService } from '../resume-data.service';
import { Validations } from '../validations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

 myResumeForm: FormGroup;
 invalid = true;
  constructor(private router: Router) {
    this.createForm();
    console.log(this.myResumeForm);
  }
 // this.invalid = this.myResumeForm.status === 'invalid' ? true : false;
  createForm() {
    this.myResumeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validations.alphabetsOnly]),
      email: new FormControl('', [Validators.required, Validations.email]),
    });
  }
  submit(){
    ResumeDataService.add(this.myResumeForm.value);
    this.router.navigate(['display']);
  }

}
