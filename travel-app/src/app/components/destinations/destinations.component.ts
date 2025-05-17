import { Component } from '@angular/core';
import { destinations} from '../../data/destinations.data';
import { Destination } from '../../data/destinations.data';
import { CommonModule } from '@angular/common';
import { DestinationCardComponent } from '../destination-card/destination-card.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, DestinationCardComponent],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {
  destinations: Destination[] = destinations;
}
