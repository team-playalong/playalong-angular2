import {
  Component,
  OnInit,
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'chord-search',  // <home></home>
  providers: [
  ],
  styleUrls: [ './chord-search.component.css' ],
  templateUrl: './chord-search.component.html',
})
export class ChordSearchComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public title: string;
  public radioButtons: any[];
  public searchBy: string;

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    this.title = 'Chord Search';
    this.radioButtons = [
      {
        label: 'Artist',
        value: 'artist',
      },
      {
        label: 'Title',
        value: 'title',
      },
    ];
  }

  public onSearchByChanged(searchBy) {
    this.searchBy = searchBy;
  }

  public onSearchInputChanged(searchInput) {
    this.searchInput = searchInput;
  }
}
