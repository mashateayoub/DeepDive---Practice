import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class ControlComponent {
  private el = inject(ElementRef);
  @ContentChild('input') control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  label = input.required<string>();

  constructor() {
    // the afterRender and afterNextRender functions are called after the view is rendered
    // afterRender(() => {
    //   console.log('Control afterRender');
    // });

    // afterNextRender(() => {
    //   console.log('Control afterNextRender');
    // });
  }

  // this will not work as the form is not ready yet
  ngOnInit() {
    console.log('Control onInit');
    console.log(this.control?.nativeElement);
  }

  // this guarantees that the form is retrieved after the content is initialized
  ngAfterContentInit() {
    console.log('Control ngAfterContentInit');
    console.log(this.control?.nativeElement);
  }

  onClick() {
    console.log(this.control?.nativeElement);
  }
}
