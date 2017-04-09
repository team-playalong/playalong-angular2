import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export type PlyChordType = {
  artist: string,
  title: string,
};

@Component({
  selector: 'ply-chord-result',
  styleUrls: [ './chord-result.component.scss' ],
  template: `
    <md-list-item>
      <h3 md-line> {{chord.artist}} </h3>
      <img md-list-avatar [src]="chord.imgUrl" alt="No image available">
      <p md-line>{{chord.title}}</p>
    </md-list-item>
    <md-divider></md-divider>
  `,
})
export class PlyChordResultComponent {
  @Input() public chord: PlyChordType;
}
