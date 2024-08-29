import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventInfo } from '../models/event-info.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //Services
  httClient: HttpClient = inject(HttpClient);

  //Models
  events: EventInfo[] = [];

  public fetchInitialData(): Observable<any> {
    return this.httClient.get(environment.EVENTS_URL).pipe(
      tap((response: any) => this.events = <EventInfo[]> response),
      //Prevent error on startup
      catchError(()=> of(null))
    );
  }
}
