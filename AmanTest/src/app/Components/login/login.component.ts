import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginEnums, LoginErrors } from 'src/app/enum';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  public loginForm: FormGroup;
  public loginEnums = LoginEnums;
  public loginErrors = LoginErrors;
  public wrongCredentials:boolean = false;

  onSubmit() {
    console.log(this.loginForm.controls['email'].value);
    
    if (
      this.loginForm.controls['email'].status === 'VALID' && this.loginForm.controls['email'].value === 'example@example.co.il' && 
      this.loginForm.controls['password'].status === 'VALID' && this.loginForm.controls['password'].value === '123456789'
    ) {
      const user: { email: string; password: string } = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.localStorage.setToLocal('User', JSON.stringify(user));
      this.router.navigate(['/jokes-gallery']);
    }else{
      this.wrongCredentials = false;
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
