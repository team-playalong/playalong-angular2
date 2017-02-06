import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ply-radio-buttons',
  styleUrls: [ './radio-button.component.css' ],
  template: `
    <md-radio-group
      (change)="onChange($event)"
    >
      {{label}}
      <md-radio-button
        *ngFor="let radioButton of radioButtons"
        [name]="radioButton.name || 'radio'"
        [value]="radioButton.value"
      >
        {{radioButton.label}}
      </md-radio-button>
    </md-radio-group>
  `,
})
export class PlyRadioButtonsComponent {
  @Input() public radioButtons: any[];
  @Input() public label: string;
  @Output() public change = new EventEmitter();

  public onChange(e) {
    this.change.emit(e.value);
  }
}
