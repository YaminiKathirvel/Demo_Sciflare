import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    passWord: new FormControl('', [Validators.required])
  });

  onSumbit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const getFormValue = JSON.stringify(this.loginForm.value);
    localStorage.setItem("formValue", getFormValue);
    this.router.navigate(['/dashboard']);
  }
}
