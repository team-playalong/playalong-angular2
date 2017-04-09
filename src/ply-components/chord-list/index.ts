import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export type PlyChordListType = {

};

@Component({
  selector: 'ply-chord-list',
  styleUrls: [ './chord-list.component.scss' ],
  template: `
  <md-card>
    <md-list>
      <ply-chord-result
        *ngFor="let chord of chords | async"
        [chord]="chord"
        (click)="onChordClicked(chord)"
      >
      </ply-chord-result>
    </md-list>
  </md-card>

  `,
})
export class PlyChordListComponent {
  @Input() public chords: PlyChordListType;
  @Output() public onItemClicked  = new EventEmitter();

  public onChordClicked(chord) {
    this.onItemClicked.emit(chord);
  }

}
