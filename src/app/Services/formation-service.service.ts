import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../Models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private httpClient: HttpClient) { }
  private baseURL: string = 'http://localhost:3000/formations';
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  
  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.baseURL);
  }
  getFormationById(id: string) : Observable<Formation>{
    return this.httpClient.get<Formation>(this.baseURL+"/"+id);
  }
}
