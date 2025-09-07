import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']
})
export class PriceCalculatorComponent {
  // Szövegek
  @Input() title: string = 'Kalkuláció';
  @Input() firstLabel: string = 'Első érték';
  @Input() secondLabel: string = 'Második érték';
  @Input() buttonText: string = 'Számold ki';

  // A callback, ami a számítást végzi
  @Input() calculateFn: (first: number, second: number) => string = 
    (first, second) => (first + second).toString();

  // Belső változók
  firstValue: number = 0;
  secondValue: number = 0;
  result: string | null = null; // Most már string

  // Gombnyomáskor hívjuk a callback-et
  calculate() {
    const numberResult = this.calculateFn(this.firstValue, this.secondValue);
    this.result = numberResult.toString(); // Átalakítás stringgé
  }
}
