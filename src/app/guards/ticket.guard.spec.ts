import { TestBed } from '@angular/core/testing';

import { TicketGuard } from './ticket.guard';

describe('TicketGuard', () => {
  let guard: TicketGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TicketGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
