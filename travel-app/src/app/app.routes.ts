import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeDemo } from './components/home-demo/home-demo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'destinations', component: DestinationsComponent },
    { path: 'destinations/:id', component: DestinationDetailComponent },
    { path: 'booking',  component: BookingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'demo', component: HomeDemo },
    { path: '**', redirectTo: '' }
];


