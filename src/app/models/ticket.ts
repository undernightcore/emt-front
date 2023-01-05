import { TicketInterface } from '../interfaces/ticket';

export class TicketModel {
  id: number;
  expires_at: Date;
  activated_at: Date | null;

  constructor(data: TicketInterface) {
    this.id = data.id;
    this.expires_at = new Date(data.expires_at);
    this.activated_at = data.activated_at ? new Date(data.activated_at) : null;
  }
}
