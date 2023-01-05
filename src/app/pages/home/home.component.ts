import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TicketsService} from "../../services/tickets.service";
import {TicketModel} from "../../models/ticket";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tickets: TicketModel[] = []

  constructor(private authService: AuthService, private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.getTickets()
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe((tickets) => this.tickets = tickets.data)
  }

  logout() {
    this.authService.logout()
  }

}
