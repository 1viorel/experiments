import { Component } from '@angular/core';
import { HomeCardComponent } from '../../components/home-card/home-card.component';
import { Card } from '../../models/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  cards: Card[] = [
    {
      title: 'Fancy Hover',
      body: 'This looks cool on movie posters/video game icons.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 2',
      body: 'This is the body of card 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 3',
      body: 'This is the body of card 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 4',
      body: 'This is the body of card 4',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 5',
      body: 'This is the body of card 5',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 5',
      body: 'This is the body of card 5',
      image: 'https://via.placeholder.com/150',
    },
  ];
}
