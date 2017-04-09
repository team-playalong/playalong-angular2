import {
  Component,
  OnInit,
  ElementRef,
} from '@angular/core';
import {
  ActivatedRoute,
} from '@angular/router';

type PlyMenuItemType = {
  link: string,
  title: string,
  icon: string,
};

@Component({
  selector: 'ply-sidenav',
  styleUrls: [ './sidenav.component.scss' ],
  template: `
    <div class="ply-sidenav-content">
      <button md-button (click)="sidenav.open()">
        Open sidenav
      </button>
    </div>
    <md-sidenav #sidenav class="ply-sidenav">
      <nav>
        <a
          *ngFor="let menuItem of menuItems"
          [routerLink]="[menuItem.link]"
          routerLinkActive="active">
          <md-icon>{{menuItem.icon}}</md-icon>
          {{menuItem.title}}
        </a>

      </nav>
    </md-sidenav>
  `,
})
export class SidenavComponent implements OnInit {
  private menuItems: PlyMenuItemType[];

constructor(
    private route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.menuItems = [
      {
        link: './',
        title: 'Search',
        icon: 'search',
      },
    ];
  }
}
