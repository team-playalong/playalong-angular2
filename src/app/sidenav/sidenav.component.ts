import {
  Component,
  OnInit,
  Input,
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
    <md-sidenav [opened]="isOpened" class="ply-sidenav">
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
  @Input() public isOpened: boolean;
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
