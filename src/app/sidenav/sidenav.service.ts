import { Injectable } from '@angular/core';

@Injectable()
export class Sidenav {

  public isOpened = false;

  constructor(

  ) {}

  public openSidenav(e: Event) {
    this.isOpened = true;
    e.preventDefault();
    e.stopPropagation();
  }

  public closeSidenav() {
    this.isOpened = false;

  }
}
