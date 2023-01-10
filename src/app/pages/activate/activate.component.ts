import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketsService} from "../../services/tickets.service";
import {ErrorInterface} from "../../interfaces/error";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  ticketId = 0;
  showConfirm = false

  constructor(private activatedRoute: ActivatedRoute, private ticketService: TicketsService, private sb: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ticketId = params['id'];
    });
  }

  activateTicket() {
    this.ticketService.activateTicket(this.ticketId).subscribe({
      next: () => {
        this.router.navigate(['/tickets'])
      }, error: (error) => {
        const displayError = error.error as ErrorInterface;
        this.showConfirm = false;
        this.sb.open(displayError.errors[0], undefined, { duration: 2000});
      }
    })
  }
}
