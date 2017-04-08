import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Router,
} from '@angular/router';

import { PlyChordType } from '../../ply-components/chord-result';
import { AppState } from '../app.service';
import { PlyFirebaseService } from '../../ply-firebase/ply-firebase.service';

@Component({
  selector: 'ply-chord-search',
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
  public chord: PlyChordType;

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    private PlyFirebaseService: PlyFirebaseService,
    private router: Router,
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

    this.chords = this.PlyFirebaseService.getTop({
      limitToLast: 15, orderByChild: 'creationDate',
    });
  }

  public onSearchByChanged(searchBy) {
    this.searchBy = searchBy;
  }

  public onSearchInputChanged(searchInput) {
    this.searchInput = searchInput;
  }

  public onSeachChordsBtnClicked(e) {
    this.chords = this.PlyFirebaseService.get({
      orderByChild: this.searchBy, equalTo: this.searchInput,
    });
  }

  public redirectToChord(chord) {
    this.router.navigate(['/chord', chord.$key]);
  }
}
