import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
	selector: 'app-server-status',
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: './server-status.component.html',
	styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent {
	currentStatus: "online" | "offline" | "unknown" = "online";	

	constructor(){
		this.currentStatus = ['online', 'offline', 'unknown'][Math.floor(Math.random() * 3)] as "online" | "offline" | "unknown";
		setInterval(()=>{
			this.currentStatus = ['online', 'offline', 'unknown'][Math.floor(Math.random() * 3)] as "online" | "offline" | "unknown";
		}, 10000)
	}
	
	refreshStatus(){
		this.currentStatus = ['online', 'offline', 'unknown'][Math.floor(Math.random() * 3)] as "online" | "offline" | "unknown";
	}


}
