import {
  Component,
  OnInit,
  Input,
  ElementRef,
} from '@angular/core';
import {
  ActivatedRoute,
} from '@angular/router';

import { Sidenav } from '../sidenav/sidenav.service';

@Component({
  selector: 'ply-toolbar',
  styleUrls: [ './toolbar.component.scss' ],
  template: `
  <md-toolbar>
    Playalong
    <button md-button (click)="this.sidenav.openSidenav($event)">
      Open sidenav
    </button>
  </md-toolbar>

  `,
})
export class ToolbarComponent implements OnInit {

  constructor(public sidenav: Sidenav) {}

  public ngOnInit() {

  }
}
