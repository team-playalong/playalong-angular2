import {
  Component,
  OnInit,
} from '@angular/core';

import { AppState } from '../app.service';
import { PlyFirebaseService } from '../../ply-firebase/ply-firebase.service';

@Component({
  selector: 'chord-search',
  // providers: [
  //   PlyFirebaseService,
  // ],
  styleUrls: [ './chord-search.component.css' ],
  templateUrl: './chord-search.component.html',
})
export class ChordSearchComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public title: string;
  public radioButtons: any[];
  public searchBy: string;
  public searchInput: string;
  public chords: any;

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    private PlyFirebaseService: PlyFirebaseService,
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
console.log(searchBy)
    this.searchBy = searchBy;
  }

  public onSearchInputChanged(searchInput) {
console.log(searchInput)
    this.searchInput = searchInput;
  }

  public onSeachChordsBtnClicked(e) {
    this.chords = this.PlyFirebaseService.get({
      orderByChild: this.searchBy, equalTo: this.searchInput,
    });
  }
}
