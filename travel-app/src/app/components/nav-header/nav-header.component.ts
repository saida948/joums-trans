import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
  animations: [
    trigger('cursorAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavHeaderComponent implements AfterViewInit {
  @ViewChildren('tabRef') tabRefs!: QueryList<ElementRef>;
  
  position = {
    left: 0,
    width: 0,
    opacity: 0
  };

  navLinks = [
    { name: 'Accueil', route: '/' },
    { name: 'A propos', route: '/about' },
    { name: 'Destinations', route: '/destinations' },
    { name: 'Contact', route: '/contact' },
    { name: 'Reservation', route: '/booking' },
    { name: 'Connexion', route: '/login' },
    { name: 'Inscription', route: '/register' }
  ];
  
  ngAfterViewInit() {
    // Initial setup after view is ready
  }

  onTabMouseEnter(index: number) {
    const element = this.tabRefs.toArray()[index].nativeElement;
    const { width } = element.getBoundingClientRect();
    
    this.position = {
      width,
      opacity: 1,
      left: element.offsetLeft
    };
  }

  onNavMouseLeave() {
    this.position = {
      ...this.position,
      opacity: 0
    };
  }
} 