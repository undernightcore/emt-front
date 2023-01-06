import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TicketsService } from '../../services/tickets.service';
import { TicketModel } from '../../models/ticket';
import { DateTime } from 'luxon';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tickets: TicketModel[] = [];
  now = this.#getNow();

  constructor(
    private authService: AuthService,
    private ticketsService: TicketsService
  ) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketsService
      .getTickets()
      .pipe(
        tap(() => {
          this.now = this.#getNow();
        })
      )
      .subscribe((tickets) => (this.tickets = tickets.data));
  }

  logout() {
    this.authService.logout();
  }

  #getNow() {
    return DateTime.now().toJSDate();
  }
}
