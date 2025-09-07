// src/app/mainpage/mainpage.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,        // ha nincs, lásd lent a konverziót
  imports: [RouterLink],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  title : string = "Vállalatirányítás egyszerűen."
}
