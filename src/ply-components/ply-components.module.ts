import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlyRadioButtonsComponent } from './radio-button';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlyRadioButtonsComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
  ],
  exports: [
    PlyRadioButtonsComponent,
  ],
})
export class PlyComponentsModule {}
