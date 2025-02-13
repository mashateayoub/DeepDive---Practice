import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-traffic',
	imports	: [CommonModule	],	
	standalone: true,
	templateUrl: './traffic.component.html',
	styleUrls: ['./traffic.component.css']
})
export class TrafficComponent {
	@Input() dummyTrafficData!: { id: string, value: number }[];
	@Input() maxTraffic!: number;
}
