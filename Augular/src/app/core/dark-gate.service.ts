import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, shareReplay, filter } from 'rxjs/operators';
import { ApiResponse, Ritual } from './ritual.model';

@Injectable({
  providedIn: 'root'
})
export class DarkGateService {
  private apiUrl = 'https://dummyjson.com/recipes?limit=50';
  
  private ritualsCache$: Observable<Ritual[]>;

  constructor(private http: HttpClient) {
    this.ritualsCache$ = this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.recipes),
      shareReplay(1) 
    );
  }

  getAllRituals(): Observable<Ritual[]> {
    return this.ritualsCache$;
  }

  getRitualById(id: number): Observable<Ritual | undefined> {
    return this.getAllRituals().pipe(
      map(rituals => rituals.find(r => r.id === id))
    );
  }
}