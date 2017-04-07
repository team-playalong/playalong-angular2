import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ply-text-input',
  styleUrls: [ './text-input.component.scss' ],
  template: `
    <md-input-container>
      <input md-input [placeholder]="placeholder" (change)="onChange($event)" />
    </md-input-container>
  `,
})
export class PlyTextInputComponent {
  @Input() public placeholder: string;
  @Output() public change = new EventEmitter();

  public onChange(e) {
    this.change.emit(e.target.value);
  }
}
