import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'chord-search',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './chord-search.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './chord-search.component.html'
})
export class ChordSearchComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public title: string;

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    this.title = 'Chord Search';

  }
}
