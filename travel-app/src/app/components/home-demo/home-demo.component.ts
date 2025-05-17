import { Component } from '@angular/core';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-home-demo',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './home-demo.component.html',
  styleUrls: ['./home-demo.component.css']
})
export class HomeDemo {
} 