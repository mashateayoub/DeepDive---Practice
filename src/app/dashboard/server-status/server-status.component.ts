import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  //   using DestroyRef to destroy the timer
  //   destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      // using effect helps logging the status changes in the console 
      console.log(this.currentStatus());

      onCleanup(() => {
        // the onCleanup function here is called when the component is destroyed
        // console.log('Timeout destroyed');
      });
    });
  }

  ngOnInit(): void {
    this.currentStatus.set(
      ['online', 'offline', 'unknown'][Math.floor(Math.random() * 3)] as
        | 'online'
        | 'offline'
        | 'unknown'
    );
    console.log('Timeout created');

    // using DestroyRef to destroy the timer
    // const Interval =
    setInterval(() => {
      this.currentStatus.set(
        ['online', 'offline', 'unknown'][Math.floor(Math.random() * 3)] as
          | 'online'
          | 'offline'
          | 'unknown'
      );
    }, 5000);

    // using DestroyRef to destroy the timer
    // this.destroyRef.onDestroy(() => {
    //   clearInterval(Interval);
    //   console.log('Timeout destroyed');
    // });
  }

  refreshStatus() {
    this.currentStatus.set(
      ['online', 'offline', 'unknown'][Math.floor(Math.random() * 3)] as
        | 'online'
        | 'offline'
        | 'unknown'
    );
  }
}
