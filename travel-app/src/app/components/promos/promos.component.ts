import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-promos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promos.component.html',
  styleUrl: './promos.component.css'
})
export class PromosComponent {
  promotions = [
    {
      titre: 'Promo Libreville - Franceville',
      description: 'Réduction de 30% sur les départ de juin',
      reduction: '-30%'
    },

    {
      titre: 'Voyage en famille',
      description: '1 enfant gratuit pour 2 adultes payants ',
      reduction: 'Offres spéciale'
    },

    {
      titre: 'Week-end a Port-Gentil',
      description: 'Billet a moitié prix chaque samedi',
      reduction: '-50%'
    }
  ];
}
