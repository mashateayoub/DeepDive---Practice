import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-server-status',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './server-status.component.html',
	styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent {
	@Input() currentStatus!: string;
}
