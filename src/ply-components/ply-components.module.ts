import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PlyRadioButtonsComponent } from './radio-button';
import { PlyTextInputComponent } from './text-input';
import { PlyBtnComponent } from './btn';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlyRadioButtonsComponent,
    PlyTextInputComponent,
    PlyBtnComponent,
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
  ],
})
export class PlyComponentsModule {}
