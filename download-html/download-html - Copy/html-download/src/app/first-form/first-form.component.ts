import { Component, OnInit } from '@angular/core';

import { ClientService } from '../service/client.service'
import { Client, Address } from '../domain/client'


@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  client: Client;
  address: Address;

  constructor(private clientService: ClientService) {
    console.log('Inside constructor() ...');
  }

  ngOnInit() {
    this.address = new Address();
    this.client = new Client();
    this.client.address = this.address;
  }

  youtubeLink = 'https://www.youtube.com/watch?v=wBBzD_pDags&list=PL3ewn8T-zRWgWGtHzwrvO2ZdCExU7wk8M';
  youtubePageHtml: string;

  showClient(): void {
    this.clientService.getClient().subscribe(
      data => {
        console.log(data);
        this.client = data;
      }
    );
  }
}

