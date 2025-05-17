import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../data/destinations.data';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  @Input() destination!: Destination;
}
