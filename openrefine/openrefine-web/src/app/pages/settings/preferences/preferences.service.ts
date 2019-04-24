import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../../../@core/utils/request-util';

import { IPreference } from './preference.model';

type EntityResponseType = HttpResponse<IPreference>;
type EntityArrayResponseType = HttpResponse<IPreference[]>;

@Injectable({ providedIn: 'root' })
export class PreferenceService {
  private resourceUrl = 'http://localhost:8080/api/preferences';

  constructor(private http: HttpClient) {}

  create(preference: IPreference): Observable<EntityResponseType> {
    return this.http.post<IPreference>(this.resourceUrl, preference, { observe: 'response' });
  }

  update(preference: IPreference): Observable<EntityResponseType> {
    return this.http.put<IPreference>(this.resourceUrl, preference, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPreference>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPreference[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
}
