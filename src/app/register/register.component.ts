import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
) { 

}

ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   email: [''],
    //   dateOfBirth: [''],
    //   firstName: [''],
    //   lastName: [''],
    //   phoneNumber: [''],
    //   gender: [''],
    // });
}

// convenience getter for easy access to form fields
// get f() { return this.registerForm.controls; }

onSubmit() {
    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    // this.loading = true;
    // this.userService.register(this.registerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.alertService.success('Registration successful', true);
    //             // this.router.navigate(['/login']);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
}
}
