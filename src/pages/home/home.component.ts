import { Component } from '@angular/core';
import { HomeCardComponent } from '../../components/home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
