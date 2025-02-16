import { Component, ElementRef, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  add = output<{ title: string; request: string }>();

  // use ViewChild signal function to access the form
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleInput: string, requestInput: string) {
    const title = titleInput;
    const request = requestInput;

    if (!title.trim() || !request.trim()) {
      return;
    }

    console.log('Form submitted:', { title, request });
    // this.form?.nativeElement.reset();

    // the output will emit the ticket object
    this.add.emit({ title, request });

    this.form()?.nativeElement.reset();
  }
}
