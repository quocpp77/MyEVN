import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  pwd_hide = true;

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loginUserData = {}

  constructor(
    // private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getErrorUserName() {
    // return this.form.value['username'].username.hasError('required') ? 'You must enter a value' : '';
  }

  onSubmit() {
    // console.log(this.loginUserData);
    // this.auth.loginUser(this.loginUserData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       localStorage.setItem('token', res.username);
    //       this.router.navigate(['/home']);
    //     },
    //     err => console.log(err)
    //   )
    this.router.navigate(['/home']);
    // this.router.navigate(['/admin']);
  }

}
