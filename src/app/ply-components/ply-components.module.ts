import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlyRadioButtonComponent } from './radio-button';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlyRadioButtonComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
  ],
  exports: [
    PlyRadioButtonComponent,
  ],
})
export class PlyComponentsModule {}
