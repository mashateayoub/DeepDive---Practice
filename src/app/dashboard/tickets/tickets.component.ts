import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from "./ticket/ticket.component";
import { Ticket } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd($event: { title: string; request: string }) {
    this.tickets.push({
      id: (this.tickets.length + 1).toString(),
      title: $event.title,
      request: $event.request,
      status: 'open',
    });
  }

  
  onMarkAsCompleted(ticket: Ticket | undefined) {
    this.tickets = this.tickets.map((ticket) => (ticket.id === ticket.id ? { ...ticket, status: 'closed' } : ticket));
   }


}
