import { Directive, HostListener, Input } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';

@Directive({
  selector: '[inputNumberLimiter]',
  exportAs: 'numberLimiter',
  standalone: true,
})
export class InputNumberLimiterDirective {
  @Input() maxLength: number = 10;

  constructor(private host: InputNumber) {}

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    let currentValue = this.host.value?.toString() || '';

    if(this.host.mode === 'decimal' && currentValue.includes('.')){
        currentValue = currentValue.substring(0, currentValue.indexOf('.'));
    }

    if (currentValue.length >= this.maxLength) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  handlePaste(event: ClipboardEvent) {
    event.preventDefault();

    const clipboardData = event.clipboardData?.getData('text') || '';
    const currentValue = this.host.value?.toString() || '';

    const newValue = (currentValue + clipboardData).slice(0, this.maxLength);
    const parsedValue = Number(newValue);

    if (!isNaN(parsedValue)) {
      this.host.value = parsedValue;
    }
  }
}
