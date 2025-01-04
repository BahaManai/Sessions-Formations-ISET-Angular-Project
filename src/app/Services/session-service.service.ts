import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../Models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor(private httpClient: HttpClient) { }
  private baseURL: string = 'http://localhost:3000/sessions';
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  
  getSessions(): Observable<Session[]> {
    return this.httpClient.get<Session[]>(this.baseURL);
  }
  getSessionById(id: string) : Observable<Session>{
    return this.httpClient.get<Session>(this.baseURL+"/"+id);
  }
  getSessionsByFormationId(formationId: string): Observable<Session[]> {
    const url = this.baseURL + "?formationId=" + formationId;
    return this.httpClient.get<Session[]>(url, this.options);
  }
  updateSession(session: Session): Observable<Session> {
    return this.httpClient.put<Session>(this.baseURL+"/"+session.id, session, this.options);
  }
  deleteSession(id : string):Observable<Session>{
          return this.httpClient.delete<Session>(this.baseURL+"/"+id)
    }
}
