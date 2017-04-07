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
    <button md-button (click)="onClick($event)"><ng-content></ng-content></button>
  `,
})
export class PlyBtnComponent implements OnInit, AfterContentInit {
  @Input() public type: 'raised' = 'raised';
  @Output() public click = new EventEmitter();

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) { }

  public onClick(e) {
    this.click.emit(e.target.value);
  }

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
