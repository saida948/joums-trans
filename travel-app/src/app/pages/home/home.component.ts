import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationCardComponent } from '../../components/destination-card/destination-card.component';
import { destinations, Destination } from '../../data/destinations.data';

import { HeroComponent } from '../../components/hero/hero.component';
import { InfosComponent } from '../../components/infos/infos.component';
import { DestinationsComponent } from '../../components/destinations/destinations.component';
import { PromosComponent } from '../../components/promos/promos.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  DestinationCardComponent, HeroComponent,
    InfosComponent, DestinationsComponent, PromosComponent,
    TestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  destinations: Destination[] = destinations;
}
