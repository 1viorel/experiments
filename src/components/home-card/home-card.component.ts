import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './home-card.component.html',
})
export class HomeCardComponent {
  @Input() title: string | undefined = 'Untitled';
  @Input() body: string | undefined =
    'This body has not been filled with any content yet.';
  @Input() image: string | undefined = '/';
}
