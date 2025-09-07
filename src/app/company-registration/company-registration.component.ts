import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent {
  // --- Címsor ---
  @Input() title: string = 'Cég regisztráció';

  // --- Cégadatok ---
  @Input() companyNameLabel: string = 'Cégnév';
  @Input() taxNumberLabel: string = 'Adószám / Cégjegyzékszám';
  @Input() addressLabel: string = 'Székhely / Telephely címe';
  @Input() activityLabel: string = 'Tevékenységi kör (opcionális)';

  // --- Kapcsolattartó adatok ---
  @Input() contactNameLabel: string = 'Kapcsolattartó neve';
  @Input() contactEmailLabel: string = 'Kapcsolattartó e-mail címe';
  @Input() contactPhoneLabel: string = 'Telefonszám';

  // --- Gomb szöveg ---
  @Input() buttonText: string = 'Küldés';

  // --- Tárolt adatok ---
  companyName: string = '';
  taxNumber: string = '';
  address: string = '';
  activity: string = '';
  contactName: string = '';
  contactEmail: string = '';
  contactPhone: string = '';

  submit() {
    console.log('Cégadatok:', {
      companyName: this.companyName,
      taxNumber: this.taxNumber,
      address: this.address,
      activity: this.activity,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone
    });
    alert('A jelentkezés rögzítve lett (placeholder).');
    this.clearFields()
  }

  
  clearFields() {
    this.companyName = '';
    this.taxNumber = '';
    this.address = '';
    this.activity = '';
    this.contactName = '';
    this.contactEmail = '';
    this.contactPhone = '';
  }
}
