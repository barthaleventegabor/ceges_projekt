// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ForEmployersComponent } from './for-employers/for-employers.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'for-employers', component: ForEmployersComponent },
  { path: '**', redirectTo: '' },
];
