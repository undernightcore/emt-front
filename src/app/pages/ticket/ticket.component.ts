import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { TicketModel } from '../../models/ticket';
import { DateTime } from 'luxon';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, OnDestroy {
  ticket?: TicketModel;
  now = this.#getNow();
  subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getTicket(params['id']);
    });
    this.subscriptions.add(
      interval(500).subscribe(() => (this.now = this.#getNow()))
    );
  }

  getTicket(ticketId: number) {
    this.ticketService.getTicket(ticketId).subscribe((ticket) => {
      this.ticket = ticket;
    });
  }

  #getNow() {
    return DateTime.now().toJSDate();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
