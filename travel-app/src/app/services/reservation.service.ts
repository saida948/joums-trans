import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReservationData {
  fullname: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  paseengers: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/api/reservations';

  constructor(private http: HttpClient) {}

  makeReservation(data: ReservationData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
