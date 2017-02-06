import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ply-radio-buttons',
  styleUrls: [ './radio-button.component.css' ],
  template: `
    <md-radio-group
      (change)="onChange"
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
  @Input() public onChange: () => void;
}
