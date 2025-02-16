import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input<Ticket>();
  detailsToggled =  signal(false);
  complete = output<Ticket | undefined>();

  onToggleDetails() {
    this.detailsToggled.update((detailsToggled) => !detailsToggled);
  }

  markAsCompleted() {
    this.complete.emit(this.ticket());
  }

}
