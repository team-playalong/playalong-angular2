import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PlyRadioButtonsComponent } from './radio-button';
import { PlyTextInputComponent } from './text-input';
import { PlyBtnComponent } from './btn';
import { PlyChordListComponent } from './chord-list';
import { PlyChordResultComponent } from './chord-result';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlyRadioButtonsComponent,
    PlyTextInputComponent,
    PlyBtnComponent,
    PlyChordListComponent,
    PlyChordResultComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
  ],
  exports: [
    PlyRadioButtonsComponent,
    PlyTextInputComponent,
    PlyBtnComponent,
    PlyChordListComponent,
    PlyChordResultComponent,
  ],
})
export class PlyComponentsModule {}
