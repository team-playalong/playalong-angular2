import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

type PlyBtnTypes = 'raised';

@Component({
  selector: 'ply-btn',
  styleUrls: [ './btn.component.scss' ],
  template: `
    <button md-button><ng-content></ng-content></button>
  `,
})
export class PlyBtnComponent implements OnInit {
  @Input() public type: 'raised' = 'raised';

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) { }
  public ngOnInit() {
    this.getBtnAttr();
    this.cdr.detectChanges();
  }

  private getBtnAttr() {
    let attr;
    switch (this.type) {
      case 'raised':
        attr = 'md-raised-button';
        break;
      default:
        attr = 'md-button';
        break;
    }
    this.elementRef.nativeElement.querySelector('button').setAttribute(attr, '');
  }
}
