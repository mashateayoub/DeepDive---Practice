import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-dashboard-item',
	standalone: true,
	templateUrl: './dashboard-item.component.html',
	styleUrls: ['./dashboard-item.component.css'],
})
export class DashboardItemComponent {
	@Input({required: true}) iconSrc!: string;
	@Input({required: true}) title!: string;
}
