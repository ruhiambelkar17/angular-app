import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class EmployeeDashboardComponent {

}
