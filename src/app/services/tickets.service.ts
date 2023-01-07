import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedInterface } from '../interfaces/paginated';
import { TicketInterface } from '../interfaces/ticket';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { TicketModel } from '../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private http: HttpClient) {}

  getTickets(page?: number, perPage?: number) {
    return this.http
      .get<PaginatedInterface<TicketInterface>>(
        `${environment.apiBack}/tickets`,
        { params: { page: page ?? 1, perPage: perPage ?? 10 } }
      )
      .pipe(
        map(
          (tickets) =>
            ({
              meta: tickets.meta,
              data: tickets.data.map((ticket) => new TicketModel(ticket)),
            } as PaginatedInterface<TicketModel>)
        )
      );
  }

  getHistory(page?: number, perPage?: number) {
    return this.http
      .get<PaginatedInterface<TicketInterface>>(
        `${environment.apiBack}/tickets/history`,
        { params: { page: page ?? 1, perPage: perPage ?? 10 } }
      )
      .pipe(
        map(
          (tickets) =>
            ({
              meta: tickets.meta,
              data: tickets.data.map((ticket) => new TicketModel(ticket)),
            } as PaginatedInterface<TicketModel>)
        )
      );
  }
}
