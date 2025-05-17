import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `<app-navbar></app-navbar>
    <main style="padding: 1rem;">
      <router-outlet></router-outlet>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travel-app';
}
