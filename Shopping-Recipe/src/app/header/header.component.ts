import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuhtService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private sub: Subscription;
  isAuth = false;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuhtService
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
