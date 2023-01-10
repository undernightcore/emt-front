import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TicketsService } from '../../services/tickets.service';
import { TicketModel } from '../../models/ticket';
import { iif } from 'rxjs';
import { TabEnum } from '../../interfaces/tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tickets: TicketModel[] = [];
  #mode = TabEnum.TICKETS;

  constructor(
    private authService: AuthService,
    private ticketsService: TicketsService
  ) {}

  set mode(value: TabEnum) {
    this.#mode = value;
    this.getTickets();
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    iif(
      () => this.#mode === TabEnum.TICKETS,
      this.ticketsService.getTickets(),
      this.ticketsService.getHistory()
    ).subscribe((tickets) => (this.tickets = tickets.data));
  }

  logout() {
    this.authService.logout();
  }
}
