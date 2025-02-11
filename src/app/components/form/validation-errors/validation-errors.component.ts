import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'cds-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css'],
  imports: [CommonModule],
})
export class ValidationErrorsComponent implements OnChanges {
  control = input.required<FormControl>();
  @Input() errors: Record<string, ValidationErrors> | null = {};
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() public isSubmitted = false;
  errorMessages: Record<string, string> = {
    required: 'This field is required',
    email: 'Invalid email address',
  };

  ngOnChanges(changes: SimpleChanges): void {
    const { customErrorMessages } = changes;
    if (customErrorMessages) {
      this.errorMessages = {
        ...this.errorMessages,
        ...customErrorMessages.currentValue,
      };
    }
  }
}
