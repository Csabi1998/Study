import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuhtService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuhtService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
