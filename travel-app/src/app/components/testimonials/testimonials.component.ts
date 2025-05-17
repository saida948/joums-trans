import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  temoignages = [
    {
      nom: 'Okingui R.',
      commentaire: 'Super service ! le voyage entre Libreville et Lastourville était confortable.'
    },

    {
      nom: 'Angnamantié G.',
      commentaire: 'Bonne organisation, les réductions sont intéssantes.'
    },

    {
      nom: 'Legnongo A.',
      commentaire: 'Je recommande à tous ceux qui voyagent souvent à travers le Gabon.'
    }
  ];
}
