import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }
  onClickLogout() {
    localStorage.removeItem("formValue");
    this.router.navigate(['/login']);

  }

}


