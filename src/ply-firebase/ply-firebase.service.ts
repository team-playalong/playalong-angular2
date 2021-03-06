import { Injectable } from '@angular/core';
import {
  AngularFire,
  // FirebaseListObservable,
} from 'angularfire2';

@Injectable()
export class PlyFirebaseService {
  constructor(private af: AngularFire) {}

  public get({ orderByChild = 'artist', equalTo = 'Asaf Avidan' }) {
    console.log(`Searching by ${orderByChild} equalTo: ${equalTo}`);

    return this.af.database.list('/chords', {
      query: { orderByChild, startAt: equalTo, endAt: `${equalTo}~` },
    });
  }

  public getTop({ limitToLast, orderByChild = 'hitCount' }) {
    console.log(`Getting top ${limitToLast} chords`);
    return this.af.database.list('/chords', {
      query: { orderByChild, limitToLast },
    });
  }

  public getById({ id }) {
    console.log(`Getting chord ${id}`);
    return this.af.database.object(`/chords/${id}`);
  }
}
