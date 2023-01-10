import {Component, Input} from '@angular/core';
import {TicketModel} from "../../models/ticket";
import {DateTime} from "luxon";

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent {

  @Input() ticket!: TicketModel;
  now = DateTime.now().toJSDate();

}
