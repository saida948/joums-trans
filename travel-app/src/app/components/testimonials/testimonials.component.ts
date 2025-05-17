import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  animations: [
    trigger('testimonialAnimation', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class TestimonialsComponent implements OnInit {
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

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.temoignages.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.temoignages.length) % this.temoignages.length;
  }

  setTestimonial(index: number) {
    this.currentIndex = index;
  }
}
