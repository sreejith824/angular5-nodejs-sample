import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client, Address } from '../domain/client'

import { Observable } from 'rxjs/observable';

@Injectable()
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getClient(): Observable<Client> {
    return this.httpClient.get<Client>('http://localhost:8080/api/client');
  }
}
