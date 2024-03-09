import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FancyHoverComponent } from '../pages/fancy-hover/fancy-hover.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fancy-hover', component: FancyHoverComponent },
];
