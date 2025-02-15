import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //   using DestroyRef to destroy the timer
  //   destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.currentStatus = ['online', 'offline', 'unknown'][
      Math.floor(Math.random() * 3)
    ] as 'online' | 'offline' | 'unknown';
    console.log('Timeout created');
    // const Interval =
    setInterval(() => {
      this.currentStatus = ['online', 'offline', 'unknown'][
        Math.floor(Math.random() * 3)
      ] as 'online' | 'offline' | 'unknown';
    }, 5000);

    // this.destroyRef.onDestroy(() => {
    //   clearInterval(Interval);
    //   console.log('Timeout destroyed');
    // });
  }

  refreshStatus() {
    this.currentStatus = ['online', 'offline', 'unknown'][
      Math.floor(Math.random() * 3)
    ] as 'online' | 'offline' | 'unknown';
  }
}
