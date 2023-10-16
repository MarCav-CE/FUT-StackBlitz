import { Component } from '@angular/core';

import { Prescrizioni } from '../prescrizioni';
import { Pazienti } from '../prescrizioni';

@Component({
  selector: 'app-prescr-list',
  templateUrl: './prescr-list.component.html',
  styleUrls: ['./prescr-list.component.css'],
})
export class PrescrListComponent {
  Prescrizioni = [...Prescrizioni];
  Pazienti = [...Pazienti];

  share() {
    window.alert('Prescrizioni è stato condiviso!');
  }

  PazClick(Paz: string): void {
    // window.alert(`PazClick: ${Paz}`);
    window.alert(`PazClick: ${Paz}`);
    console.log('Test');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
