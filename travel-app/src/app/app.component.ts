import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, FooterComponent],
  template: `
    <header style="display: flex; justify-content: center; align-items: center; padding: 0.75rem 0; background-color: #eb9090;">
      <app-nav-header></app-nav-header>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travel-app';
}
