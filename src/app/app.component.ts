/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AppState } from './app.service';

import { Sidenav } from './sidenav/sidenav.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'ply-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
  ],
  template: `
    <main>

      <md-sidenav-container (click)="this.sidenav.closeSidenav()">
        <ply-toolbar></ply-toolbar>
        <ply-sidenav></ply-sidenav>
        <router-outlet></router-outlet>
      </md-sidenav-container>
    </main>

    <footer>
      <span>Playalong.io</span>
    </footer>
  `,
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public isSidenavOpen: boolean;

  constructor(
    public appState: AppState,
    public sidenav: Sidenav,
  ) {
  }

  public ngOnInit() {
    this.isSidenavOpen = false;
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
