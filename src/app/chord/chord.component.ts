import {
  Component,
  OnInit,
  ElementRef,
} from '@angular/core';
import {
  ActivatedRoute,
} from '@angular/router';

import { PlyChordType } from '../../ply-components/chord-result';
import { PlyFirebaseService } from '../../ply-firebase/ply-firebase.service';

@Component({
  selector: 'ply-chord',
  styleUrls: [ './chord.component.scss' ],
  templateUrl: './chord.component.html',
})
export class ChordComponent implements OnInit {
  public chord;

  constructor(
    private route: ActivatedRoute,
    private PlyFirebaseService: PlyFirebaseService,
    private elementRef: ElementRef,
  ) {}

  public ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.PlyFirebaseService.getById({ id: params.id })
        .subscribe((chord) => {

          this.chord = chord;
          if (this.chord && this.chord.content) {
            // this.elementRef.nativeElement
            //   .querySelector('.ply-chord-content')
            //   .innerHTML = chord.content;
          }

        });
      });
  }
}
