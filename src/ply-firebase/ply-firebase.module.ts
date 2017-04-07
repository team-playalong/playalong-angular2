import {
  NgModule,
} from '@angular/core';
import {
  AngularFireModule,
  FirebaseListObservable,
} from 'angularfire2';

import { PlyFirebaseService } from './ply-firebase.service';

const FIREBASE_CONFIG_DEV = {
  apiKey: 'AIzaSyApdtKEld9C-Hbkr62_o4tOPeZl_qiFfTY',
  authDomain: 'playalong.firebaseapp.com',
  databaseURL: 'https://playalong.firebaseio.com',
  projectId: 'project-7489461719706903474',
  storageBucket: 'project-7489461719706903474.appspot.com',
  messagingSenderId: '978151484077',
};

let FIREBASE_CONFIG;

if (ENV !== 'production') {
  FIREBASE_CONFIG = FIREBASE_CONFIG_DEV;
}

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
  ],
  imports: [
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  exports: [
  ],
  providers: [
    PlyFirebaseService,
  ],

})
export class PlyFirebaseModule {}
