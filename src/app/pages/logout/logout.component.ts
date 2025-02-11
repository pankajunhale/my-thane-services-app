import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  private router = inject(Router);
  constructor() {}
  ngOnInit(): void {
    console.log({ tz: new Date(), page: 'logout' });
    window.location.href = 'login';
    // throw new Error('Method not implemented.');
  }
}
