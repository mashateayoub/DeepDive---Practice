import { Component, Input } from '@angular/core';
import { DashboardItemComponent } from "../shared/dashboard-item/dashboard-item.component";
import { ServerStatusComponent } from './server-status/server-status.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TrafficComponent } from './traffic/traffic.component';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']  // Add this line
})
export class DashboardComponent {
	@Input() currentStatus!: string;
	@Input() dummyTrafficData!: { id: string, value: number }[];
	@Input() maxTraffic!: number;
}
