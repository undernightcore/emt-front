import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { TicketsService } from '../services/tickets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorInterface } from '../interfaces/error';

@Injectable({
  providedIn: 'root',
})
export class TicketGuard implements CanActivate {
  constructor(
    private ticketService: TicketsService,
    private router: Router,
    private sb: MatSnackBar
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ticketService.getTicket(route.params['id'] ?? 0).pipe(
      map(() => {
        return true;
      }),
      catchError((error) => {
        const displayError = error.error as ErrorInterface;
        this.sb.open(displayError.errors[0], undefined, {
          duration: 2000,
          panelClass: 'error-sb',
        });
        return of(this.router.createUrlTree(['/']));
      })
    );
  }
}
