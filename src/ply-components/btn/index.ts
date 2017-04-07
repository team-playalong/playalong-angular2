import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ply-btn',
  styleUrls: [ './btn.component.scss' ],
  template: `
    <!-- <md-input-container>
      <input md-input [placeholder]="placeholder" (change)="onChange($event)" />
    </md-input-container> -->
    <button md-button (click)="onClick($event)"><ng-content></ng-content></button>
  `,
})
export class PlyBtnComponent {
  @Output() public click = new EventEmitter();

  public onClick(e) {
    console.log('yo');
    this.click.emit(e.target.value);
  }
}
