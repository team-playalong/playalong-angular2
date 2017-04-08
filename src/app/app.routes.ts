import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ChordSearchComponent } from './chord-search';
import { ChordComponent } from './chord';

import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: ChordSearchComponent },
  { path: 'chord-search', component: ChordSearchComponent },
  { path: 'chord/:id', component: ChordComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
