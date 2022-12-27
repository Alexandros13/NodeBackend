import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tour } from 'src/shared/models/Tour';
@Injectable({
  providedIn: 'root',
})
export class TourService {
  getAll() {
    return this.http.get<Tour>('http://127.0.0.1:8000/api/v1/tours');
  }
  constructor(private http: HttpClient) {}
}