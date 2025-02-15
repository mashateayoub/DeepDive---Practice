import { Component } from '@angular/core';

/**
 * ButtonComponent is an Angular component that represents a customizable button element.
 * This component uses an attribute selector 'appbutton' to apply custom styles and behaviors
 * to button elements in the application.
 */
@Component({
  selector: 'button[appbutton]', // Attribute selector for the button element
  standalone: true, // Indicates that this component is standalone
  imports: [], // Additional modules can be imported here if needed
  templateUrl: './button.component.html', // Path to the HTML template
  styleUrls: ['./button.component.css'], // Path to the CSS styles
})
export class ButtonComponent {
  // Component logic goes here
}

