import { Injectable } from '@angular/core';
import {
  AngularFire,
  // FirebaseListObservable,
} from 'angularfire2';

@Injectable()
export class PlyFirebaseService {
  constructor(private af: AngularFire) {}

  public get({ orderByChild = 'artist', equalTo: startAt = 'Asaf Avidan' }) {
    console.log(`Searching by ${orderByChild} startAt: ${startAt}`);

    return this.af.database.list('/chords', {
      query: { orderByChild, startAt },
    });
  }
}
