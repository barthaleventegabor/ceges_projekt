import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PriceCalculatorComponent } from '../price-calculator/price-calculator.component';


@Component({
  selector: 'app-for-employers',
  imports: [RouterLink,FormsModule,CommonModule,PriceCalculatorComponent],
  templateUrl: './for-employers.component.html',
  styleUrl: './for-employers.component.css'
})
export class ForEmployersComponent {
  title: string = "Munkáltatói felület"
  employees: number = 0;    // dolgozók száma
  admins: number = 0;       // adminok száma
  price: string | null = null; // kalkulált ár

myCalculation = (employees: number, admins: number) => {
  if (employees <= 4 || admins <= 0) {
    return "A vállalatnak legalább 5 dolgozóval és 1 adminnal kell rendelkeznie.";
  } else {
    return (employees * 1500 + admins * 4000).toString();
  }
}




}
