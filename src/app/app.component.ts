import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fire Trip';
  constructor(
  private afs: AngularFirestore,
  private db: AngularFireDatabase,
  private afAuth: AngularFireAuth
  ) {}
}
