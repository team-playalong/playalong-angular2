import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PlyRadioButtonsComponent } from './radio-button';
import { PlyTextInputComponent } from './text-input';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlyRadioButtonsComponent,
    PlyTextInputComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
  ],
  exports: [
    PlyRadioButtonsComponent,
    PlyTextInputComponent,
  ],
})
export class PlyComponentsModule {}
